import styles from "./TopPart.module.css"

function Settings() {

    return (
        <>
            <div className={styles.temp}>
                <button className={styles.c_unit}>°C</button>
                <button className={styles.f_unit}>°F</button>
            </div>


            <div id={styles.toggle}>
                <i className={styles.indicator}><img src="./src/assets/dark-mode.png" alt="" /></i>
            </div>
        </>
    );
}

export default Settings;