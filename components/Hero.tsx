"use client";

import React from "react";

import HeroFeatured from "./HeroFeatured";
import type { Movie } from "../utils/types";
import FeaturedSwiper from "./FeaturedSwiper";

type HeroProps = {
  trendingWeekMovies: Movie[];
};

const Hero: React.FC<HeroProps> = ({ trendingWeekMovies }) => {
  return (
    <section className="w-[85%] mx-auto flex flex-col">
      <HeroFeatured featuredMovie={trendingWeekMovies[0]} />
      <FeaturedSwiper
        featuredItems={trendingWeekMovies.slice(1, trendingWeekMovies.length)}
        title={"Featured this week"}
        mtNegative={true}
      />
    </section>
  );
};

export default Hero;
