import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width:640px)" });

  const setMenu = () => {
    document.body.style.overflow = menuVisible ? "unset" : "hidden";
    setMenuVisible((visible) => !visible);
  };

  return (
    <>
      <nav className="flex py-4 px-8 justify-between items-center relative bg-white">
        <a href="/" className="flex gap-2 items-center">
          <img
            className="w-6 h-6"
            src="../../../public/mrizalr-logo-simple.png"
            alt="mrizalr-logo"
          />
          <h1 className="text-lg font-bold">dashboard</h1>
        </a>
        {!isMobile && (
          <ul className="flex gap-4 md:gap-12 w-50 justify-center duration-150">
            <li className="text-primary font-bold text-sm text-center">
              <a href="/">Home</a>
            </li>
            <li className="font-bold text-sm text-center">
              <a href="/about-me">Experiences</a>
            </li>
            <li className="font-bold text-sm text-center">
              <a href="/blogs">Blogs</a>
            </li>
            <li className="font-bold text-sm text-center">
              <a href="/portofolios">Portofolios</a>
            </li>
          </ul>
        )}
        {isMobile && (
          <i
            onClick={() => setMenu()}
            className={`ri-${
              menuVisible ? "close" : "menu"
            }-line cursor-pointer z-50`}
          ></i>
        )}
      </nav>
      {isMobile && (
        <div
          className={`bg-white fixed ${
            menuVisible ? "left-0 right-0" : "left-full -right-full"
          } top-0 bottom-0 font-semibold flex justify-center items-center duration-150 z-40`}
        >
          <ul className="flex flex-col gap-6 items-center">
            <li className="text-primary">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-me">Experiences</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/portofolios">Portofolios</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
