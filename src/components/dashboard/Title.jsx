import React from "react";

const Title = ({ title, onAddBtnClick }) => {
  return (
    <section className="flex justify-between px-4 py-1 items-center">
      <h1 className="font-semibold text-lg">{title}</h1>
      <button
        onClick={onAddBtnClick}
        className="bg-secondary px-2 py-1 rounded-lg font-medium text-white flex gap-1"
      >
        <i className="ri-add-line text-white"></i>New
      </button>
    </section>
  );
};

export default Title;
