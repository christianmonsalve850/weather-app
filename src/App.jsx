import CurrentCity from "./TopPart/CurrentCity";
import Navbar from "./TopPart/Navbar";
import Settings from "./TopPart/Settings";
import Profile from "./TopPart/Profile";
import WeekWidgets from "./Widgets/WeekWidgets";
import { useState, useEffect } from "react";

import axios from 'axios';

function App() {
  const [city, setCity] = useState("Medellin");
  const [country, setCountry] = useState("CO");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/data');
        setWeatherData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
          res.status(500).json({ error: 'Error fetching data' });
      }
  };

  useEffect(() => { 
    fetchWeatherData();
      console.log(weatherData);
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
          <WeekWidgets city={city} weatherData={weatherData}></WeekWidgets>
        </div>
      </div>
    </>
  );
}

export default App
