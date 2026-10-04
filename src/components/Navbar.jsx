import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLinkClass = "text-[#9807C8] font-semibold";
  const baseLinkClass =
    "text-white/80 hover:text-[#9807C8] transition-colors duration-200 font-medium";

  return (
    <header className="sticky top-0 z-50 bg-[#171a3a]/90 shadow-sm backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-[50px] max-w-[1720px] items-center justify-between px-[20px] sm:px-[50px] lg:h-[70px] xl:h-[100px]"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center shrink-0" id="nav-logo">
          <img
            src={logo}
            alt="RT Digital logo"
            className="h-[34px] w-auto object-contain sm:h-[48px] lg:h-[56px] xl:h-[76px]"
          />
        </Link>

        <ul className="hidden md:flex list-none items-center gap-8 m-0 p-0">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  isActive ? activeLinkClass : baseLinkClass
                }
                id={`nav-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <Link
            to="/contact"
            id="nav-cta-button"
            className="rounded-lg bg-[#9807C8] px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#7a06a0]"
          >
            Start a Project
          </Link>
        </div>

        <button
          id="nav-hamburger"
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          id="nav-mobile-menu"
          className="border-t border-white/15 bg-[#171a3a]/95 px-4 pb-4 md:hidden"
        >
          <ul className="flex list-none flex-col gap-3 m-0 p-0 pt-3">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? activeLinkClass : baseLinkClass}`
                  }
                  id={`nav-mobile-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                id="nav-mobile-cta-button"
                onClick={() => setMenuOpen(false)}
                className="mt-1 block rounded-lg bg-[#9807C8] px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#7a06a0]"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
