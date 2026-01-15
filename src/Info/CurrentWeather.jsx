import styles from './Widgets.module.css'

function CurrentWeather({weatherData}) {

    const daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", 
                    "June", "July", "August", "September", "October", 
                    "November", "December"]

    const today = new Date();
    const day = daysOfWeek[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];

    const description = weatherData ? weatherData.weather[0].description : "";

    let descriptions = {
        "clear sky": new URL('/assets/forecast/sun.png', import.meta.url).href,
        "few clouds": new URL('/assets/forecast/few-clouds.png', import.meta.url).href,
        "scattered clouds": new URL('/assets/forecast/scattered-clouds.png', import.meta.url).href,
        "broken clouds": new URL('/assets/forecast/broken-clouds.png', import.meta.url).href,
        "shower rain": new URL('/assets/forecast/shower-rain.png', import.meta.url).href,
        "rain": new URL('/assets/forecast/rain.png', import.meta.url).href,
        "thunderstorm": new URL('/assets/forecast/thunderstorm.png', import.meta.url).href,
        "snow": new URL('/assets/forecast/snow.png', import.meta.url).href,
        "mist": new URL('/assets/forecast/mist.png', import.meta.url).href,
        "overcast clouds": new URL('/assets/forecast/broken-clouds.png', import.meta.url).href,
        "smoke": new URL('/assets/forecast/mist.png', import.meta.url).href,
        "haze": new URL('/assets/forecast/mist.png', import.meta.url).href,
        "fog": new URL('/assets/forecast/mist.png', import.meta.url).href,
        "moderate rain": new URL('/assets/forecast/shower-rain.png', import.meta.url).href,
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