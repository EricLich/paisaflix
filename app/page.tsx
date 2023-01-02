import { API_TRENDING_MOVIES_WEEK } from "../api/apiConstants";
import Hero from "../components/Hero";
import type { Movie } from "../utils/types";

export default async function Home() {
  const movieFetch = await fetch(API_TRENDING_MOVIES_WEEK, { next: { revalidate: 30 } });
  const { results: trendingWeekMovies }: { results: Movie[] } = await movieFetch.json();

  return (
    <main className="-mt-[80px]">
      <Hero trendingWeekMovies={trendingWeekMovies} />
    </main>
  );
}
