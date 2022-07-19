import "./App.css";
import Banner from "./components/Banner/Banner";
import Genres from "./components/Genres/Genres";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import Trending from "./movies/trending/Trending";
import Popular from "./movies/popular/Popular";
import TopRated from "./movies/topRated/TopRated";
import Upcoming from "./movies/upcoming/Upcoming";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <SearchBox />
      </header>
      <main>
        <Banner />
        {/* <Genres /> */}
        <Upcoming />
        <Trending />
        <Popular />
        <TopRated />
      </main>
    </div>
  );
}

export default App;
