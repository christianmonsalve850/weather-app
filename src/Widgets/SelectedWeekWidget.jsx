import styles from './Widgets.module.css'


function SelectedWeekWidget({todaysDate}) {

    return (
        <>
            <div className={styles.selected}>
                <div className={styles.top_div}>
                    <span>{todaysDate}</span> 
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

export default SelectedWeekWidget;