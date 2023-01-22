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
      const resInfo = await axios.get("/api/info");
      const resGitRepos = await axios.get(
        "https://api.github.com/users/patrikmatosdev/repos"
      );

      const projects = resGitRepos.data.map(
        (
          repo: {
            id: number;
            name: string;
            html_url: string;
            description: string;
          },
          idx: number
        ) => {
          return {
            index: idx,
            id: repo.id,
            code: repo.name.replaceAll("-", " "),
            company: "PESSOAL",
            href: repo.html_url,
            img: "https://t2.tudocdn.net/510706?w=646&h=284",
            description: repo.description,
            disabled: false,
          };
        }
      );

      setContextState({ ...resInfo.data, projects });
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
