"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { API_POSTER_IMAGE_PATH } from "../api/apiConstants";
import type { Movie } from "../utils/types";
import { motion } from "framer-motion";

type NextfeaturedSwiper = {
  restOfFeaturedMovies: Movie[];
};

const NextfeaturedSwiper: React.FC<NextfeaturedSwiper> = ({ restOfFeaturedMovies }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLElement>();

  useEffect(() => {
    setWidth(carousel!.current!.scrollWidth - carousel!.current!.offsetWidth);
  }, []);

  return (
    <div className={`w-[${carousel.current?.scrollWidth}px] -mt-[300px] relative z-20 overflow-hidden`}>
      <h2 className="text-white font-semibold text-3xl mb-8">Featured this week</h2>
      <motion.div
        /* @ts-ignore */
        ref={carousel}
        className="w-auto flex gap-5 cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {restOfFeaturedMovies.map((movie, index: number) => (
          <motion.div key={movie.id} className=" min-w-[200px] relative rounded-md z-30 overflow-hidden">
            <div>
              <Link href={"/"} className="">
                <Image
                  src={`${API_POSTER_IMAGE_PATH}${movie.poster_path}`}
                  alt={`${movie.title} poster image`}
                  width={200}
                  height={200}
                  quality={80}
                  className="object-cover"
                />
              </Link>
              <div className="w-full h-[90%] absolute bottom-0 bg-gradient-to-b from-transparent to-black"></div>
              {/*  <p className="text-white absolute bottom-2 right-4 z-10 font-semibold text-xl">
                {index + 1 < 10 && 0} {index + 1}
              </p> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NextfeaturedSwiper;
