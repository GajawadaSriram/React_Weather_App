import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Weather } from "./components/Weather";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "7a72e29e8b591f2330bcee0012127e88";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    setLoading(true);
    setError(null);

    fetch(URL)
      .then((response) => {
        if (!response.ok) throw new Error("City not found");
        return response.json();
      })
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  return (
    <div className="app-container">
      <h1 className="app-title">Weather Finder</h1>
      <SearchBar city={city} setCity={setCity} />
      
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading weather data...</p>
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <Weather data={data} city={city} />
      )}
    </div>
  );
}

export default App;