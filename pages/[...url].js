import React from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { generateUrl } from "../utils/generateUrl";
import { API_URL } from "../config";

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
  const resp = await axios.get(`${API_URL}/api/geturl/${params.url}/`);
  return {
    redirect: {
      permanent: false,
      destination: generateUrl(resp.data.original_url),
    },
  };
}
