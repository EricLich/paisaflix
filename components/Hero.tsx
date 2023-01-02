"use client";

import React from "react";

import HeroFeatured from "./HeroFeatured";
import type { Movie } from "../utils/types";
import NextfeaturedSwiper from "./NextfeaturedSwiper";

type HeroProps = {
  trendingWeekMovies: Movie[];
};

const Hero: React.FC<HeroProps> = ({ trendingWeekMovies }) => {
  return (
    <section>
      <HeroFeatured featuredMovie={trendingWeekMovies[0]} />
      <NextfeaturedSwiper restOfFeaturedMovies={trendingWeekMovies.slice(1, trendingWeekMovies.length)} />
    </section>
  );
};

export default Hero;
