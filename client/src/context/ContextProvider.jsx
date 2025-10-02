import React from "react";
import { DataProvider } from "./Data";
import { SearchProvider } from "./SearchContext";

const ContextProvider = ({ children }) => {
  console.log("Context PRovider is insalized")
  return (
    <SearchProvider>
      <DataProvider>{children}</DataProvider>
    </SearchProvider>
  );
};

export default ContextProvider;
