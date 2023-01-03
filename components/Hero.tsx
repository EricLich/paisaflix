"use client";

import React from "react";

import HeroFeatured from "./HeroFeatured";
import type { Movie } from "../utils/types";
import NextfeaturedSwiper from "./NextfeaturedSwiper";
import MoreMovies from "./MoreMovies";

type HeroProps = {
  trendingWeekMovies: Movie[];
};

const Hero: React.FC<HeroProps> = ({ trendingWeekMovies }) => {
  return (
    <section className="w-[85%] mx-auto flex flex-col">
      <HeroFeatured featuredMovie={trendingWeekMovies[3]} />
      <NextfeaturedSwiper restOfFeaturedMovies={trendingWeekMovies.slice(1, trendingWeekMovies.length)} />
      <MoreMovies />
    </section>
  );
};

export default Hero;
