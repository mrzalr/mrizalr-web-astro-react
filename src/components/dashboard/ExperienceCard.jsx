import React from "react";

const Card = () => {
  return (
    <div className="flex md:flex-col gap-3 items-start md:items-center p-4 border-b-[1px] md:border-2 md:rounded-lg">
      <div className="w-24 h-24 border-2 rounded-xl">
        <img src="../../../public/empty-photo.svg" />
      </div>
      <div className="flex-1 flex flex-col gap-3 md:w-full">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[100%] md:text-center">
            Unity Programmer
          </h1>
          <div className="flex gap-1 items-center md:justify-center font-medium">
            <h3 className="text-gray-400 text-[65%]">Machine Vision</h3>
            <span className="text-gray-400 text-[65%]">|</span>
            <h3 className="text-gray-400 text-[65%]">2021 - 2023</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 font-medium md:justify-center">
          <span className="bg-primary px-2 py-1 text-[60%] text-white rounded-full">
            C#
          </span>
          <span className="bg-primary px-2 py-1 text-[60%] text-white rounded-full">
            Unity
          </span>
          <span className="bg-primary px-2 py-1 text-[60%] text-white rounded-full">
            C#
          </span>
        </div>
        <div className="flex justify-end">
          <button className="text-red-500 font-semibold text-[70%] flex gap-1">
            <i className="ri-delete-bin-6-line text-red-500"></i>delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
