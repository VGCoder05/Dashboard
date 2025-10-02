import { Link, NavLink } from "react-router-dom";
import SearchBar from "../../common/SearchBar/SearchBar";
import Sidebar from "./Sidebar";
import NavLinkUI from "./NavLinkUI";

function NavbarUI({
  // For Dark mode functionality
  isDarkMode,       // (state) A boolean that determines the current theme for styling.
  onToggleDarkMode, // (handler) The function to execute when the theme toggle button is clicked.

  // For mobile sidebar functionality
  isMenuOpen,       // (state) A boolean that controls the visibility of the mobile sidebar.
  onToggleMenu,     // (handler) The function to call from the hamburger button to open/close the menu.

  // For navlinks and their active styling
  currentPath,      // (state) The current URL path, used to apply 'active' styles to the correct link.
  navLinks,         // (data) An array of link objects to be rendered in the navigation.
  onCloseMenu,      // (handler) A function to explicitly close the menu, typically used by child components.
}) {

  return (
    <>
      <header className="px-4 md:px-6 lg:px-10 h-16 sticky top-0 z-10 flex items-center gap-2 sm:gap-7 md:gap-10 border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm px-4 md:px-6 lg:px-10">
        {/* Logo & Nav Links */}
        <div className="flex items-center gap-6">
          <Link className="flex items-center  md:gap-3" to="/">
            <span className="material-symbols-outlined text-primary text-3xl">
              task_alt
            </span>
            <h1 className="text-primary text-xl font-bold">NoteMaster</h1>
          </Link>
          <NavLinkUI navLinks={navLinks} currentPath={currentPath} />
        </div>


        {/* Actions + SearchBar */}
        <div className="w-full flex items-center justify-end md:justify-between gap-2 md:gap-3">
          <SearchBar />

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="hidden md:block flex items-center justify-center dark:text-subtle-dark hover:text-primary/80 dark:hover:text-primary/80 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-base">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Notifiaction Btn */}
          <button className="flex items-center justify-center  dark:text-subtle-dark hover:text-primary/80 dark:hover:text-primary/80 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          {/* User Profile */}
          <div
            className="h-[32px] w-[32px] rounded-full bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8VLSYzimlLuNIzb5r3R64kpfP0cYK1YrHPXgnoOuXkAzIiKnfKMO6-q3SN7nQGUe-VKtz4zlThXyFHyPsKip4kVwU11jNMyllKg9fdsePJ3togqP7Vfo7yAjuzyXMLtPy-nWnEkECVwVzZQHQCL9YBeHncx-ZB2feGNdgVhbs0o4ZRLDsz7Bd-lhfSmfY36uNuX0Jvu2BtqPZ51YneoAz6-K3_XFL3YbM5qAx1jlYwFYirbyBYRsvzcQ8n1YtYFK20uCjbaWDLZFT')`,
            }}
          />

          {/* Menu Button */}
          <button
            onClick={onToggleMenu}
            className={`p-2 flex h-9 w-9 items-center justify-center text-primary z-50  bg-surface dark:bg-surface-dark rounded-md shadow-md md:hidden ${isMenuOpen ? "hidden" : ""}`}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "" : "menu"}
            </span>
          </button>
        </div>
      </header>
      {/* For Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border-light dark:border-border-dark py-4 md:hidden">
          <Sidebar
            // For Dark mode functionality
            isDarkMode={isDarkMode}           // (state) Passes the theme state down to the sidebar.
            onToggleDarkMode={onToggleDarkMode} // (handler) Allows the sidebar to also toggle the theme.

            // For sidebar control
            isMenuOpen={isMenuOpen}           // (state) The sidebar uses this to know it should be visible.
            onToggleMenu={onToggleMenu}       // (handler) Passes the function to close the menu from within.

            // For navlinks & there styling
            navLinks={navLinks}               // (data) The same navigation links for the mobile view.
            currentPath={currentPath}         // (state) The current path for active link styling in mobile.
            onCloseMenu={onCloseMenu}         // (handler) Allows links inside the sidebar to close it upon navigation.
          />
        </div>
      )}
    </>

  );
}

export default NavbarUI;