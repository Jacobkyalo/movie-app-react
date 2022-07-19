const genresRequests = {
  fetchAction: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchAdventure: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`,
  fetchAnimation: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
  fetchComedy: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchCrime: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
  fetchDocumentary: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
  fetchDrama: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
  fetchFamily: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
  fetchFantasy: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=14`,
  fetchHistory: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=36`,
  fetchHorror: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  fetchMusic: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10402`,
  fetchMystery: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`,
  fetchRomance: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  fetchScienceFiction: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
  fetchTvMovie: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10770`,
  fetchThriller: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=53`,
  fetchWar: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10752`,
  fetchWestern: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`,
};

export default genresRequests;
