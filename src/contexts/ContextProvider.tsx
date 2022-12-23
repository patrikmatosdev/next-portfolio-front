import * as React from "react";
import { Thechnologie } from "../sections/About/types";
import { Project } from "../sections/Projects/types";

export interface HomePageProps {
  projects?: Array<Project>;
  experiences?: Array<Project>;
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
