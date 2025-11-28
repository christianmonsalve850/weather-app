import styles from "./TopPart.module.css"

function CurrentCity({weatherData}) {
    return (
        <>
            <div className={styles.current_location}>
                <img src={`${import.meta.env.BASE_URL}assets/location.png`} alt="location"/>
                <p id="current-city">{weatherData ? `${weatherData.name}, ${weatherData.sys.country}` : ""}</p>
            </div>
        </>
    );
}

export default CurrentCity;