import { useState } from 'react';


export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '41d2ae0fad01070f83970382b01c633d'; // Get your key from OpenWeatherMap

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setError('City not found. Please try again.');
        setWeather(null);
      }
    } catch (err) {
      setError('Failed to fetch data.');
    }
  };

  return (
    <div className="weather-page">
      <div className="weather-card">
        <h2 className="fw-bold">Weather Forecast</h2>
        <form onSubmit={fetchWeather} className="weather-search">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {error && <p className="error-msg">{error}</p>}

        {weather && (
          <div className="weather-info">
            <div className="weather-main">
              <h3>{weather.name}, {weather.sys.country}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <h4>{Math.round(weather.main.temp)}°C</h4>
            </div>

            <div className="weather-details">
              <div className="detail">
                <span>Humidity</span>
                <strong>{weather.main.humidity}%</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}