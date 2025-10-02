import React from 'react';

const DashboardControls = ({ onSortChange, onSearchChange, onOpenFilters, activeFilterCount }) => {
    return (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            {/* Left Side: Search */}
            <div className="relative w-full sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
                <input 
                    type="text"
                    placeholder="Search products..."
                    onChange={onSearchChange}
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary"
                />
            </div>

            {/* Right Side: Sort & Filter */}
            <div className="flex items-center gap-3">
                <select onChange={onSortChange} className="h-10 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="default">Sort by</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating-desc">Rating: High to Low</option>
                    <option value="stock-asc">Stock: Low to High</option>
                </select>

                <button onClick={onOpenFilters} className="relative flex h-10 items-center justify-center gap-2 rounded-lg bg-primary/10 px-4 text-sm font-medium text-primary hover:bg-primary/20">
                    <span className="material-symbols-outlined text-base">filter_list</span>
                    <span>Filters</span>
                    {activeFilterCount > 0 && (
                        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                            {activeFilterCount}
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default DashboardControls;