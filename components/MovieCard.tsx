"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React, { memo, useEffect, useState } from "react";

import { API_POSTER_IMAGE_PATH } from "../api/apiConstants";
import type { Movie, TV } from "../utils/types";

type ContentCardProps = {
  content: Movie | TV;
  type: "movies" | "tv";
};

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const ContentCard: React.FC<ContentCardProps> = ({ content, type }) => {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded]);
  return (
    <Link href={`/${type}/${content.id}`} className="overflow-hidden rounded-sm h-full w-full" key={content.id}>
      <article className="relative overflow-hidden">
        <motion.div
          initial={"hidden"}
          animate={animationControls}
          variants={animationVariants}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Image
            src={`${API_POSTER_IMAGE_PATH}${content.poster_path}`}
            alt={`${(content as Movie).title ? (content as Movie).title : (content as TV).name} poster image`}
            width={300}
            height={350}
            quality={40}
            className="object-cover w-full h-auto hover:scale-105 hover:opacity-100 duration-500 opacity-95"
            onLoad={() => setLoaded(true)}
          />
        </motion.div>
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-b from-transparent to-black px-3 pb-9 flex">
          <h3 className="text-white font-base text-2xl self-end">
            {(content as Movie).title ? (content as Movie).title : (content as TV).name}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default memo(ContentCard);
