import React, { useState, useEffect, useMemo } from 'react';

// UI component 
import SalesDashboardUI from '../components/dashboard/DashboardUI';
import FilterModalPage from '../components/dashboard/filter-modal/FilterModalPage';

// data (replace with a real API call)
import { useData } from '../context/Data'; // Mock data

// Define the default state for filters for easy resetting
const initialFilters = {
  category: 'All',
  brand: 'All',
  priceRange: [0, 2000],
  rating: 0,
};

const SalesDashboardPage = () => {
  // --- CONSUME DATA FROM CONTEXT ---
  // Get  products and loading state
  const { products, isLoading } = useData();
   
  // State for user controls
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'default', direction: '' });
  const [filters, setFilters] = useState(initialFilters);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);


  // --- DERIVED STATE (PERFORMANCE CRITICAL) ---
  // useMemo ensures this complex filtering/sorting only runs when data or controls change
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // 1. Filtering Logic
    result = result.filter(p => {
        const searchMatch = searchTerm ? p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        const categoryMatch = filters.category !== 'All' ? p.category === filters.category : true;
        const brandMatch = filters.brand !== 'All' ? p.brand === filters.brand : true;
        const priceMatch = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
        const ratingMatch = p.rating >= filters.rating;
        return searchMatch && categoryMatch && brandMatch && priceMatch && ratingMatch;
    });

    // 2. Sorting Logic
    if (sortConfig.key !== 'default') {
        result.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    return result;
  }, [products, searchTerm, filters, sortConfig]);

  const activeFilterCount = useMemo(() => (
    Object.keys(filters).reduce((count, key) => {
      if (JSON.stringify(filters[key]) !== JSON.stringify(initialFilters[key])) {
        return count + 1;
      }
      return count;
    }, 0)
  ), [filters]);

  // --- EVENT HANDLERS ---
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  
  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === 'default') {
        setSortConfig({ key: 'default', direction: '' });
    } else {
        const [key, direction] = value.split('-');
        setSortConfig({ key, direction });
    }
  };
  
  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setIsFilterModalOpen(false);
  };

  return (
    <>
      <SalesDashboardUI
        products={filteredAndSortedProducts}
        isLoading={isLoading}
        activeFilterCount={activeFilterCount}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
        onOpenFilters={() => setIsFilterModalOpen(true)}
      />
      {isFilterModalOpen && (
        <FilterModalPage
          currentFilters={filters}
          allProducts={products}
          onApply={handleApplyFilters}
          onClose={() => setIsFilterModalOpen(false)}
        />
      )}
    </>
  );
};

export default SalesDashboardPage;