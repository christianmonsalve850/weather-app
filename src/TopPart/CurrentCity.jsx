import styles from "./TopPart.module.css"

function CurrentCity() {
    return (
        <>
            <div className={styles.current_location}>
                <img src="./src/assets/location.png" alt="location"/>
                <p>Medellin, Colombia</p>
            </div>
        </>
    );
}

export default CurrentCity;