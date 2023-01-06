import * as React from "react";
import { Experience } from "../../pages/api/info";
import { Thechnologie } from "../sections/About/types";
import { Project } from "../sections/Portfolio/types";

export interface HomePageProps {
  projects?: Array<Project>;
  experiences?: Array<Experience>;
  thecnologies?: Array<Thechnologie>;
}

interface ContextProps {
  children: React.ReactNode;
  value: HomePageProps;
}

export const HomeContext = React.createContext({});

const ContextProvider = ({ children, value }: ContextProps) => {
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default ContextProvider;
