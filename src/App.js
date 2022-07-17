import "./App.css";
import Banner from "./components/Banner/Banner";
import Genres from "./components/Genres/Genres";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import Trending from "./movies/trending/Trending";
import Popular from "./movies/popular/Popular";
import TopRated from "./movies/topRated/TopRated";
import OriginalMovies from "./movies/upcoming/OriginalMovies";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Header />
        <SearchBox />
      </header>
      <Banner />
      <Genres />
      <OriginalMovies />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}

export default App;
