import styles from "./TopPart.module.css"

function CurrentCity({weatherData}) {
    return (
        <>
            <div className={styles.current_location}>
                <img src={new URL('/assets/location.png', import.meta.url).href} alt="location"/>
                <p id="current-city">{weatherData ? `${weatherData.name}, ${weatherData.sys.country}` : ""}</p>
            </div>
        </>
    );
}

export default CurrentCity;