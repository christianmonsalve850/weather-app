import styles from './Widgets.module.css'
import SelectedWeekWidget from './SelectedWeekWidget';

function WeekWidgets() {
    const daysOfWeek = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


    return (
        <>
            <button className={styles.week_btn}>Week</button><br />
            <SelectedWeekWidget></SelectedWeekWidget>
            {daysOfWeek.map(day => (
                <div className={styles.forecast} key={day}>
                    <div className={styles.individual_widget}>
                        <div>
                            <span>{day}</span>
                        </div>
                        <img src="./src/assets/sunny.png" alt="sunny" />
                        <span className={styles.temp}>23°</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default WeekWidgets