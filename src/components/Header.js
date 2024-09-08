import React from "react";
import SearchBar from "./Searchbar";
import logo from "../assets/logo.png";
// import { ProfileMenu } from "./Profile";
import Location from "./Location";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Header = () => {
  // Get current location from Redux store
  const selectedLocation = useSelector((state) => state.location.currentLocation);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
        })
        )
        navigate("/");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [])
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
        {/* <ProfileMenu /> */}
        {user ? (<div className='flex gap-2'>
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign out)</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="cursor-pointer h-7 w-7 mr-4 inline"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              fill="rgba(255, 255, 255, 0.7)"
            />
          </svg>
          {/* <img className='w-16 h-16 rounded-lg mx-2' src={user.photoURL} alt='userIcon'></img> */}

        </div>) : (<Link to="/login">
          <div className="flex gap-2">
            <button className='font-bold text-white'>(Sign in/Sign up)</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="cursor-pointer h-7 w-7 mr-4"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="rgba(255, 255, 255, 0.7)"
              />
            </svg>
          </div>
        </Link>)}
      </div >
    </header >
  );
};

export default Header;
