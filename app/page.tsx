import { API_TRENDING_MOVIES_WEEK } from "../api/apiConstants";
import { Movie } from "../utils/types";

export default async function Home() {
  const movieFetch = await fetch(API_TRENDING_MOVIES_WEEK, { next: { revalidate: 30 } });
  const { results: trendingWeekMovies }: { results: Movie[] } = await movieFetch.json();

  return <main className=""></main>;
}
