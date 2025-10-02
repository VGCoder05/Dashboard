import React from "react";
import { NavLink } from "react-router-dom";

export const LinkUI = ({ navLinks, currentPath, onCloseMenu = "" }) => {

  return (
    <>
      {navLinks.map((link, index) => {

        return (
          <NavLink
            className="w-max flex items-center shrink gap-2 text-sm font-medium transition-colors"
            key={index}
            to={`/${link.href == "" ? "" : link.href}`}
            onClick={onCloseMenu}
          >
            <span className="material-symbols-outlined text-base">
              {link.icon}
            </span>
            <span className={`w-max
            ${currentPath === `/${link.href}`
                ? "active-link text-primary"
                : "text-subtle-light dark:text-subtle-dark an-underline"
              }`}>
              {link.name}
            </span>
          </NavLink>
        )
      })}
    </>
  );
};

const NavLinkUI = ({ navLinks, currentPath, onCloseMenu, layoutType }) => {
  const navClasses =
    layoutType === "sidebar"
      ? "flex flex-col gap-3"
      : "hidden md:flex items-center gap-6"; // navbar default

  return (
    <nav className={navClasses}>
      <LinkUI
        navLinks={navLinks}
        currentPath={currentPath}
        onCloseMenu={onCloseMenu}
      />
    </nav>
  );
};

export default NavLinkUI;
