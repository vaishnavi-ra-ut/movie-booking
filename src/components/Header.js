import SearchBar from "./Searchbar";
import logo from "../assets/logo.png";
import { ProfileMenu } from "./Profile";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4  h-[70px] -mt-7 mb-4">
      <div>
        <img src={logo} className="logo w-[180px] h-[48px] mt-1 ml-2" alt="Logo" />
      </div>
      <div className="flex items-center">
        <div className="w-full max-w-sm -mr-5">
          <SearchBar />
        </div>

        <div className="home opacity-70 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff">
            <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/>
          </svg>
        </div>
        <div className="-m-2 mx-2">
           <ProfileMenu/>
       </div>
      </div>
    </div>
  );

}

export default Header;