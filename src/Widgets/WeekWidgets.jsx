import styles from './Widgets.module.css'
import SelectedWeekWidget from './SelectedWeekWidget';
import React, {useState, useEffect} from 'react';

import axios from 'axios';



function WeekWidgets() {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Medellin');
  
    const fetchWeatherData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/data');
          setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error); // Log the error message
            res.status(500).json({ error: 'Error fetching data' });
        }
    };

    useEffect(() => {  
      fetchWeatherData();
    }, [city]);

    console.log(weatherData)

    const daysOfWeek = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <>
            <button className={styles.week_btn}>Week</button><br />
            <SelectedWeekWidget></SelectedWeekWidget>
            {weatherData ? (daysOfWeek.map(day => (
                <div className={styles.forecast} key={day}>
                    <div className={styles.individual_widget}>
                        <div>
                            <span>{day}</span>
                        </div>
                        <img src="./src/assets/sunny.png" alt="sunny" />
                        <span className={styles.temp}>{Math.round(weatherData.main.temp)}°</span>
                    </div>
                </div>
            ))) : <p>Loading...</p>}
        </>
    );
}

export default WeekWidgets;