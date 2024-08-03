import styles from "./TopPart.module.css"
import React, {useState, useEffect} from "react";

function Navbar() {
    const [city, setCity] = useState("");
    const [input, setInput] = useState("");
    
    const searchBar = document.getElementById("search-bar");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const checkIfEnter = (e) => {
        if (e.keyCode === 13) {
            setCity(input);
            setInput("");
        }
    }


    return(
        <>
            <div className={styles.search_bar}>
                <img src="./src/assets/search.png" alt="search" />
                <input value={input} onKeyDown={checkIfEnter} onChange={handleInputChange} type="text" placeholder="Search city..."/>
            </div>
        </>
    )
}

export default Navbar;