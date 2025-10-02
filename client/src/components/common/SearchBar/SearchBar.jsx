// src/components/Search/SearchComponent.jsx
import DesktopSearch from "./DesktopSearchLogic";
import MobileSearch from "./MobileSearch/MobileSearchLogic";
import { useSearch } from "../../../context/SearchContext";

function SearchBarUI() {
  const { searchQuery, setSearchQuery, showMobileSearch, setShowMobileSearch } = useSearch();
  

  return (
    <>
      {/* Desktop Search */}
      <DesktopSearch
        hidden="true"
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search tasks..."
      />

      {/* Mobile Search Button */}
      <button
        onClick={setShowMobileSearch}
        className="md:hidden flex  items-center justify-center rounded-lg hover:bg-primary/10 transition-colors dark:text-subtle-dark "
        aria-label="Search"
      >
        <span className="material-symbols-outlined text-base">
          search
        </span>
      </button>

      {/* Mobile Search */}
      <MobileSearch
        isOpen={showMobileSearch}
        onClose={() => setShowMobileSearch(false)}
        value={searchQuery}
        onChange={setSearchQuery}
      />
    </>
  );
}

export default SearchBarUI;
