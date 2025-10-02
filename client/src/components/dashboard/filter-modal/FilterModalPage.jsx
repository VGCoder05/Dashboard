import React, { useState, useMemo } from 'react';
import FilterModalUI from './FilterModalUI';

const FilterModalPage = ({ currentFilters, allProducts, onApply, onClose }) => {
  // --- STATE MANAGEMENT ---
  // tempFilters holds changes *before* they are applied to the main page.
  const [tempFilters, setTempFilters] = useState(currentFilters);

  // --- DERIVED DATA ---
  const filterOptions = useMemo(() => {
    const categories = [...new Set(allProducts.map(p => p.category))];
    const brands = [...new Set(allProducts.map(p => p.brand))];
    return { categories, brands };
  }, [allProducts]);

  // --- EVENT HANDLERS ---
  const handleFilterChange = (filterName, value) => {
    setTempFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const handleApply = () => {
    onApply(tempFilters);
  };
  
  const handleClear = () => {
     const initialFilters = { category: 'All', brand: 'All', priceRange: [0, 2000], rating: 0 };
    setTempFilters(initialFilters);
    onApply(initialFilters); 
  };

  return (
    <FilterModalUI
      tempFilters={tempFilters}
      options={filterOptions}
      onFilterChange={handleFilterChange}
      onApply={handleApply}
      onClear={handleClear}
      onClose={onClose}
    />
  );
};

export default FilterModalPage;