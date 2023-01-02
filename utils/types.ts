
export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: Collection;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguage>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TV = {
  adult: boolean;
  backdrop_path: string | null;
  created_by: Array<Creator>;
  episode_run_time: any[];
  first_air_date: string;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: string | null;
  networks: Array<Network>;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  seasons: Array<Season>;
  spoken_languages: Array<SpokenLanguage>;
  status: string;
  tagline: string;
  type: string;
  voted_average: number;
  voted_count: number;
}

export type Collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export type Creator = {
  id: number,
  credit_id: string,
  name: string,
  gender: number,
  profile_path: string;
}

export type Genre = {
  id: number;
  name: string;
}

export type LastEpisodeToAir = {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export type Network = {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
}

export type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export type SpokenLanguage = {
  enslish_name: string;
  iso_639_1: string;
  name: string;
}

export type ApiResponseType<T> = {
  success: boolean;
  results: Array<T>;
}
