import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ContextProvider from "../src/contexts/ContextProvider";
import HomePage from "../src/layouts/Home";
import PageLoading from "../src/layouts/PageLoding";

function Home() {
  const [isLoading, setIsloading] = useState(true);
  const [contextState, setContextState] = useState({});

  const fetchData = async () => {
    try {
      const res = await axios.get("/next-portfolio-front/api/info");
      setContextState(res.data);
      setIsloading(false);
    } catch (error) {
      setContextState({});
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextProvider value={contextState}>
      {isLoading ? <PageLoading isLoading={isLoading} /> : <HomePage />}
    </ContextProvider>
  );
}

export default Home;
