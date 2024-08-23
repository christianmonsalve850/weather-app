import styles from './Widgets.module.css'

function TodaysHighlights({weatherData, celsius}) {
    const sunrise = weatherData ? weatherData.sys.sunrise : "";
    const sunset = weatherData ? weatherData.sys.sunset : "";

    const sunriseDate = new Date(sunrise * 1000);
    const sunsetDate = new Date(sunset * 1000);

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    
    const sunriseTime = sunriseDate.toLocaleTimeString('en-US', options);
    const sunsetTime = sunsetDate.toLocaleTimeString('en-US', options);


    const windSpeed = weatherData ? (celsius ? weatherData.wind.speed * 3.6 : weatherData.wind.speed) : "";
    const windSpeedUnits = celsius ? "km/h" : "mph";
    return (
        <>
            {weatherData ? 
                <>
                <p className={styles.todays_highlights}>Today's Highlights</p>
                    <div className={styles.highlights}>
                        <div className={styles.highlight_widget}>
                            <label>Wind Status</label>
                            <span>{windSpeed} {windSpeedUnits}</span>
                        </div>

                        <div className={styles.highlight_widget}>
                            <label>Humidity</label>
                            <span>{weatherData.main.humidity}%</span>
                        </div>

                        <div className={styles.highlight_widget}>
                            <label>Sunrise & Sunset</label>
                            <p>Sunrise: {sunriseTime}</p>
                            <p>Sunset: {sunsetTime}</p>
                        </div>
                    </div>
                </>
            : 
            <div className={styles.loading_container}>
                <p>Loading...</p>
            </div>
            }
        </>
    )
}

export default TodaysHighlights;