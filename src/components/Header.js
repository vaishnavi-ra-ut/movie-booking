import React, { useState } from 'react';
import SearchBar from "./Searchbar";
import logo from "../assets/logo.png";
import { ProfileMenu } from "./Profile";
import Location from "./Location";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black w-full mt-[2%] -mb-[2%] flex items-center justify-between pl-[1.5%] pr-[0.4%] h-6">
      {/* Responsive Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={logo}
          className="h-8 md:h-10 lg:h-12 w-auto"
          alt="Logo"
        />
      </Link>

      {/* Search Bar */}
      <div className="flex-grow max-w-xl mx-4">
        <SearchBar />
      </div>

      {/* Hamburger Menu Icon for Smaller Screens */}
      <div className="lg:hidden relative">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-1 w-[50vw] bg-black text-white rounded-md shadow-lg z-20">
            <div className="p-4 space-y-3 -mt-4 -mr-3 ml-9">
              {/* Location component */}
              <Location />
              {/* ProfileMenu aligned to the right */}
              <div className="flex justify-end mt-2">
                <ProfileMenu isMobile={true} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Menu Items for Larger Screens */}
      <div className="hidden lg:flex items-center space-x-3 ">
        <Location />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;