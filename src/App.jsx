import CurrentCity from "./TopPart/CurrentCity";
import Navbar from "./TopPart/Navbar";
import Settings from "./TopPart/Settings";
import Profile from "./TopPart/Profile";

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
      </div>
    </>
  );
}

export default App
