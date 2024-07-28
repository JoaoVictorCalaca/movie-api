import axios from "axios"

const apiKey = 'a25b73fc914301a512ef2c15108c844b';

export const getMovies = async (movieTitle) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: apiKey,
        query: movieTitle
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return [];
  }
};

export const trendingMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjViNzNmYzkxNDMwMWE1MTJlZjJjMTUxMDhjODQ0YiIsIm5iZiI6MTcyMjA5NTY5Ny4xNTk1NTcsInN1YiI6IjY2YTAzNWIxNTU3ZDEyMmU4NTE4OWZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gDRMDHAA2uYTTaRg_GIzikul_thL_8fcnLRfolTZEow'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const upcomingMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjViNzNmYzkxNDMwMWE1MTJlZjJjMTUxMDhjODQ0YiIsIm5iZiI6MTcyMjA5NTY5Ny4xNTk1NTcsInN1YiI6IjY2YTAzNWIxNTU3ZDEyMmU4NTE4OWZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gDRMDHAA2uYTTaRg_GIzikul_thL_8fcnLRfolTZEow'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
