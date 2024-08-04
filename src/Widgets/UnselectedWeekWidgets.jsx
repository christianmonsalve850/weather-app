import styles from './Widgets.module.css'

const daysOfWeek = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function UnselectedWeekWidgets() {
    return (
        <>
            {daysOfWeek.map(day => (
                <div className={styles.forecast} key={day}>
                    <div className={styles.individual_widget}>
                        <div>
                            <span>{day}</span>
                        </div>
                        <img src="./src/assets/sunny.png" alt="sunny" />
                        <span className={styles.temp}>25°</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default UnselectedWeekWidgets;