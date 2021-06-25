import InputForm from "../components/Index/InputForm";
import Layout from "../components/Layout/Layout";

export default function Home({ hostUrl }) {
  return (
    <Layout>
      <div className="container mt-3">
        <h1 className="text-center my-5">Shorten URL</h1>
        <InputForm hostUrl={hostUrl} />
        <div className="mx-auto"></div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const hostUrl = req.headers.host;
  return {
    props: { hostUrl },
  };
}
