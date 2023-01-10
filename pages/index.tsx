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
      const res = await axios.get("/api/info");
      setContextState(res.data);
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    } catch (error) {
      setContextState({});
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextProvider value={contextState}>
       <HomePage isLoading={isLoading} />
    </ContextProvider>
  );
}

export default Home;
