import styles from "./TopPart.module.css"

function Settings({celsius, selectC, selectF}) {
    return (
        <>
            <div className={styles.temp}>
                <button onClick={selectC} className={`${styles.c_unit} ${celsius ? styles.selected : ""}`}>°C</button>
                <button onClick={selectF} className={`${styles.f_unit} ${!celsius ? styles.selected : ""}`}>°F</button>
            </div>


            <div id={styles.toggle}>
                <i className={styles.indicator}><img src="./src/assets/dark-mode.png" alt="" /></i>
            </div>
        </>
    );
}

export default Settings;