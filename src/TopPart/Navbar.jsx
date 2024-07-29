import styles from "./TopPart.module.css"

function Navbar() {
    return(
        <>
            <div className={styles.search_bar}>
                <img src="./src/assets/search.png" alt="search" />
                <input type="text" placeholder="Search city..."/>
            </div>
        </>
    )
}

export default Navbar;