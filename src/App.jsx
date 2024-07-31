import CurrentCity from "./TopPart/CurrentCity";
import Navbar from "./TopPart/Navbar";
import Settings from "./TopPart/Settings";
import Profile from "./TopPart/Profile";
import WeekWidgets from "./Widgets/WeekWidgets";

function App() {

  return (
    <>
      <div className="container">
        {/* TOP PART */}
        <div className="top">
          <CurrentCity></CurrentCity>  
          <Navbar></Navbar>
          <Settings></Settings>
          <Profile></Profile>
        </div>
        <div className="content">
          <WeekWidgets></WeekWidgets>
        </div>
      </div>
    </>
  );
}

export default App
