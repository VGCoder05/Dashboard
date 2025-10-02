const FilterModalUI = ({ tempFilters, options, onFilterChange, onApply, onClear, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="relative bg-surface-light dark:bg-surface-dark rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-bold mb-4">Filters</h3>
        
        {/* Filter Controls */}
        <div className="space-y-4">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={tempFilters.category}
              onChange={(e) => onFilterChange('category', e.target.value)}
              className="w-full h-10 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 text-sm"
            >
              <option value="All">All Categories</option>
              {options.categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          {/* Brand */}
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select
              value={tempFilters.brand}
              onChange={(e) => onFilterChange('brand', e.target.value)}
              className="w-full h-10 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 text-sm"
            >
              <option value="All">All Brands</option>
              {options.brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
            </select>
          </div>
          {/* Rating */}
           <div>
            <label className="block text-sm font-medium mb-1">Minimum Rating: {tempFilters.rating} ★</label>
            <input 
              type="range" 
              min="0" 
              max="5" 
              step="0.1" 
              value={tempFilters.rating}
              onChange={(e) => onFilterChange('rating', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-6">
            <button onClick={onClear} className="text-sm text-primary hover:underline">Clear All</button>
            <div className="flex gap-2">
                <button onClick={onClose} className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm">Cancel</button>
                <button onClick={onApply} className="px-4 py-2 rounded-lg bg-primary text-white text-sm">Apply</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModalUI;