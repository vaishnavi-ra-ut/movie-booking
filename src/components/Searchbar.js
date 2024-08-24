import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search..."
          className="mr-4 w-0 group-hover:w-96 transition-all duration-300 bg-gray-400 text-black placeholder-gray-900 rounded-full pl-4 py-2 opacity-0 group-hover:opacity-60 focus:opacity-100"        />
        <button className="absolute inset-y-0 right-0  flex items-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className=" opacity-70 pr-2 h-12 w-12 mr-1"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 6.42 13.58 4 10.5 4S5 6.42 5 9.5 7.42 15 10.5 15c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49l-4.24-4.25zM10.5 13C8.57 13 7 11.43 7 9.5S8.57 6 10.5 6 14 7.57 14 9.5 12.43 13 10.5 13z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
