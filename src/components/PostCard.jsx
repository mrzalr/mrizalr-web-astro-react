import React from "react";

const PostCard = () => {
  return (
    <div className="bg-white p-2 rounded-xl flex flex-col justify-between gap-6">
      <div className="flex flex-col gap-3">
        <img
          className="rounded-lg"
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*I2ObYjzqveyXzEe9QixMPw.png"
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold">
            JSON is incredibly slow: Here's What's Faster!
          </h1>
          <p className="text-xs font-bold text-gray-400">Thu - 02/10/2023</p>
        </div>
        <p className="font-light text-sm line-clamp-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio porro
          corrupti qui nihil, commodi minima quaerat praesentium beatae itaque
          id similique velit debitis sed ad, rerum nisi nesciunt! Dolor,
          assumenda!
        </p>
      </div>
      <div className="flex justify-end">
        <button className="bg-secondary px-8 py-1 font-bold text-white text-sm rounded-lg">
          Read
        </button>
      </div>
    </div>
  );
};

export default PostCard;
