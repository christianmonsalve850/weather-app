import styles from './Widgets.module.css'

function UnselectedWeekWidgets() {

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const todaysDateIndex = new Date().getDay();
    let index = todaysDateIndex+1;
    let newDaysOfWeek = [];

    while (index != todaysDateIndex) {
        if (index == daysOfWeek.length) {
            index = 0;
        }
        newDaysOfWeek.push(daysOfWeek[index]);
        index++;
    }

    return (
        <>
            {newDaysOfWeek.map(day => (
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