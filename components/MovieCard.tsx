"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { API_POSTER_IMAGE_PATH } from "../api/apiConstants";
import { Movie } from "../utils/types";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={"/"} className="overflow-hidden rounded-sm " key={movie.id}>
      <article className="relative">
        <Image
          src={`${API_POSTER_IMAGE_PATH}${movie.poster_path}`}
          alt={`${movie.title} poster image`}
          width={300}
          height={350}
          quality={40}
          className="object-cover w-full h-auto hover:scale-105 hover:opacity-100 duration-500 opacity-95"
        />
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-b from-transparent to-black px-3 pb-9 flex">
          <h3 className="text-white font-base text-2xl self-end">{movie.title}</h3>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
