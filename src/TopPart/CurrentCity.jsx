import styles from "./TopPart.module.css"

function CurrentCity({city, weatherData}) {
    return (
        <>
        {console.log(weatherData)}
            <div className={styles.current_location}>
                <img src="./src/assets/location.png" alt="location"/>
                <p id="current-city">{weatherData ? `${weatherData.name}, ${weatherData.sys.country}` : ""}</p>
            </div>
        </>
    );
}

export default CurrentCity;