import React from "react";

import { API_GET_SINGLE_TV_SHOW, API_GET_TV_SHOW_BY_GENRE_ID } from "../../../api/apiConstants";
import Hero from "../../../components/Hero";
import { Movie, TV } from "../../../utils/types";

type TVPageProps = {
  params: {
    id: string;
  };
};

export default async function TVPage({ params: { id } }: TVPageProps) {
  const result = await fetch(`${API_GET_SINGLE_TV_SHOW}/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`, {
    next: { revalidate: 30 },
  });

  let fetchedTV: TV = await result.json();
  fetchedTV = {
    ...fetchedTV,
    genre_ids: fetchedTV.genres.map((genre) => genre.id),
  };

  const newResults = await fetch(`${API_GET_TV_SHOW_BY_GENRE_ID}${fetchedTV.genre_ids[0]}`, {
    next: { revalidate: 30 },
  });
  const { results: similarTV }: { results: Movie[] } = await newResults.json();

  return (
    <main className="-mt-[80px]">
      <Hero
        featuredHero={fetchedTV}
        trendingWeekContent={similarTV.slice(1, similarTV.length)}
        type="tv"
        addMb={true}
        swiperTitle="Similar TV shows"
      />
    </main>
  );
}
