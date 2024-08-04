import styles from './Widgets.module.css'
import SelectedWeekWidget from './SelectedWeekWidget';
import UnselectedWeekWidgets from './UnselectedWeekWidgets';
import React, {useState, useEffect} from 'react';

function WeekWidgets({city, weatherData}) {
    
    return (
        <>
            <button className={styles.week_btn}>Week</button><br />
            {weatherData ? 
            <> 
                <SelectedWeekWidget/><UnselectedWeekWidgets/> 
            </> : <p>Loading...</p>}
        </>
    );
}

export default WeekWidgets;