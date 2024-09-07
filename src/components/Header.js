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
