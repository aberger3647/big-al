import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isMobile, toggleNavbar }) => {
  return (
    <>
      <li className={`${isMobile ? "w-full border-b py-3" : ""}`}>
        <NavLink
          to="/"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Home
        </NavLink>
      </li>
      <li className={`${isMobile ? "w-full border-b py-3" : ""}`}>
        <NavLink
          to="/about"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          About
        </NavLink>
      </li>
      <li className={`${isMobile ? "w-full border-b py-3" : ""}`}>
        <NavLink
          to="/services"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Services
        </NavLink>
      </li>
      <li className={`${isMobile ? "w-full border-b py-3" : ""}`}>
        <NavLink
          to="/rates"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Rates
        </NavLink>
      </li>

      <li className={`${isMobile ? "w-full border-b py-3" : ""}`}>
        <NavLink
          to="/blog"
          className={`${isMobile ? "block text-center" : ""}`}
          onClick={toggleNavbar}
        >
          Blog
        </NavLink>
      </li>
      <li className={`${isMobile ? "w-full border-b py-3" : ""}`}>
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
      <nav className="sticky top-0 z-[20] mx-auto flex h-16 items-center justify-between p-4 border border-b-1 bg-white">
        <NavLink to="/">
          <h1 className="flex">Female Personal Trainer</h1>
        </NavLink>

        <ul className="hidden md:flex gap-4">
          <NavLinks isMobile={false} />
        </ul>

        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {isOpen && isSmallScreen && (
        <ul className="flex flex-col items-center bg-white border-b">
          <NavLinks isMobile={true} toggleNavbar={toggleNavbar} />
        </ul>
      )}
    </>
  );
};
