import React from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width:640px)" });

  return (
    <>
      <div
        className={`flex ${
          isMobile ? "flex-col justify-center" : "flex-row justify-between"
        } items-center gap-4`}
      >
        <img
          className={`${
            isMobile ? "w-40 h-40 rounded-full" : "rounded-none w-[33vw]"
          }`}
          src="mrizalr-avatar.jpg"
          alt="mrizalr-avatar"
        />
        <div
          className={`flex flex-col flex-1 lg:gap-2 items-center text-center px-8`}
        >
          <h1
            className={`font-bold ${
              isMobile ? "text-xl" : "text-[3vw]"
            }  text-defaultFont`}
          >
            Muhammad Rizal Rusdiansyah
          </h1>
          <h3
            className={`font-medium ${
              isMobile ? "text-sm" : "text-[2vw]"
            } text-gray-400`}
          >
            Backend Engineer at Runsystem
          </h3>
          <p className={`pt-8 ${!isMobile && "text-[1.3vw]"}`}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            quisquam laboriosam nostrum quo itaque sunt ratione, esse eveniet
            corrupti aliquam?""
          </p>
          <ul
            className={`flex justify-center ${
              isMobile ? "gap-4" : "gap-6"
            } pt-6`}
          >
            <li className={`${!isMobile && "text-[2vw]"}`}>
              <a href="https://www.instagram.com/m_rijalr">
                <i class="ri-instagram-line text-pink-700"></i>
              </a>
            </li>
            <li className={`${!isMobile && "text-[2vw]"}`}>
              <a href="https://www.x.com/mrizalr_">
                <i class="ri-twitter-x-fill"></i>
              </a>
            </li>
            <li className={`${!isMobile && "text-[2vw]"}`}>
              <a href="https://www.linkedin.com/in/mrizalr">
                <i class="ri-linkedin-fill text-primary"></i>
              </a>
            </li>
            <li className={`${!isMobile && "text-[2vw]"}`}>
              <a href="https://www.github.com/mrzalr">
                <i class="ri-github-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
