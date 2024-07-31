import styles from './Widgets.module.css'

function WeekWidgets() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <>
            <button className={styles.week_btn}>Week</button><br />
            <div className={styles.forecast}>
                <div className={styles.individual_widget}>
                    <div>
                        <span>Mon</span>
                    </div>
                    <img src="./src/assets/sunny.png" alt="" />
                    <span className={styles.temp}>23°</span>
                </div>
            </div>
        </>
    );
}

export default WeekWidgets