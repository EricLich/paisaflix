"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import type { Movie, TV } from "../utils/types";
import ContentCard from "./MovieCard";

type MoreContentProps = {
  apiUrl: string;
  title: string;
  type: "movies" | "tv";
};

const MoreContent: React.FC<MoreContentProps> = ({ apiUrl, title, type }) => {
  const [moreContent, setMoreContent] = useState<Array<Movie | TV>>([]);
  const [pageToLoad, setPageToLoad] = useState<number>(2);

  useEffect(() => {
    fetch(`${apiUrl}${pageToLoad}`).then(async (res) => {
      const { results: content }: { results: Array<Movie | TV> } = await res.json();
      if (moreContent.length === 0) {
        setMoreContent(content);
      } else {
        setMoreContent((prevMovies) => (prevMovies = [...prevMovies, ...content]));
      }
    });
  }, [pageToLoad]);

  return (
    <section className="w-[90%] lg:w-[85%] mx-auto mt-[60px] lg:mt-[150px] flex flex-col z-30 mb-[30px] lg:mb-[80px]">
      <div className="w-full flex justify-between items-center mb-8">
        <h2 className="text-white  font-semibold text-2xl lg:text-3xl ">{title}</h2>
        {/* <Link href={"/"} className="text-[#FED530] text-xl font-semibold">
          View more
        </Link> */}
      </div>
      <div className="w-full h-auto grid grid-cols-autofitSm lg:grid-cols-autofitLg gap-2 lg:gap-4">
        {moreContent.length > 0 &&
          moreContent.map((content) => <ContentCard content={content} key={content.id} type={type} />)}
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="self-center mt-6 text-yellow-500 w-16 lg:w-24 h-16 lg:h-24"
        onClick={() => setPageToLoad((prev) => prev + 1)}
        aria-label="load more content"
        role={"button"}
      >
        <ExpandMoreIcon className="w-full h-full" fontSize="medium" />
      </motion.button>
    </section>
  );
};

export default MoreContent;
