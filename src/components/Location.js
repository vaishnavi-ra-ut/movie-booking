import React, { useState, useEffect, useRef } from "react";

const Location = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLocationSelect = (location) => {
    setSearchTerm(location);
    setShowDropdown(false);
  };

  // Effect to close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative -mr-3" ref={dropdownRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={toggleDropdown}
        placeholder="Location "
        className="w-full p-2 mt-1 -mr-1 h-7 text-gray-300 bg-gray-200 bg-opacity-20 border border-gray-400 rounded-lg"
      />
      {showDropdown && (
        <ul className="absolute w-full mt-1 bg-gray-200 bg-opacity-90 border rounded-lg shadow-lg z-20">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleLocationSelect(location)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-300"
              >
                {location}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No locations found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Location;

