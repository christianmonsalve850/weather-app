import styles from './Widgets.module.css'

function CurrentWeather({weatherData}) {

    const daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", 
                    "June", "July", "August", "Septembe", "October", 
                    "November", "December"]

    const today = new Date();
    const day = daysOfWeek[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    console.log(weatherData)
    return (
        <>
            <p className={styles.todays_date}>{`${day} ${date}, ${month}`}</p><br />
            {weatherData ? 
            <>
                <div className={styles.separator}>
                    <div className={styles.main_information}>
                        <img src="./src/assets/sunny.png" alt="forecast-image" />
                        <div>
                            <span>{Math.round(weatherData.main.temp)}°</span>
                            <p>{weatherData.weather[0].main}</p>
                        </div>
                    </div>

                    <div className={styles.vertical_line}></div>

                    <div className={styles.secondary_information}>
                        <div>
                            <div>
                                <span>{Math.round(weatherData.main.temp_max)}°</span>
                                <label>High</label>
                            </div>
                            <div>
                                <span>{Math.round(weatherData.main.temp_min)}°</span>
                                <label>Low</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>{Math.round(weatherData.coord.lon * 100) / 100}</span>
                                <label>Latitude</label>
                            </div>
                            <div>
                                <span>{Math.round(weatherData.coord.lat * 100) / 100}</span>
                                <label>Longitude</label>
                            </div>
                        </div>
                    </div>
                </div>
            </> : <p>Loading...</p>}
        </>
    );
}

export default CurrentWeather;