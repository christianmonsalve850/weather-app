import CurrentCity from "./TopPart/CurrentCity";
import Navbar from "./TopPart/Navbar";
import Settings from "./TopPart/Settings";
import Profile from "./TopPart/Profile";
import CurrentWeather from "./Widgets/CurrentWeather";
import TodaysHighlights from "./Widgets/TodaysHighlights";
import ImportantCities from "./Widgets/ImportantCities";
import { useState, useEffect } from "react";

import axios from 'axios';

function App() {
  const [city, setCity] = useState("West New York");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/data', {
          params: {
            city: city,
          },
        });
        setWeatherData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
          res.status(500).json({ error: 'Error fetching data' });
      }
  };

  useEffect(() => { 
    fetchWeatherData();
  }, [city]);

  return (
    <>
      <div className="container">
        {/* TOP PART */}
        <div className="top">
          <CurrentCity city={city} weatherData={weatherData}></CurrentCity>  
          <Navbar city={city} setCity={setCity}></Navbar>
          <Settings></Settings>
          <Profile></Profile>
        </div>
        {/* CONTENT */}
        <div className="content">
          <div className="left_content">
            <CurrentWeather city={city} weatherData={weatherData}></CurrentWeather>
            <TodaysHighlights city={city} weatherData={weatherData}></TodaysHighlights>
          </div>
          <div className="right_content">
            <ImportantCities></ImportantCities>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
