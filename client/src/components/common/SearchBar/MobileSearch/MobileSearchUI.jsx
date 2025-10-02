import { createPortal } from "react-dom";

function MobileSearchUI({
  value,
  recentSearches,
  suggestions,
  inputRef,
  onChange,
  onSearch,
  onRecentSearchClick,
  onClearRecent,
  onKeyDown,
  onClose
}) {
  return createPortal(
    <div className="w-full fixed inset-0 z-100 bg-surface-light dark:bg-surface-dark md:hidden">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-border-light dark:border-border-dark ">
        <button 
          onClick={onClose}
          className="p-1 hover:bg-primary/10 rounded-lg transition-colors dark:text-subtle-dark"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark">
            search
          </span>
          <input
            ref={inputRef}
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            className="h-10 w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search tasks..."
          />
          {value && (
            <button
              onClick={() => onChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        {!value && recentSearches.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-subtle-light dark:text-subtle-dark">
                Recent Searches
              </h3>
              <button
                onClick={onClearRecent}
                className="text-xs text-primary hover:underline"
              >
                Clear
              </button>
            </div>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => onRecentSearchClick(search)}
                  className="flex items-center gap-3 w-full p-2 text-left hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark">
                    history
                  </span>
                  <span className="text-sm">{search}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        
        {!value && recentSearches.length === 0 && (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-4xl text-subtle-light dark:text-subtle-dark mb-2 block">
              search
            </span>
            <p className="text-sm text-subtle-light dark:text-subtle-dark">
              Start typing to search tasks...
            </p>
          </div>
        )}
        
        {value && (
          <div className="space-y-2">
            <button
              onClick={() => {
                onSearch(value);
                onClose();
              }}
              className="flex items-center gap-3 w-full p-2 text-left hover:bg-primary/10 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-primary">
                search
              </span>
              <span className="text-sm">Search for "{value}"</span>
            </button>
          </div>
        )}
      </div>
    </div>,

    document.body
  );
}

export default MobileSearchUI;