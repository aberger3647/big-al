import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  isMobile: boolean;
  toggleNavbar?: () => void;
}

const NavLinks = ({ isMobile, toggleNavbar }: NavLinksProps) => {
  return (
    <>
      <li className={`${isMobile ? "w-full border-b py-3 bg-brand-yellow" : ""}`}>
        <NavLink
          to="/"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Home
        </NavLink>
      </li>
      <li className={`${isMobile ? "w-full border-b bg-brand-yellow py-3" : ""}`}>
        <NavLink
          to="/about"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          About
        </NavLink>
      </li>
      <li className={`${isMobile ? "w-full border-b bg-brand-yellow py-3" : ""}`}>
        <NavLink
          to="/services"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Services
        </NavLink>
      </li>
      <li className={`${isMobile ? "w-full border-b bg-brand-yellow py-3" : ""}`}>
        <NavLink
          to="/blog"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Blog
        </NavLink>
      </li>
      <li className={`${isMobile ? "w-full border-b bg-brand-yellow py-3" : ""}`}>
        <NavLink
          to="/contact"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Waitlist
        </NavLink>
      </li>{" "}
      <li className={`${isMobile ? "w-full border-b bg-brand-yellow py-3" : ""}`}>
        <NavLink
          to="/testimonials"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Testimonials
        </NavLink>
      </li>
    </>
  );
};

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = width <= 768;

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-[20] mx-auto flex h-16 items-center justify-between p-4 border border-b-1 bg-brand-yellow">
        <NavLink to="/" className="inline-flex items-center gap-[10px]" aria-label="Big Al Strength & Conditioning, Home">
          <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <circle cx="50" cy="50" r="50" fill="#000" />
            <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fill="#fff" fontFamily="Anton, Impact, sans-serif" fontSize="78">BA</text>
          </svg>
          <span className="ba-wordmark-nav">Big Al Strength &amp; Conditioning</span>
        </NavLink>

        <ul className="hidden md:flex gap-4">
          <NavLinks isMobile={false} />
        </ul>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && isSmallScreen && (
        <ul id="mobile-menu" className="flex flex-col items-center bg-white border-b">
          <NavLinks isMobile={true} toggleNavbar={toggleNavbar} />
        </ul>
      )}
    </>
  );
};
