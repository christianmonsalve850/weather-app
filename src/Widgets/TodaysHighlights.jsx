import styles from './Widgets.module.css'

function TodaysHighlights({weatherData}) {
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

    return (
        <>
            {weatherData ? 
                <>
                <p className={styles.todays_highlights}>Today's Highlights</p>
                    <div className={styles.highlights}>
                        <div className={styles.highlight_widget}>
                            <label>Wind Status</label>
                            <span>{weatherData.wind.speed} km/h</span>
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
            : <p>Loading...</p>}
        </>
    )
}

export default TodaysHighlights;