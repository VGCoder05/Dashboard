import { useState } from "react";
import FilterSortUI from "./FilterSortUI";

function FilterSort({ sortBy, onSortChange, filterTag, onFilterChange }) {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const sortOptions = [
    { value: "date-modified", label: "Sort by: Date Modified" },
    { value: "date-created", label: "Sort by: Date Created" },
    { value: "title-asc", label: "Sort by: Title (A-Z)" },
    { value: "title-desc", label: "Sort by: Title (Z-A)" },
  ];

  const tagOptions = [
    { value: "all", label: "Filter by: Tag" },
    { value: "work", label: "Work" },
    { value: "personal", label: "Personal" },
    { value: "finance", label: "Finance" },
    { value: "travel", label: "Travel" },
    { value: "ideas", label: "Ideas" },
  ];

  const handleSortChange = (value) => {
    onSortChange(value);
    setSortDropdownOpen(false);
  };

  const handleFilterChange = (value) => {
    onFilterChange(value);
    setFilterDropdownOpen(false);
  };

  const getCurrentSortLabel = () => {
    return (
      sortOptions.find((option) => option.value === sortBy)?.label || "Sort by"
    );
  };

  const getCurrentFilterLabel = () => {
    return (
      tagOptions.find((option) => option.value === filterTag)?.label ||
      "Filter by"
    );
  };

  return (
    <FilterSortUI
      sortBy={sortBy}
      filterTag={filterTag}
      sortOptions={sortOptions}
      tagOptions={tagOptions}
      sortDropdownOpen={sortDropdownOpen}
      filterDropdownOpen={filterDropdownOpen}
      setSortDropdownOpen={setSortDropdownOpen}
      setFilterDropdownOpen={setFilterDropdownOpen}
      onSortChange={handleSortChange}
      onFilterChange={handleFilterChange}
      getCurrentSortLabel={getCurrentSortLabel}
      getCurrentFilterLabel={getCurrentFilterLabel}
    />
  );
}

export default FilterSort;
