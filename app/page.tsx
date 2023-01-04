import {
  API_TRENDING_MOVIES_WEEK,
  API_TRENDING_TV_SHOWS_WEEK,
  API_TRENDING_MOVIES_WEEK_PAGE,
  API_TRENDING_TV_WEEK_PAGE,
} from "../api/apiConstants";
import Hero from "../components/Hero";
import type { Movie, TV } from "../utils/types";
import MoreContent from "../components/MoreContent";
import FeaturedShows from "../components/FeaturedShows";

export default async function Home() {
  const movieFetch = await fetch(API_TRENDING_MOVIES_WEEK, { next: { revalidate: 30 } });
  const showsFetch = await fetch(API_TRENDING_TV_SHOWS_WEEK, { next: { revalidate: 30 } });
  const { results: trendingWeekMovies }: { results: Movie[] } = await movieFetch.json();
  const { results: trendingWeekShows }: { results: TV[] } = await showsFetch.json();

  return (
    <main className="-mt-[80px]">
      <Hero trendingWeekMovies={trendingWeekMovies} />
      <MoreContent apiUrl={API_TRENDING_MOVIES_WEEK_PAGE} title={"More movies"} />
      <FeaturedShows featuredShows={trendingWeekShows} />
      <MoreContent apiUrl={API_TRENDING_TV_WEEK_PAGE} title={"More shows"} />
    </main>
  );
}
