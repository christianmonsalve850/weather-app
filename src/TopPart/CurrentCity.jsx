import styles from "./TopPart.module.css"

function CurrentCity({city}) {
    return (
        <>
            <div className={styles.current_location}>
                <img src="./src/assets/location.png" alt="location"/>
                <p id="current-city">{city}</p>
            </div>
        </>
    );
}

export default CurrentCity;