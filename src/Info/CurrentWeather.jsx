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

    const description = weatherData ? weatherData.weather[0].description : "";

    let descriptions = {
        "clear sky": "./src/assets/forecast/sun.png",
        "few clouds": "./src/assets/forecast/few-clouds.png",
        "scattered clouds": "./src/assets/forecast/scattered-clouds.png",
        "broken clouds": "./src/assets/forecast/broken-clouds.png",
        "shower rain": "./src/assets/forecast/shower-rain.png",
        "rain": "./src/assets/forecast/rain.png",
        "thunderstorm": "./src/assets/forecast/thunderstorm.png",
        "snow": "./src/assets/forecast/snow.png",
        "mist": "./src/assets/forecast/mist.png",
        "overcast clouds": "./src/assets/forecast/broken-clouds.png",
        "smoke": "./src/assets/forecast/mist.png",
        "haze": "./src/assets/forecast/mist.png",
        "fog": "./src/assets/forecast/mist.png",
    };

    return (
        <>
            {weatherData ? 
            <>
                <p className={styles.todays_date}>{`${day} ${date}, ${month}`}</p><br />
                <div className={styles.separator}>
                    <div className={styles.main_information}>
                    <a href="https://www.flaticon.com/free-icons/weather" title="sun icons"><img src={descriptions[description]} alt="forecast-image" /></a>
                        <div>
                            <span>{Math.round(weatherData.main.temp)}°</span>
                            <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
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
            </> : <></>}
        </>
    );
}

export default CurrentWeather;