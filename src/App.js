import "./App.css";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
