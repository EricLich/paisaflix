"use client";
import React from "react";

type StarRatingProps = {
  voteAverage: number;
};

const StarRating: React.FC<StarRatingProps> = ({ voteAverage }) => {
  const starsArray = [...Array(Math.ceil(voteAverage / 2))];
  return (
    <div className="mb-6 lg:mb-12 mt-6 lg:mt-8 flex items-center gap-2">
      {starsArray.map((_, index: number) => (
        <div className="text-[#FED530] relative w-auto" key={index}>
          <p className="text-xl lg:text-3xl">&#9733;</p>
          {index === starsArray.length - 1 && (
            <div
              className={`absolute right-0 top-0 h-full bg-black`}
              style={{ width: `${Math.floor((Math.ceil(voteAverage / 2) - voteAverage / 2) * 100)}%` }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRating;
