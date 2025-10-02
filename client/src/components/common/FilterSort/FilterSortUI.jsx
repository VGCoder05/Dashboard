function FilterSortUI({
  sortBy,
  filterTag,
  sortOptions,
  tagOptions,
  sortDropdownOpen,
  filterDropdownOpen,
  setSortDropdownOpen,
  setFilterDropdownOpen,
  onSortChange,
  onFilterChange,
  getCurrentSortLabel,
  getCurrentFilterLabel,
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="h-10 appearance-none rounded-lg text-subtle-light dark:text-subtle-dark border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark pl-4 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark">
          expand_more
        </span>
      </div>

      <div className="relative">
        <select
          value={filterTag}
          onChange={(e) => onFilterChange(e.target.value)}
          className="h-10 appearance-none rounded-lg text-subtle-light dark:text-subtle-dark border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark pl-4 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
        >
          {tagOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark">
          expand_more
        </span>
      </div>
    </div>
  );
}

export default FilterSortUI;
