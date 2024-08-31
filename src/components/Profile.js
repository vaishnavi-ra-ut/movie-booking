import React, { useState, useEffect, useRef } from "react";

export function ProfileMenu({ isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative ${isOpen ? 'z-50' : ''}`}
      ref={menuRef}
    >
      <svg
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="cursor-pointer transition-transform duration-200 transform h-7 w-7 mr-4"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          fill="rgba(255, 255, 255, 0.7)"
        />
      </svg>

      {/* Dropdown Menu */}
      <div
        className={`absolute ${
          isMobile ? 'right-0' : 'left-0'
        } mt-4 -ml-[77px] w-28 grid place-items-center bg-gray-950  border rounded-md shadow-lg transform transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-90 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <a href="#" className="block px-4 py-2 text-gray-400 hover:bg-gray-800">
          Profile
        </a>
        <a href="#" className="block px-4 py-2 text-gray-400 hover:bg-gray-800">
          Settings
        </a>
        <a href="#" className="block px-4 py-2 text-gray-400 hover:bg-gray-800">
          Logout
        </a>
      </div>
    </div>
  );
}



