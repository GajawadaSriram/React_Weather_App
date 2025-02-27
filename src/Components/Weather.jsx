import React from "react";
import "../styles/Weather.css";

export const Weather = ({ data, city }) => {
  if (!data || !data.main) {
    return <p className="loading-text">Loading weather data for {city}...</p>;
  }

  return (
    <div className="weather-container">
      <h1 className="city-name">{data.name} Weather</h1>
      <h2 className="weather-description">{data.weather[0].description}</h2>
      
      <div className="weather-details">
        <div className="weather-detail">
          <span>Temperature</span>
          <strong>{Math.round(data.main.temp - 273.15)}°C</strong>
        </div>
        <div className="weather-detail">
          <span>Humidity</span>
          <strong>{data.main.humidity}%</strong>
        </div>
        <div className="weather-detail">
          <span>Wind Speed</span>
          <strong>{data.wind.speed} m/s</strong>
        </div>
        <div className="weather-detail">
          <span>Pressure</span>
          <strong>{data.main.pressure} hPa</strong>
        </div>
      </div>
    </div>
  );
};