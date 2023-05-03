import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search</h1>
        <WeatherSearch />
      </header>
      <Footer />
    </div>
  );
}

export default App;
