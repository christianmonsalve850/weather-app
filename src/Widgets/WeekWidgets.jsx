import styles from './Widgets.module.css'

function WeekWidgets() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


    return (
        <>
            <button className={styles.week_btn}>Week</button><br />
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
            <div className={styles.selected}>
                <div className={styles.top_div}>
                    <span>Monday</span> 
                    <span>10:26 PM</span>
                </div>
                <div className={styles.bottom_div}>
                    <span className={styles.temp}>16°</span>
                    <img src="./src/assets/sunny.png" alt="sunny" />
                    <label>Feels Like: 16°</label>
                </div>
                <div className={styles.min_max}>
                    <span>Min: 12°</span>
                    <span>Max: 12°</span>
                </div>
            </div>
        </>
    );
}

export default WeekWidgets