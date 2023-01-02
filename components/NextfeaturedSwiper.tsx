"use client";

import React from "react";
import type { Movie } from "../utils/types";

type NextfeaturedSwiper = {
  restOfFeaturedMovies: Movie[];
};

const NextfeaturedSwiper: React.FC<NextfeaturedSwiper> = ({ restOfFeaturedMovies }) => {
  return <div>NextfeaturedSwiper</div>;
};

export default NextfeaturedSwiper;
