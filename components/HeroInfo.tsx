"use client";

import Link from "next/link";
import React, { useMemo } from "react";

import useGenres from "../hooks/useGenres";
import type { Genre, Movie } from "../utils/types";
import StarRating from "./StarRating";

type HeroInfoProps = {
  movie: Movie;
};

const HeroInfo: React.FC<HeroInfoProps> = ({ movie }) => {
  const genres = useGenres();
  const movieGenres: Genre[] = genres.filter((genre) => movie.genre_ids.includes(genre.id));

  return (
    <div className="w-full h-full z-20 flex flex-col items-start mt-[200px]">
      <h2 className="text-white text-5xl font-bold">{movie.title}</h2>
      <StarRating voteAverage={movie.vote_average} />
      <p className="w-[100%] max-w-[400px] text-white text-base leading-8 mb-8">{movie.overview}</p>
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
        <p className="text-white font-semibold">Raitings: {(movie.vote_average / 2).toFixed(2)}</p>
        <Link
          href={"/"}
          className="w-[90%] max-w-[384px] py-3 bg-[#FED530] hover:bg-yellow-500 transition-all duration-200 font-semibold text-center rounded-full text-xl mt-12"
        >
          Watch now
        </Link>
      </div>
    </div>
  );
};

export default HeroInfo;
