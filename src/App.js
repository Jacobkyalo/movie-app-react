import "./App.css";
import Banner from "./components/Banner/Banner";
import Genres from "./components/Genres/Genres";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import Trending from "./movies/trending/Trending";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Header />
        <SearchBox />
      </header>
      <Banner />
      <Genres />
      <Trending />
    </div>
  );
}

export default App;
