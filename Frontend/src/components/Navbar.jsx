import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Logo from "../assets/book12.gif";

function Navbar() {
  const [authUser] = useAuth();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = (
    <>
      <li>
        <Link to="/" className="text-lg font-medium" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/course" className="text-lg font-medium" onClick={closeMenu}>
          Books
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-lg font-medium" onClick={closeMenu}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-lg font-medium" onClick={closeMenu}>
          About
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky ? "bg-gray-600/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left - Logo + Store Name */}
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Bookstore Logo"
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain cursor-pointer"
            />
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                Hari's
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-pink-500 sm:ml-1">
                BookStore
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex gap-6 text-white">{navItems}</ul>
            {authUser ? (
              <Logout />
            ) : (
              <Link
                to="/signup"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-gray-600 rounded-md shadow-md p-4 mt-2">
            <ul className="flex flex-col gap-4 text-white">{navItems}</ul>
            <div className="mt-4">
              {authUser ? (
                <Logout />
              ) : (
                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="block w-full text-center bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md duration-300"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
