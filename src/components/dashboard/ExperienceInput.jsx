import React from "react";

const ExperienceInput = ({ formToggleValue, onCancelBtnClick }) => {
  return (
    <section
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.6)] ${
        formToggleValue ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div className="bg-white w-[90vw] max-w-[400px] p-4 rounded-lg">
        <h1 className="mb-4 font-bold">Add new experiences</h1>
        <form className="flex flex-col gap-1 items-end">
          <input
            className="border-2 rounded-lg w-full p-2"
            type="text"
            placeholder="Role"
          />
          <input
            className="border-2 rounded-lg w-full p-2"
            type="text"
            placeholder="Company"
          />
          <input
            className="border-2 rounded-lg w-full p-2"
            type="text"
            placeholder="Year | 2021;2023"
          />
          <input
            className="border-2 rounded-lg w-full p-2"
            type="text"
            placeholder="Techstack | c#;golang;mysql;react"
          />
          <div className="flex gap-1">
            <button
              onClick={(ev) => {
                ev.preventDefault();
                onCancelBtnClick();
              }}
              className="bg-red-500 flex-0 text-white px-2 py-1 rounded-lg font-medium mt-4"
            >
              cancel
            </button>
            <button className="bg-secondary flex-0 text-white px-2 py-1 rounded-lg font-medium mt-4">
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ExperienceInput;
