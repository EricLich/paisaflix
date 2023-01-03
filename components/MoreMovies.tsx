"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { API_POSTER_IMAGE_PATH, API_TRENDING_MOVIES_WEEK_PAGE } from "../api/apiConstants";
import type { Movie } from "../utils/types";

const MoreMovies = () => {
  const [moreMovies, setMoreMovies] = useState<Movie[]>([]);
  const [pageToLoad, setPageToLoad] = useState<number>(2);

  useEffect(() => {
    fetch(`${API_TRENDING_MOVIES_WEEK_PAGE}${pageToLoad}`).then(async (res) => {
      const { results: movies }: { results: Movie[] } = await res.json();
      console.log(movies);
      if (moreMovies.length === 0) {
        setMoreMovies(movies);
      } else {
        setMoreMovies((prevMovies) => (prevMovies = [...prevMovies, ...movies]));
      }
    });
  }, [pageToLoad]);

  return (
    <section className="w-full mt-[150px] flex flex-col">
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
                  quality={40}
                  className="object-cover w-full h-auto hover:scale-105 hover:opacity-100 duration-500 opacity-95"
                />
                <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-b from-transparent to-black px-3 pb-9 flex">
                  <h3 className="text-white font-base text-2xl self-end">{movie.title}</h3>
                </div>
              </article>
            </Link>
          ))}
      </div>
      <button
        className="self-center mt-6 text-yellow-500 w-20 h-20 bg-yellow-500 rounded-full flex justify-center items-center"
        onClick={() => setPageToLoad((prev) => prev + 1)}
      >
        <div className="w-[90%] h-[90%] bg-black rounded-full flex justify-center items-center text-center text-5xl">
          <span className="self-center -mt-2">+</span>
        </div>
      </button>
    </section>
  );
};

export default MoreMovies;
