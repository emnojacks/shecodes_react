import logo from './logo.svg';
import './App.css';
import "./styles.css";
import WeatherSearch from "./WeatherSearch";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather Search</h1>
       <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
