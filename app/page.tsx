import { API_TRENDING_MOVIES_WEEK, API_TRENDING_TV_SHOWS_WEEK } from "../api/apiConstants";
import Hero from "../components/Hero";
import type { Movie, TV } from "../utils/types";
import MoreMovies from "../components/MoreMovies";
import FeaturedShows from "../components/FeaturedShows";

export default async function Home() {
  const movieFetch = await fetch(API_TRENDING_MOVIES_WEEK, { next: { revalidate: 30 } });
  const showsFetch = await fetch(API_TRENDING_TV_SHOWS_WEEK, { next: { revalidate: 30 } });
  const { results: trendingWeekMovies }: { results: Movie[] } = await movieFetch.json();
  const { results: trendingWeekShows }: { results: TV[] } = await showsFetch.json();

  return (
    <main className="-mt-[80px]">
      <Hero trendingWeekMovies={trendingWeekMovies} />
      <MoreMovies />
      <FeaturedShows featuredShows={trendingWeekShows} />
    </main>
  );
}
