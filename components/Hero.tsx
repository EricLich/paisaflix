"use client";

import React from "react";

import HeroFeatured from "./HeroFeatured";
import type { Movie, TV } from "../utils/types";
import FeaturedSwiper from "./FeaturedSwiper";

type HeroProps = {
  featuredHero: Movie | TV;
  trendingWeekContent: Movie[] | TV[];
  type: "movies" | "tv";
  addMb?: boolean;
  swiperTitle: string;
};

const Hero: React.FC<HeroProps> = ({ trendingWeekContent, featuredHero, type, addMb, swiperTitle }) => {
  return (
    <section className="w-[85%] mx-auto flex flex-col">
      <HeroFeatured featuredContent={featuredHero} type={type} addMb={addMb} />
      <FeaturedSwiper featuredItems={trendingWeekContent} title={swiperTitle} mtNegative={true} type={type} />
    </section>
  );
};

export default Hero;
