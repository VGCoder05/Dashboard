import { useState, useEffect } from "react";
import NavbarUI from "./NavbarUI";
import { useLocation } from "react-router-dom";

function NavbarLogic() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);



  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    // Set current path for navigation highlighting
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [location])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Dashboard", href: "" },
    { name: "Product", href: "product" },
  ];

  return (
    <NavbarUI
      // For Dark mode functionality
      isDarkMode={isDarkMode} // (state) The current theme state (true for dark, false for light).
      onToggleDarkMode={toggleDarkMode} // (handler) The function to call when the theme toggle is clicked.

      // For mobile sidebar/menu functionality
      isMenuOpen={isMenuOpen} // (state) The current visibility state of the mobile menu.
      onToggleMenu={toggleMenu} // (handler) The function to call to open/close the mobile menu.
      onCloseMenu={closeMenu} // (handler) The function to call to explicitly close the menu.

      // For navlinks and their active styling
      currentPath={currentPath} // (state) The current URL path to highlight the active link.
      navLinks={navLinks} // (data) The array of navigation link objects to be rendered.
    />
  );
}

export default NavbarLogic;
