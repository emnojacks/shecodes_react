import "./App.css";
import "./styles.css";
import React from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Search</h1>
          <WeatherSearch />
        </header>

        <Footer />
      </div>
    </div>
  );
}

export default App;
 