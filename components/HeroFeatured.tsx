"use client";
import Image from "next/image";
import React from "react";

import { API_POSTER_IMAGE_PATH } from "../api/apiConstants";
import HeroInfo from "./HeroInfo";
import type { Movie, TV } from "../utils/types";

type HeroFeaturedProps = {
  featuredContent: Movie | TV;
  type: "movies" | "tv";
  addMb?: boolean;
};

const HeroFeatured: React.FC<HeroFeaturedProps> = ({ featuredContent, type, addMb }) => {
  return (
    <div className="w-full h-[1132px] flex justify-between items-start">
      <HeroInfo content={featuredContent} type={type} addMb={addMb} />
      <div className="w-[55%] h-full absolute right-0">
        <div className="w-[30%] h-full left-0 absolute z-10 bg-gradient-to-l from-transparent to-black opacity-100"></div>
        <div className="w-full h-[800px] right-0 absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-black opacity-100"></div>
        <div className="w-full h-[200px] top-0 absolute bottom-0 z-10 bg-gradient-to-t from-transparent to-black opacity-100"></div>
        <Image
          priority
          src={`${API_POSTER_IMAGE_PATH}${featuredContent.poster_path}`}
          alt={`${
            (featuredContent as Movie).title ? (featuredContent as Movie).title : (featuredContent as TV).name
          } poster image`}
          width={1000}
          height={1000}
          quality={80}
          className="w-full h-full object-cover opa"
        />
      </div>
    </div>
  );
};

export default HeroFeatured;
