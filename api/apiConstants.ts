//MOVIE ENDPOINTS

export const API_TRENDING_MOVIES_WEEK: string = `${process.env.NEXT_PUBLIC_BASE_MOVIE_API}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
export const API_TRENDING_MOVIES_DAY: string = `${process.env.NEXT_PUBLIC_BASE_MOVIE_API}/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;

//SHOW ENDPOINTS
export const API_TRENDING_TV_SHOWS_DAY: string = `${process.env.NEXT_PUBLIC_BASE_MOVIE_API}/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
export const API_TRENDING_TV_SHOWS_WEEK: string = `${process.env.NEXT_PUBLIC_BASE_MOVIE_API}/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;

//GET IMAGES URL
export const API_POSTER_IMAGE_PATH: string = "https://image.tmdb.org/t/p/original";

//GET GENRES
export const API_GET_GENRES: string = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
