import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductCatalogPage from '../components/dashboard/ProductCatalogPage'
//import SalesDashboardPage from '../components/SalesDashboard/SalesDashboardPage'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductCatalogPage />} />
      <Route path="/product" element={<ProductCatalogPage />} />

    </Routes>
  );
}

export default MainRoutes