import React from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { generateUrl } from "../utils/generateUrl";

const ShortenUrl = ({ error, original_url }) => {
  return (
    <Layout>
      <h1>Hii, welcome to URL page</h1>
    </Layout>
  );
};

export default ShortenUrl;

export async function getServerSideProps(context) {
  const { params } = context;
  const resp = await axios.get(
    `http://localhost:8000/api/geturl/${params.url}`
  );
  return {
    redirect: {
      permanent: false,
      destination: generateUrl(resp.data.original_url),
    },
  };
}
