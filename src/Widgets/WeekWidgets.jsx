import styles from './Widgets.module.css'
import SelectedWeekWidget from './SelectedWeekWidget';
import UnselectedWeekWidgets from './UnselectedWeekWidgets';
import React, {useState, useEffect} from 'react';

import axios from 'axios';

function WeekWidgets({city}) {

    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/data');
          setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Error fetching data' });
        }
    };

    useEffect(() => { 
        fetchWeatherData();
    }, [city]);
    
    return (
        <>
            <button className={styles.week_btn}>Week</button><br />
            {weatherData ? <> <SelectedWeekWidget/><UnselectedWeekWidgets/> </> : <p>Loading...</p>}
        </>
    );
}

export default WeekWidgets;