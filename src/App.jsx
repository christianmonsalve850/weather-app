import CurrentCity from "./TopPart/CurrentCity";
import Navbar from "./TopPart/Navbar";
import Settings from "./TopPart/Settings";
import Profile from "./TopPart/Profile";
import CurrentWeather from "./Info/CurrentWeather";
import TodaysHighlights from "./Info/TodaysHighlights";
import ImportantCities from "./Info/ImportantCities";
import { useState, useEffect } from "react";

import axios from 'axios';

function App() {
  const [city, setCity] = useState("New York City");
  const [units, setUnits] = useState("metric");
  const [weatherData, setWeatherData] = useState(null);
  const [celsius, setCelsius] = useState(true);

  const selectC = () => {
    setCelsius(true);
    setUnits("metric");
  };

  const selectF = () => {
    setCelsius(false);
    setUnits("imperial");
  };

  const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/data', {
          params: {
            city: city,
            units: units,
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
  }, [city, units]);

  useEffect(() => {
    fetchWeatherData();
  }, [units]);

  return (
    <>
      <div className="container">
        {weatherData ? 
        <>
          <div className="top">
            <CurrentCity city={city} weatherData={weatherData}></CurrentCity>  
            <Navbar city={city} setCity={setCity}></Navbar>
            <Settings celsius={celsius} selectC={selectC} selectF={selectF}></Settings>
            <Profile></Profile>
          </div>
          {/* CONTENT */}
          <div className="content">
            <div className="left_content">
              <CurrentWeather city={city} weatherData={weatherData}></CurrentWeather>
              <TodaysHighlights celsius={celsius} city={city} weatherData={weatherData}></TodaysHighlights>
            </div>
            <div className="right_content">
              <ImportantCities city={city} setCity={setCity} weatherData={weatherData}></ImportantCities>
            </div>
          </div>
        </>
        :         
        <div className="loading_container">
          <p>Loading...</p>
        </div>}
      </div>
    </>
  );
}

export default App;
