import React, { useState } from "react";
import MenuItems from "./Menuitem";
import Articles from "./NewsFetch";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <nav className="relative flex justify-between bg-black px-5 py-5">
        <Link to="/" className="text-3xl font-bold text-green-600">
          ACO<span className="text-white">NEWS</span>
        </Link>
        <ul className="hidden space-x-6 text-white lg:flex">
          {MenuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => setSelectedCategory(item.name.toLowerCase())}
                className="text-lg text-white hover:text-green-600"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="relative hidden items-center lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="rounded-xl border border-gray-700 bg-black px-5 py-1 text-white outline-none"
            onChange={handleSearchChange}
          />
          <CiSearch className="absolute right-3 top-2 text-xl text-white" />
        </div>
      </nav>

      <div className="relative flex justify-between bg-black px-5 py-2 lg:hidden">
        <input
          type="text"
          placeholder="Search"
          className="z-10 w-[90%] rounded-xl border border-gray-700 bg-black px-5 py-1 text-white outline-none"
          onChange={handleSearchChange}
        />
        <CiSearch className="absolute z-10 cursor-pointer pl-5 text-2xl text-white" />
        <RxHamburgerMenu
          className="cursor-pointer text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <Articles category={selectedCategory} searchQuery={searchQuery} />

      {menuOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center bg-black text-white">
          <div className="flex w-full justify-end px-4 pt-4">
            <button
              className="text-3xl text-white"
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="mt-10 flex flex-col items-center space-y-6">
            {MenuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  setSelectedCategory(item.name.toLowerCase());
                  setMenuOpen(false);
                }}
                className="text-lg text-white hover:text-green-600"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;
