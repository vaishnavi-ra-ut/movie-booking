// import React, { useState } from 'react';
// import SearchBar from "./Searchbar";
// import logo from "../assets/logo.png";
// import { ProfileMenu } from "./Profile";
// import Location from "./Location";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-black w-[100vw] flex items-center justify-between px-[2vw] py-[1vh] -mb-[4%] z-10">
//       {/* Logo */}
//       <Link to="/" className="flex-shrink-0">
//         <img
//           src={logo}
//           className="h-[8vh] w-[15vw]"
//           alt="Logo"
//         />
//       </Link>

//       {/* Search Bar */}
//       <div className="flex-grow max-w-[50%] mx-4">
//         <SearchBar />
//       </div>

//       {/* Hamburger Menu Icon for Smaller Screens */}
//       <div className="lg:hidden relative">
//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none"
//           aria-label="Menu"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-8 h-8"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-8 h-8"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="absolute top-16 right-1 w-[50vw] bg-black text-white rounded-md shadow-lg z-20">
//             <div className="p-4 space-y-3">
//               {/* Location component */}
//               <Location />
//               {/* ProfileMenu aligned to the right */}
//               <div className="flex justify-end mt-2">
//                 <ProfileMenu isMobile={true} />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Menu Items for Larger Screens */}
//       <div className="hidden lg:flex items-center space-x-3">
//         <Location />
//         <ProfileMenu />
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from 'react';
// import SearchBar from "./Searchbar";
// import logo from "../assets/logo.png";
// import { ProfileMenu } from "./Profile";
// import Location from "./Location";
// import { Link } from "react-router-dom";
// import Movies from './Movies';
// export const [selectedLocation, setSelectedLocation] = useState("Bhopal");
// const Header = () => {
//   const handleLocationSelect = (location) => {
//     setSelectedLocation(location);
//   };

//   return (
//     <>
//       <header className="bg-black w-[100vw] flex items-center justify-between px-[2vw] py-[1vh] -mb-[4%]">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0">
//           <img
//             src={logo}
//             className="h-[8vh] w-[15vw]"
//             alt="Logo"
//           />
//         </Link>

//         {/* Search Bar */}
//         <div className="flex-grow max-w-[50%] mx-4">
//           <SearchBar />
//         </div>

//         {/* Menu Items */}
//         <div className="hidden lg:flex items-center space-x-3">
//           {/* Pass handleLocationSelect to update the location */}
//           <Location onLocationSelect={handleLocationSelect} />
//           <ProfileMenu />
//         </div>
//       </header>

//     </>
//   );
// };

// export default Header;
import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./Searchbar";
import logo from "../assets/logo.png";
import { ProfileMenu } from "./Profile";
import Location from "./Location";
import { Link } from "react-router-dom";

const Header = () => {
  // Get current location from Redux store
  const selectedLocation = useSelector((state) => state.location.currentLocation);
  return (
    <header className="bg-black w-[100vw] flex items-center justify-between px-[2vw] py-[1vh]">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img src={logo} className="h-[8vh] w-[15vw]" alt="Logo" />
      </Link>

      {/* Search Bar */}
      <div className="flex-grow max-w-[50%] mx-4">
        <SearchBar />
      </div>

      {/* Menu Items */}
      <div className="hidden lg:flex items-center space-x-3">
        <Location />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
