//MOVIE ENDPOINTS

export const API_TRENDING_MOVIES_WEEK: string = `${process.env.NEXT_PUBLIC_BASE_MOVIE_API}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
export const API_TRENDING_MOVIES_DAY: string = `${process.env.NEXT_PUBLIC_BASE_MOVIE_API}/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;

//SHOW ENDPOINTS
export const API_TRENDING_TV_SHOWS_DAY: string = `${process.env.NEXT_PUBLIC_BASE_MOVIE_API}/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
export const API_TRENDING_TV_SHOWS_WEEK: string = `${process.env.NEXT_PUBLIC_BASE_MOVIE_API}/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;