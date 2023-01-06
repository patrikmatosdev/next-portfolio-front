import Head from "next/head";
import ContextProvider from "../src/contexts/ContextProvider";
import HomePage from "../src/layouts/Home";

function Home({ ctx }: any) {
  return (
    <ContextProvider value={ctx}>
      <HomePage />
    </ContextProvider>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/info");
  const obj = await res.json();
  console.log("iojb", obj);
  return { ctx: JSON.stringify(obj) };
};

export default Home;
