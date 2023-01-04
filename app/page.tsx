import {
  API_TRENDING_MOVIES_WEEK,
  API_TRENDING_TV_SHOWS_WEEK,
  API_TRENDING_MOVIES_WEEK_PAGE,
  API_TRENDING_TV_WEEK_PAGE,
} from "../api/apiConstants";
import FeaturedShows from "../components/FeaturedShows";
import Hero from "../components/Hero";
import MoreContent from "../components/MoreContent";
import type { Movie, TV } from "../utils/types";

export default async function Home() {
  const movieFetch = await fetch(API_TRENDING_MOVIES_WEEK, { next: { revalidate: 30 } });
  const showsFetch = await fetch(API_TRENDING_TV_SHOWS_WEEK, { next: { revalidate: 30 } });
  const { results: trendingWeekMovies }: { results: Movie[] } = await movieFetch.json();
  const { results: trendingWeekShows }: { results: TV[] } = await showsFetch.json();

  return (
    <main className="-mt-[80px]">
      <Hero trendingWeekMovies={trendingWeekMovies} />
      <MoreContent apiUrl={API_TRENDING_MOVIES_WEEK_PAGE} title={"More movies"} type="movie" />
      <FeaturedShows featuredShows={trendingWeekShows} />
      <MoreContent apiUrl={API_TRENDING_TV_WEEK_PAGE} title={"More shows"} type="tv" />
    </main>
  );
}
