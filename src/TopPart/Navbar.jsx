import styles from "./TopPart.module.css"
import React, {useState} from "react";

function Navbar({setCity}) {

    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const checkIfEnter = (e) => {
        if (e.keyCode === 13) {
            setCity(input);
            setInput("");
        }
    }

    return (
        <>
            <div className={styles.search_bar}>
                <img src="./src/assets/search.png" alt="search" />
                <input value={input} onKeyDown={checkIfEnter} onChange={handleInputChange} type="text" placeholder="Search city..." autoComplete="off"/>
            </div>
        </>
    )
}

export default Navbar;