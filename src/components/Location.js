// import React, { useState, useEffect, useRef } from "react";

// const Location = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const locations = [
//     "Bhopal",
//     "Delhi",
//     "hyderabad",
//     "rewa",
//     "chindwara",
//     "jaipur",
//     "Nagpur",
//     "San Diego",
//     "Dallas",
//     "San Jose",
//   ];

//   const filteredLocations = locations.filter((location) =>
//     location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleLocationSelect = (location) => {
//     setSearchTerm(location);
//     setShowDropdown(false);
//   };

//   // Effect to close the dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <div className="relative z-50" ref={dropdownRef}>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         onClick={toggleDropdown}
//         placeholder="Location"
//         className="w-full px-2 h-8 text-white bg-gray-950 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500"
//       />
//       {showDropdown && (
//         <ul className="absolute w-full max-h-40 mt-1 overflow-y-auto text-gray-400 bg-gray-900 opacity-96 border border-gray-300 rounded-xl shadow-lg ">
//           {filteredLocations.length > 0 ? (
//             filteredLocations.map((location, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleLocationSelect(location)}
//                 className="px-4 py-2 cursor-pointer hover:bg-blue-100"
//               >
//                 {location}
//               </li>
//             ))
//           ) : (
//             <li className="px-4 py-2 text-gray-500">No locations found</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Location;
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLocation, setCities } from "../utils/locationSlice"; // Import Redux actions

const Location = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  // Fetch cities from Redux store
  const locations = useSelector((state) => state.location.cities);
  const currentLocation = useSelector((state) => state.location.currentLocation);

  // Fetch cities using API and store them in Redux
  const fetchCities = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const response = await fetch("https://countriesnow.space/api/v0.1/countries", requestOptions);
      const result = await response.json();
      const cities = result.data.find(country => country.country === 'India')?.cities || [];

      // Dispatch cities to Redux
      dispatch(setCities(cities));
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLocationSelect = (location) => {
    setSearchTerm(location);
    setShowDropdown(false);
    dispatch(setCurrentLocation(location)); // Update current location in Redux
  };

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

  // Filter cities based on search
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={toggleDropdown}
        placeholder="Location"
        className="w-full px-2 h-8 text-white bg-gray-950 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500"
      />
      {showDropdown && (
        <ul className="absolute w-full max-h-40 mt-1 overflow-y-auto text-gray-400 bg-gray-900 opacity-96 border border-gray-300 rounded-xl shadow-lg z-20">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleLocationSelect(location)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
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
