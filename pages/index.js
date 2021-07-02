import axios from "axios";
import { useState } from "react";
import InputForm from "../components/Index/InputForm";
import Layout from "../components/Layout/Layout";
import { API_URL } from "../config";
import { getCookie } from "../utils/getCookie";

export default function Home({ hostUrl, data: userUrls, token }) {
  const [urlsOfUser, seturlsOfUser] = useState(userUrls);

  return (
    <Layout>
      <div className="container mt-3">
        <h1 className="text-center my-5">Shorten URL</h1>
        <InputForm
          hostUrl={hostUrl}
          token={token}
          seturlsOfUser={seturlsOfUser}
        />

        {userUrls.length > 0 ? (
          <h3 className="text-center mt-4">
            <u>URLs generated </u>
          </h3>
        ) : null}
        <div style={{ width: "500px", margin: "0 auto" }}>
          <ul>
            {urlsOfUser.map((url) => {
              return <li key={url.id}>{`${hostUrl}/${url.shorten_url}`}</li>;
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const hostUrl = req.headers.host;
  let data = [];

  let token = getCookie(req.headers.cookie, "token");
  if (token) {
    try {
      const resp = await axios.get(`${API_URL}/api/userurls/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      data = resp.data;
    } catch (error) {
      if (error.response.status == 401) {
        res.setHeader(
          "Set-Cookie",
          "token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        );
      }
    }
  } else {
    // for proper serialization while passing props
    token = null;
  }

  return {
    props: { hostUrl, data, token },
  };
}
