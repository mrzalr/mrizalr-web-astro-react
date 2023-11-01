import React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../public/mrizalr-logo-simple.png";

const DesktopNav = () => {
  return (
    <header className="w-screen">
      <nav className="flex p-4 justify-between items-center">
        <a href="/" className="flex gap-2 items-center">
          <img
            className="w-6 h-6"
            src="../../public/mrizalr-logo-simple.png"
            alt="mrizalr-logo"
          />
          <h1 className="text-lg font-bold">mrizalr.</h1>
        </a>
        <ul className="flex gap-3 lg:gap-8 w-50 justify-center">
          <li className=" text-sm text-center">
            <a href="/">/index</a>
          </li>
          <li className=" text-sm text-center">
            <a href="/about-me">/about-me</a>
          </li>
          <li className=" text-sm text-center">
            <a href="/blogs">/blogs</a>
          </li>
          <li className=" text-sm text-center">
            <a href="/portofolio">/portofolio</a>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <button>
            <i class="ri-search-line"></i>
          </button>
          <button className="bg-lime-500 w-24 h-10 rounded-full text-white font-semibold">
            Subscribe
          </button>
        </div>
      </nav>
    </header>
  );
};

const MobileNav = () => {
  return (
    <header className="w-screen relative">
      <nav className="flex p-4 justify-between">
        <a href="/" className="flex gap-2 items-center">
          <img
            className="w-6 h-6"
            src="../../public/mrizalr-logo-simple.png"
            alt="mrizalr-logo"
          />
          <h1 className="text-lg font-bold">mrizalr.</h1>
        </a>
        <div className="flex gap-4 items-center">
          <button>
            <i class="ri-search-line"></i>
          </button>
          <i className="ri-menu-line z-50"></i>
        </div>
      </nav>
      <div className="bg-white fixed top-0 left-0 right-0 bottom-0 font-semibold flex justify-center items-center hidden">
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
        <button className="absolute bottom-5 left-50 -translate-x-50 bg-lime-500 w-32 h-10 rounded-full text-white font-semibold mt-12">
          Subscribe
        </button>
      </div>
    </header>
  );
};

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return isMobile ? MobileNav() : DesktopNav();
};

export default Navbar;
