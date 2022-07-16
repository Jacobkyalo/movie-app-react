import "./App.css";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Header />
        <SearchBox />
      </header>
    </div>
  );
}

export default App;
