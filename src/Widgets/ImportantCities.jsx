import styles from './Widgets.module.css'

function ImportantCities({setCity}) {

    function selectCity(cityName) {
        setCity(cityName);
        console.log("success")
    }

    return (
        <>
            <div className={styles.scroll}>
                <div onClick={() => selectCity("New York City")} className={styles.city}>
                    <label>US</label>
                    <span>New York City</span>
                </div>
                <div  onClick={() => selectCity("London")} className={styles.city}>
                    <label>Great Britain</label>
                    <span>London</span>
                </div>
                <div  onClick={() => selectCity("Paris")} className={styles.city}>
                    <label>France</label>
                    <span>Paris</span>
                </div>                
                <div  onClick={() => selectCity("Dubai")} className={styles.city}>
                    <label>United Arab Emirates</label>
                    <span>Dubai</span>
                </div>                
                <div  onClick={() => selectCity("Chicago")} className={styles.city}>
                    <label>US</label>
                    <span>Chicago</span>
                </div>      
                <div  onClick={() => selectCity("Medellin")} className={styles.city}>
                    <label>Colombia</label>
                    <span>Medellin</span>
                </div>           
                <div  onClick={() => selectCity("Beijing")} className={styles.city}>
                    <label>China</label>
                    <span>Beijing</span>
                </div>
                <div  onClick={() => selectCity("Tokyo")} className={styles.city}>
                    <label>Japan</label>
                    <span>Tokyo</span>
                </div>
                <div  onClick={() => selectCity("Amsterdam")} className={styles.city}>
                    <label>Netherlands</label>
                    <span>Amsterdam</span>
                </div>
                <div  onClick={() => selectCity("Madrid")} className={styles.city}>
                    <label>Spain</label>
                    <span>Madrid</span>
                </div>
                <div  onClick={() => selectCity("Mexico City")} className={styles.city}>
                    <label>Mexico</label>
                    <span>Mexico City</span>
                </div>
                <div  onClick={() => selectCity("Milan")} className={styles.city}>
                    <label>Italy</label>
                    <span>Milan</span>
                </div>
                <div  onClick={() => selectCity("Seoul")} className={styles.city}>
                    <label>South Korea</label>
                    <span>Seoul</span>
                </div>
                <div  onClick={() => selectCity("São Paulo")} className={styles.city}>
                    <label>Brazil</label>
                    <span>São Paulo</span>
                </div>
                <div  onClick={() => selectCity("Shanghai")} className={styles.city}>
                    <label>China</label>
                    <span>Shanghai</span>
                </div>
                <div  onClick={() => selectCity("Sydney")} className={styles.city}>
                    <label>Australia</label>
                    <span>Sydney</span>
                </div>
                <div  onClick={() => selectCity("Barcelona")} className={styles.city}>
                    <label>Spain</label>
                    <span>Barcelona</span>
                </div>
                <div  onClick={() => selectCity("Toronto")} className={styles.city}>
                    <label>Canada</label>
                    <span>Toronto</span>
                </div>
                <div  onClick={() => selectCity("Istanbul")} className={styles.city}>
                    <label>Turkey</label>
                    <span>Istanbul</span>
                </div>
                <div  onClick={() => selectCity("Brussels")} className={styles.city}>
                    <label>Belgium</label>
                    <span>Brussels</span>
                </div>
                <div  onClick={() => selectCity("Frankfurt")} className={styles.last_city}>
                    <label>Germany</label>
                    <span>Frankfurt</span>
                </div>
            </div>
        </>
    )
}

export default ImportantCities;