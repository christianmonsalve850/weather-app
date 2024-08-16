import styles from './Widgets.module.css'
import React, {useState, useEffect} from 'react';

function WeekWidgets({weatherData}) {

    const daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", 
                    "June", "July", "August", "Septembe", "October", 
                    "November", "December"]

    const today = new Date();
    const day = daysOfWeek[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];

    return (
        <>
            <button className={styles.week_btn}>{ `${day} ${date}, ${month}`}</button><br />
            {weatherData ? 
            <> 
            </> : <p>Loading...</p>}
        </>
    );
}

export default WeekWidgets;