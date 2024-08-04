import CurrentCity from "./TopPart/CurrentCity";
import Navbar from "./TopPart/Navbar";
import Settings from "./TopPart/Settings";
import Profile from "./TopPart/Profile";
import WeekWidgets from "./Widgets/WeekWidgets";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Medellin");
  
  return (
    <>
      <div className="container">
        {/* TOP PART */}
        <div className="top">
          <CurrentCity city={city}></CurrentCity>  
          <Navbar city={city} setCity={setCity}></Navbar>
          <Settings></Settings>
          <Profile></Profile>
        </div>
        <div className="content">
          <WeekWidgets city={city}></WeekWidgets>
        </div>
      </div>
    </>
  );
}

export default App
