import NavLinkUI from "./NavLinkUI";

const Sidebar = ({ navLinks, currentPath, onCloseMenu, isMenuOpen, onToggleMenu, onToggleDarkMode, isDarkMode }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onCloseMenu}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar */}
      <aside
        className={`p-6 flex flex-col items-start justify-between fixed top-0 left-0 h-full w-64 bg-surface-light dark:bg-surface-dark shadow-xl z-50           transform transition-transform duration-1000 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <div className="pb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">Menu</h2>
            <button
              onClick={onToggleMenu}
              className="p-2 flex h-8 w-8 items-center justify-center text-primary z-50 fixed right-4 bg-background-light dark:bg-background-dark rounded-md shadow-md shadow-[#aaa] md:hidden"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? "close" : ""}
              </span>
            </button>
          </div>

          <NavLinkUI
            navLinks={navLinks}
            currentPath={currentPath}
            onCloseMenu={onCloseMenu}
            layoutType="sidebar"
          />
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col items-start justify-between">
          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="w-full flex items-center justify-start gap-2 dark:text-subtle-dark hover:text-primary/80 dark:hover:text-primary/80 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-base">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
            Theme
          </button>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
