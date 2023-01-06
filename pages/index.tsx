import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ContextProvider from "../src/contexts/ContextProvider";
import HomePage from "../src/layouts/Home";

function Home({ ctx }: any) {
  const [contextState, setContextState] = useState({});

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/info");
      setContextState(res.data);
    } catch (error) {
      setContextState({});
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextProvider value={contextState}>
      <HomePage />
    </ContextProvider>
  );
}

export default Home;
