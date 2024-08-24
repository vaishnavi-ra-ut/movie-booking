import SearchBar from "./Searchbar";
import logo from "../assets/logo.png";
import { ProfileMenu } from "./Profile";
import Location from "./Location";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[100vw] pl-4 pr-1 h-[3rem] mt-2 mb-1">
      <div>
        <img src={logo} className="logo w-56 h-14 mt-3 ml-1" alt="Logo" />
      </div>
      <div className="flex items-center">
      
        <div className=" max-w-sm mt-2">
          <SearchBar />
        </div>

        <div>
          <Location className="z-20"/>
        </div>

        <div className="home opacity-70 ml-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ffffff" className="w-9 h-9">
            <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" />
          </svg>
        </div>

        <div className="mr-1 z-10 pr-1">
          <ProfileMenu />
        </div>

      </div>
    </div>
  );

}

export default Header;