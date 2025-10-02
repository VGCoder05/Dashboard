import { createContext, useContext, useState, useEffect } from "react";
import { dashboardStats, getProducts } from "./Mook data/data";0

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data ONCE when the provider mounts
  useEffect(() => {
    // Use an async IIFE (Immediately Invoked Function Expression) to fetch data
    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []); 

  const value = {
    products,
    isLoading,
    error,
    dashboardStats, 
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}


// Custom hook to consume the context
export function Data() {
  const context = useContext(DataContext);
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}