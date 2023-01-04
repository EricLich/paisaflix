"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import type { Movie, TV } from "../utils/types";
import ContentCard from "./MovieCard";

type MoreContentProps = {
  apiUrl: string;
  title: string;
};

const MoreContent: React.FC<MoreContentProps> = ({ apiUrl, title }) => {
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
    <section className="w-[85%] mx-auto mt-[150px] flex flex-col z-20">
      <div className="w-full flex justify-between items-center mb-8">
        <h2 className="text-white  font-semibold text-3xl ">{title}</h2>
        <Link href={"/"} className="text-[#FED530] text-xl font-semibold">
          View more
        </Link>
      </div>
      <div className="w-full h-auto grid grid-cols-autofit gap-4">
        {moreContent.length > 0 && moreContent.map((content) => <ContentCard content={content} key={content.id} />)}
      </div>
      <button
        className="self-center mt-6 text-yellow-500 w-20 h-20 bg-yellow-500 rounded-full flex justify-center items-center"
        onClick={() => setPageToLoad((prev) => prev + 1)}
      >
        <div className="w-[90%] h-[90%] bg-black rounded-full flex justify-center items-center text-center text-5xl">
          <span className="self-center -mt-2">+</span>
        </div>
      </button>
    </section>
  );
};

export default MoreContent;
