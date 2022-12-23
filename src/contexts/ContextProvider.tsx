import * as React from "react";
import { HomePageProps } from "../layouts/Home";

interface ContextProps {
  children: React.ReactNode;
  value: HomePageProps;
}

const MyContext = React.createContext({});

const ContextProvider = ({ children, value }: ContextProps) => {
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
