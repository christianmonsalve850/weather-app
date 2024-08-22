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
                    <div>
                        <label>US</label>
                        <span>New York City</span>
                    </div>
                    <img src="./src/assets/flags/united-states.png" alt="US" />
                </div>               
                <div  onClick={() => selectCity("Dubai")} className={styles.city}>
                    <div>
                        <label>United Arab Emirates</label>
                        <span>Dubai</span>
                    </div>
                    <img src="./src/assets/flags/united-arab-emirates.png" alt="AE" />
                </div>                 
                <div  onClick={() => selectCity("Medellin")} className={styles.city}>
                    <div>
                        <label>Colombia</label>
                        <span>Medellin</span>
                    </div>
                    <img src="./src/assets/flags/colombia.png" alt="CO" />
                </div>           
                <div  onClick={() => selectCity("Beijing")} className={styles.city}>
                    <div>
                        <label>China</label>
                        <span>Beijing</span>
                    </div>
                    <img src="./src/assets/flags/china.png" alt="CN" />
                </div>
                <div  onClick={() => selectCity("Milan")} className={styles.city}>
                    <div>
                        <label>Italy</label>
                        <span>Milan</span>
                    </div>
                    <img src="./src/assets/flags/italy.png" alt="IT" />
                </div>
                <div  onClick={() => selectCity("Tokyo")} className={styles.city}>
                    <div>
                        <label>Japan</label>
                        <span>Tokyo</span>
                    </div>
                    <img src="./src/assets/flags/japan.png" alt="JP" />
                </div>
                <div  onClick={() => selectCity("Amsterdam")} className={styles.city}>
                    <div>
                        <label>Netherlands</label>
                        <span>Amsterdam</span>
                    </div>
                    <img src="./src/assets/flags/netherlands.png" alt="NL" />
                </div>
                <div  onClick={() => selectCity("Madrid")} className={styles.city}>
                    <div>
                        <label>Spain</label>
                        <span>Madrid</span>
                    </div>
                    <img src="./src/assets/flags/spain.png" alt="ES" />
                </div>
                <div  onClick={() => selectCity("London")} className={styles.city}>
                    <div>
                        <label>Great Britain</label>
                        <span>London</span>
                    </div>
                    <img src="./src/assets/flags/united-kingdom.png" alt="GB" />
                </div>
                <div  onClick={() => selectCity("Mexico City")} className={styles.city}>
                    <div>
                        <label>Mexico</label>
                        <span>Mexico City</span>
                    </div>
                    <img src="./src/assets/flags/mexico.png" alt="MX" />
                </div>
                <div  onClick={() => selectCity("Seoul")} className={styles.city}>
                    <div>
                        <label>South Korea</label>
                        <span>Seoul</span>
                    </div>
                    <img src="./src/assets/flags/south-korea.png" alt="KR" />
                </div>
                <div  onClick={() => selectCity("Brussels")} className={styles.city}>
                    <div>
                        <label>Belgium</label>
                        <span>Brussels</span>
                    </div>
                    <img src="./src/assets/flags/belgium.png" alt="BE" />
                </div>
                <div  onClick={() => selectCity("Chicago")} className={styles.city}>
                    <div>
                        <label>US</label>
                        <span>Chicago</span>
                    </div>
                    <img src="./src/assets/flags/united-states.png" alt="US" />
                </div>     
                <div  onClick={() => selectCity("São Paulo")} className={styles.city}>
                    <div>
                        <label>Brazil</label>
                        <span>São Paulo</span>
                    </div>
                    <img src="./src/assets/flags/brazil.png" alt="BR" />
                </div>
                <div  onClick={() => selectCity("Shanghai")} className={styles.city}>
                    <div>
                        <label>China</label>
                        <span>Shanghai</span>
                    </div>
                    <img src="./src/assets/flags/china.png" alt="CN" />
                </div>
                <div  onClick={() => selectCity("Sydney")} className={styles.city}>
                    <div>
                        <label>Australia</label>
                        <span>Sydney</span>
                    </div>
                    <img src="./src/assets/flags/australia.png" alt="AU" />
                </div>
                <div  onClick={() => selectCity("Barcelona")} className={styles.city}>
                    <div>
                        <label>Spain</label>
                        <span>Barcelona</span>
                    </div>
                    <img src="./src/assets/flags/spain.png" alt="ES" />
                </div>
                <div  onClick={() => selectCity("Toronto")} className={styles.city}>
                    <div>
                        <label>Canada</label>
                        <span>Toronto</span>
                    </div>
                    <img src="./src/assets/flags/canada.png" alt="CA" />
                </div>
                <div  onClick={() => selectCity("Paris")} className={styles.city}>
                    <div>
                        <label>France</label>
                        <span>Paris</span>
                    </div>
                    <img src="./src/assets/flags/france.png" alt="FR" />
                </div> 
                <div  onClick={() => selectCity("Istanbul")} className={styles.city}>
                    <div>
                        <label>Turkey</label>
                        <span>Istanbul</span>
                    </div>
                    <img src="./src/assets/flags/turkey.png" alt="TR" />
                </div>
                <div  onClick={() => selectCity("Frankfurt")} className={styles.last_city}>
                    <div>
                        <label>Germany</label>
                        <span>Frankfurt</span>
                    </div>
                    <img src="./src/assets/flags/germany.png" alt="DE" />
                </div>
            </div>
        </>
    )
}

export default ImportantCities;