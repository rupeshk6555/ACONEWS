import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./Menuitem";

import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      <div className="flex h-[90px] w-full min-w-[320px] items-center justify-between px-10">
        {/* Logo */}
        <Link to="/" className="items-center text-3xl font-bold text-green-600">
          ACO<span className="text-white">NEWS</span>
        </Link>

        {/* Navigation menu   */}
        <nav className="hidden space-x-6 lg:flex">
          {MenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-lg text-white hover:text-green-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search bar and mobile menu icon */}
        <div className="flex items-center space-x-4">
          {/* Search bar for larger screens */}
          <div className="relative hidden items-center lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="rounded-xl bg-black px-5 py-1 text-white shadow-xl"
            />
            <CiSearch className="absolute right-3 top-2 size-5 cursor-pointer text-white" />
          </div>

          {/* Search icon for mobile screens */}
          <div className="lg:hidden">
            <CiSearch
              className="size-6 cursor-pointer text-white"
              onClick={() => setSearchOpen(!searchOpen)} // Toggle search bar
            />
          </div>

          {/* Hamburger menu icon for mobile screens */}
          <div className="lg:hidden">
            <RxHamburgerMenu
              className="size-6 cursor-pointer text-white"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
            />
          </div>
        </div>
      </div>

      {/* Search bar for mobile screens */}
      {searchOpen && (
        <div className="bg-black px-4 py-2 lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] rounded-xl border-red-50 bg-black px-5 py-1 text-white"
          />
        </div>
      )}

      {/* Mobile navigation menu (full-height) */}
      {menuOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center bg-black text-white lg:hidden">
          <div className="flex w-full justify-end px-4 pt-24">
            <button
              className="text-3xl text-white"
              onClick={() => setMenuOpen(false)} // Close menu
            >
              <span className="cursor-pointer pr-10 pt-4">
                <AiOutlineClose />
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6">
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-lg text-white hover:text-green-600"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
