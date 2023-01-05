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
    <div className={`w-full h-full z-20 flex flex-col items-start mt-[200px] `}>
      <h2 className="text-white text-5xl font-bold">
        {(content as Movie).title ? (content as Movie).title : (content as TV).name}
      </h2>
      <StarRating voteAverage={content.vote_average} />
      <p className="w-[100%] max-w-[400px] text-white text-base leading-8 mb-8">{content.overview}</p>
      <div className="flex flex-col items-start gap-3">
        <div className="flex gap-2">
          <p className="text-white font-semibold">Genres:</p>
          <div className="text-white ">
            {movieGenres.map((genre, index: number) => (
              <span key={genre.id}>
                {genre.name}
                {index < movieGenres.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
        <p className="text-white font-semibold">Raitings: {(content.vote_average / 2).toFixed(2)}</p>
        <Link
          href={`/${type}/${content.id}`}
          className={`w-[90%] max-w-[384px] py-3 bg-[#FED530] hover:bg-yellow-500 transition-all duration-200 font-semibold text-center rounded-full text-xl mt-12 ${
            addMb ? "!mb-[100px]" : ""
          }`}
        >
          Watch now
        </Link>
      </div>
    </div>
  );
};

export default HeroInfo;
