import styles from './Widgets.module.css'
import SelectedWeekWidget from './SelectedWeekWidget';
import UnselectedWeekWidgets from './UnselectedWeekWidgets';
import React, {useState, useEffect} from 'react';

function WeekWidgets({weatherData}) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todaysDateIndex = new Date().getDay();
    const todaysDate = daysOfWeek[todaysDateIndex];

    return (
        <>
            <button className={styles.week_btn}>Week</button><br />
            {weatherData ? 
            <> 
                <SelectedWeekWidget todaysDate={todaysDate}/><UnselectedWeekWidgets/> 
            </> : <p>Loading...</p>}
        </>
    );
}

export default WeekWidgets;