import styles from './Widgets.module.css'

function WeekWidgets() {
    return (
        <>
            <button className={styles.week_btn}>Week</button><br />
            <div className={styles.forecast}>
                <div className={styles.individual_widget}>
                    <span>Mon</span>
                    <img src="./src/assets/sunny.png" alt="" />
                    <span className={styles.temp}></span>
                </div>
            </div>
        </>
    );
}

export default WeekWidgets