// src/pages/ProductCatalogPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import ProductCatalogUI from './ProductCatalogUI';
import { Data } from '../../context/Data'; // Mock data

const ProductCatalogPage = () => {
  // --- STATE MANAGEMENT ---
  const mockProducts = Data().mockProducts;
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // --- DATA FETCHING ---
  // Simulate fetching data from an API when the component mounts
  useEffect(() => {
    setIsLoading(true);
    // In a real app, you'd fetch from your backend here:
    // fetch('/api/products').then(res => res.json()).then(data => ...)
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  // --- EVENT HANDLERS ---
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddProduct = () => {
    console.log('Add Product button clicked!');
    // Logic to open a modal or navigate to a "new product" page
  };
  
  const handleEditProduct = (productId) => {
    console.log(`Edit button clicked for product ID: ${productId}`);
    // Logic to open an edit form for the specific product
  };

  // --- DERIVED STATE / MEMOIZATION ---
  // Filter products based on the search term.
  // useMemo ensures this expensive operation only runs when products or searchTerm change.
  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return products;
    }
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);
  
  const user = {
      name: "Alex",
      avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxwuSoOy1rbScZb63HSbphHhwpIlEVOgT8E2Gd_hm48wbsvYqo1jJLs0zKofH9UsdVEYpBaVsh6SkJcV3h9SEaUbFzfWRM46l-miqKVn1oaHHdkPX4mawIMgQTO-3tkcnTqMe6weGGW3-M-PKhBLoqiz4k-nvnad3D25_KgF9IrTQoHWaSyM8x2iD15dCVvX4ap0OrpwLQmf1a4Uw2LzGbOA4pJv78uBpgb-j49lsbn1dDd1PHxiAV4FwpIeTHzQE6ikwJ2T7-5-IL",
  };

  // --- RENDER ---
  // Pass all state and handlers down to the UI component as props
  return (
    <ProductCatalogUI
      user={user}
      products={filteredProducts}
      isLoading={isLoading}
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      onAddProduct={handleAddProduct}
      onEditProduct={handleEditProduct}
    />
  );
};

export default ProductCatalogPage;