"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { API_POSTER_IMAGE_PATH, API_TRENDING_MOVIES_WEEK_PAGE } from "../api/apiConstants";
import type { Movie } from "../utils/types";

const MoreMovies = () => {
  const [moreMovies, setMoreMovies] = useState<Movie[]>([]);
  useEffect(() => {
    fetch(`${API_TRENDING_MOVIES_WEEK_PAGE}2`).then(async (res) => {
      const { results: movies }: { results: Movie[] } = await res.json();
      setMoreMovies(movies);
    });
  }, []);

  return (
    <section className="w-full mt-[150px]">
      <div className="w-full flex justify-between items-center mb-8">
        <h2 className="text-white  font-semibold text-3xl ">More movies</h2>
        <Link href={"/"} className="text-[#FED530] font-semibold">
          View more
        </Link>
      </div>
      <div className="w-full h-auto grid grid-cols-autofit gap-4">
        {moreMovies.length > 0 &&
          moreMovies.map((movie) => (
            <Link href={"/"} className="overflow-hidden rounded-sm " key={movie.id}>
              <article className="relative">
                <Image
                  src={`${API_POSTER_IMAGE_PATH}${movie.poster_path}`}
                  alt={`${movie.title} poster image`}
                  width={300}
                  height={350}
                  quality={60}
                  className="object-cover w-full h-auto hover:scale-105 hover:opacity-100 duration-500 opacity-95"
                />
                <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-b from-transparent to-black px-3 pb-9 flex">
                  <h3 className="text-white font-base text-2xl self-end">{movie.title}</h3>
                </div>
              </article>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default MoreMovies;
