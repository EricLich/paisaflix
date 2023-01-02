"use client";
import React from "react";

import type { Movie } from "../utils/types";

type HeroFeaturedProps = {
  featuredMovie: Movie;
};

const HeroFeatured: React.FC<HeroFeaturedProps> = ({ featuredMovie }) => {
  console.log(featuredMovie);
  return <div>HeroFeatured</div>;
};

export default HeroFeatured;
