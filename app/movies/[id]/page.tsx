import React from "react";

import { API_GET_MOVIES_BY_GENRE_ID, API_GET_SINGLE_MOVIE } from "../../../api/apiConstants";
import Hero from "../../../components/Hero";
import { Movie } from "../../../utils/types";

type MoviePageProps = {
  params: {
    id: string;
  };
};

export default async function MoviePage({ params: { id } }: MoviePageProps) {
  const result = await fetch(`${API_GET_SINGLE_MOVIE}/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`, {
    next: { revalidate: 30 },
  });

  let fetchedMovie: Movie = await result.json();
  fetchedMovie = {
    ...fetchedMovie,
    genre_ids: fetchedMovie.genres!.map((genre) => genre.id),
  };

  const newResults = await fetch(`${API_GET_MOVIES_BY_GENRE_ID}${fetchedMovie.genre_ids[0]}`, {
    next: { revalidate: 30 },
  });
  const { results: similarMovies }: { results: Movie[] } = await newResults.json();

  return (
    <main className="-mt-[80px]">
      <Hero
        featuredHero={fetchedMovie}
        trendingWeekContent={similarMovies.slice(1, similarMovies.length)}
        type="movies"
        addMb={true}
        swiperTitle={"Similar movies"}
      />
    </main>
  );
}
