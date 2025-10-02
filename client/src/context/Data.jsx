import { createContext, useContext, useState } from "react";
import { mockProducts, dashboardStats, salesProducts } from "./Mook data/data";0

const DataContext = createContext(null);

export function DataProvider({ children }) {

  return (
    <DataContext.Provider
      value={{
        mockProducts,
        dashboardStats,
        salesProducts
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function Data() {
  return useContext(DataContext);
}
