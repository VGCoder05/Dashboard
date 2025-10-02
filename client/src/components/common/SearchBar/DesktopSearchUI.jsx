function SearchBarUI({
  value,
  onChange,
  onFocus,
  onBlur,
  onClear,
  isFocused,
  placeholder,
  showClear,
  hidden
}) {
  return (
    <div className={`relative flex-1 ${hidden ? "hidden" : ""} md:block w-full`}>
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark">
        search
      </span>
      <input
        type="search"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`h-10 w-full rounded-lg text-subtle-light dark:text-subtle-dark border bg-surface-light dark:bg-surface-dark pl-10 pr-4 text-sm focus:outline-none focus:ring-1 transition-colors ${isFocused
            ? "border-primary focus:ring-primary"
            : "border-border-light dark:border-border-dark"
          }`}
        placeholder={placeholder}
      />
      {showClear && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>
      )}
    </div>
  );
}

export default SearchBarUI;
