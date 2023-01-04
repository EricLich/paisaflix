"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { API_POSTER_IMAGE_PATH } from "../api/apiConstants";
import type { Movie, TV } from "../utils/types";

type FeaturedSwiperProps = {
  featuredItems: Movie[] | TV[];
  title: string;
  mtNegative: boolean;
};

const FeaturedSwiper: React.FC<FeaturedSwiperProps> = ({ featuredItems, title, mtNegative }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLElement>();

  useEffect(() => {
    setWidth(carousel!.current!.scrollWidth - carousel!.current!.offsetWidth);
  }, []);

  return (
    <div
      className={`w-[${carousel.current?.scrollWidth}px] ${mtNegative && "-mt-[300px]"} relative z-20 overflow-hidden`}
    >
      <h2 className="text-white font-semibold text-3xl mb-8">{title}</h2>
      <motion.div
        /* @ts-ignore */
        ref={carousel}
        className="w-auto flex gap-5 cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {featuredItems.map((item, index: number) => (
          <motion.div key={item.id} className=" min-w-[200px] relative rounded-md z-30 overflow-hidden">
            <Image
              src={`${API_POSTER_IMAGE_PATH}${item.poster_path}`}
              alt={`${(item as Movie).title ? (item as Movie).title : (item as TV).name} poster image`}
              width={200}
              height={200}
              quality={80}
              className="object-cover"
              draggable={false}
            />

            <div
              className="w-full h-[90%] absolute bottom-0 bg-gradient-to-b from-transparent to-black text-white px-3"
              draggable={false}
            >
              <Link
                href={"/contact"}
                className="w-[90%] absolute bottom-3 text-lg text-white hover:text-yellow-300 truncate text-ellipsis"
                draggable={false}
                title={(item as Movie).title ? (item as Movie).title : (item as TV).name}
              >
                {(item as Movie).title ? (item as Movie).title : (item as TV).name}
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedSwiper;
