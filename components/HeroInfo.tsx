"use client";

import Link from "next/link";
import React, { useMemo } from "react";

import useGenres from "../hooks/useGenres";
import type { Genre, Movie, TV } from "../utils/types";
import StarRating from "./StarRating";

type HeroInfoProps = {
  content: Movie | TV;
  type: "movies" | "tv";
  addMb?: boolean;
};

const HeroInfo: React.FC<HeroInfoProps> = ({ content, type, addMb }) => {
  const genres = useGenres();
  const movieGenres: Genre[] = genres.filter((genre) => content.genre_ids.includes(genre.id));

  return (
    <div className={`w-full h-full z-20 flex flex-col items-start mt-[120px] lg:mt-[200px] `}>
      <h1 className="text-white text-[30px] lg:text-5xl font-bold">
        {(content as Movie).title ? (content as Movie).title : (content as TV).name}
      </h1>
      <StarRating voteAverage={content.vote_average} />
      <p
        className="max-h-[200px] h-[150px] w-[100%] max-w-[400px] text-white text-sm lg:text-base leading-6 lg:leading-8 mb-6 lg:mb-8 line-clamp-6"
        title={content.overview}
      >
        {content.overview}
      </p>
      <div className="flex flex-col items-start gap-3">
        <div className="flex gap-2">
          <p className="text-white text-sm lg:text-base font-semibold">Genres:</p>
          <div className="text-white ">
            {movieGenres.map((genre, index: number) => (
              <span key={genre.id} className="text-xs lg:text-base">
                {genre.name}
                {index < movieGenres.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
        <p className="text-white text-sm lg:text-base font-semibold">
          Raitings: {(content.vote_average / 2).toFixed(2)}
        </p>
        <Link
          href={`/${type}/${content.id}`}
          className={`w-[230px] lg:w-[330px] max-w-[230px] lg:max-w-[384px] py-2 lg:py-3 bg-[#FED530] hover:bg-yellow-500 transition-all duration-200 font-semibold text-center rounded-full text-base lg:text-xl mt-4 lg:mt-12 ${
            addMb ? "!mb-0 !lg:mb-[100px]" : ""
          }`}
        >
          Watch now
        </Link>
      </div>
    </div>
  );
};

export default HeroInfo;
