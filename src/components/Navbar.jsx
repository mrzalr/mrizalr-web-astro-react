import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width:640px)" });

  return (
    <>
      <nav className="flex p-4 justify-between items-center relative bg-white">
        <a href="/" className="flex gap-2 items-center">
          <img
            className="w-6 h-6"
            src="mrizalr-logo-simple.png"
            alt="mrizalr-logo"
          />
          <h1 className="text-lg font-bold">mrizalr.</h1>
        </a>
        {!isMobile && (
          <ul className="flex gap-8 lg:gap-12 w-50 justify-center duration-150">
            <li className="text-primary font-bold text-sm text-center">
              <a href="/">/index</a>
            </li>
            <li className="font-bold text-sm text-center">
              <a href="/about-me">/about-me</a>
            </li>
            <li className="font-bold text-sm text-center">
              <a href="/blogs">/blogs</a>
            </li>
            <li className="font-bold text-sm text-center">
              <a href="/portofolio">/portofolio</a>
            </li>
          </ul>
        )}
        <div className="flex gap-4 items-center">
          <button onClick={() => setToggleSearch((toggled) => !toggled)}>
            <i className="ri-search-line"></i>
          </button>
          {isMobile ? (
            <i
              onClick={() => setMenuVisible((visible) => !visible)}
              className={`ri-${
                menuVisible ? "close" : "menu"
              }-line cursor-pointer z-50`}
            ></i>
          ) : (
            <button className="bg-primary w-28 h-10 rounded-full text-defaultWhite font-semibold">
              Subscribe
            </button>
          )}
        </div>
        <div
          className={`absolute ${
            isMobile ? "left-10 right-10" : "right-8 w-72"
          } -bottom-16 bg-white ${
            toggleSearch ? "opacity-100" : "opacity-0"
          } rounded-full px-6 py-4 duration-150`}
        >
          <form className="flex gap-2 items-center">
            <input
              className="outline-none w-full"
              type="text"
              placeholder="search posts or tags"
            />
            <i className="ri-search-line text-gray-400"></i>
          </form>
        </div>
      </nav>
      {isMobile && (
        <div
          className={`bg-white fixed ${
            menuVisible ? "left-0 right-0" : "left-full -right-full"
          } top-0 bottom-0 font-semibold flex justify-center items-center duration-150 z-40`}
        >
          {/* <i
            onClick={() => setMenuVisible(false)}
            className={`ri-close-line cursor-pointer absolute right-4 top-4`}
          ></i> */}
          <ul className="flex flex-col gap-6 items-center">
            <li>
              <a href="/">/index</a>
            </li>
            <li>
              <a href="/about-me">/about-me</a>
            </li>
            <li>
              <a href="/blogs">/blogs</a>
            </li>
            <li>
              <a href="/portofolio">/portofolio</a>
            </li>
          </ul>
          <button className="absolute bottom-5 left-50 -translate-x-50 bg-primary w-32 h-10 rounded-full text-defaultWhite font-semibold mt-12">
            Subscribe
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
