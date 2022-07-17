import "./App.css";
import Banner from "./components/Banner/Banner";
import Genres from "./components/Genres/Genres";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Header />
        <SearchBox />
      </header>
      <Banner />
      <Genres />
    </div>
  );
}

export default App;
