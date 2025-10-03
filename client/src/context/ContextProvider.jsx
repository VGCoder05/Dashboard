import React from "react";
import { DataProvider } from "./Data";
import { SearchProvider } from "./SearchContext";
import { AuthProvider } from "./AuthContext";

const ContextProvider = ({ children }) => {
  console.log("Context PRovider is insalized")
  return (

    <AuthProvider>
      <SearchProvider>
        <DataProvider>{children}</DataProvider>
      </SearchProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
