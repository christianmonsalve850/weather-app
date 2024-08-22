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
                    <a href="https://www.flaticon.com/free-icons/united-states" title="united-states icons"><img src="./src/assets/flags/united-states.png" alt="US" /></a>
                </div>               
                <div  onClick={() => selectCity("Dubai")} className={styles.city}>
                    <div>
                        <label>United Arab Emirates</label>
                        <span>Dubai</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/united-arab-emirates" title="united-arab-emirates icons"><img src="./src/assets/flags/united-arab-emirates.png" alt="AE" /></a>
                </div>                 
                <div  onClick={() => selectCity("Medellin")} className={styles.city}>
                    <div>
                        <label>Colombia</label>
                        <span>Medellin</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/colombia" title="colombia icons"><img src="./src/assets/flags/colombia.png" alt="CO" /></a>
                </div>          
                <div  onClick={() => selectCity("Beijing")} className={styles.city}>
                    <div>
                        <label>China</label>
                        <span>Beijing</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/flags" title="flags icons"><img src="./src/assets/flags/china.png" alt="CN" /></a>
                </div>
                <div  onClick={() => selectCity("Milan")} className={styles.city}>
                    <div>
                        <label>Italy</label>
                        <span>Milan</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/italy" title="italy icons"><img src="./src/assets/flags/italy.png" alt="IT" /></a>
                </div>
                <div  onClick={() => selectCity("Tokyo")} className={styles.city}>
                    <div>
                        <label>Japan</label>
                        <span>Tokyo</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/japan" title="japan icons"><img src="./src/assets/flags/japan.png" alt="JP" /></a>
                </div>
                <div  onClick={() => selectCity("Amsterdam")} className={styles.city}>
                    <div>
                        <label>Netherlands</label>
                        <span>Amsterdam</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/netherlands" title="netherlands icons"><img src="./src/assets/flags/netherlands.png" alt="NL" /></a>
                </div>
                <div  onClick={() => selectCity("Madrid")} className={styles.city}>
                    <div>
                        <label>Spain</label>
                        <span>Madrid</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/spain" title="spain icons"><img src="./src/assets/flags/spain.png" alt="ES" /></a>
                </div>
                <div  onClick={() => selectCity("London")} className={styles.city}>
                    <div>
                        <label>Great Britain</label>
                        <span>London</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/uk-flag" title="uk-flag icons"><img src="./src/assets/flags/united-kingdom.png" alt="GB" /></a>
                </div>
                <div  onClick={() => selectCity("Mexico City")} className={styles.city}>
                    <div>
                        <label>Mexico</label>
                        <span>Mexico City</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/flags" title="flags icons"><img src="./src/assets/flags/mexico.png" alt="MX" /></a>
                </div>
                <div  onClick={() => selectCity("Seoul")} className={styles.city}>
                    <div>
                        <label>South Korea</label>
                        <span>Seoul</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/korea" title="korea icons"><img src="./src/assets/flags/south-korea.png" alt="KR" /></a>
                </div>
                <div  onClick={() => selectCity("Brussels")} className={styles.city}>
                    <div>
                        <label>Belgium</label>
                        <span>Brussels</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/belgium" title="belgium icons"><img src="./src/assets/flags/belgium.png" alt="BE" /></a>
                </div>
                <div  onClick={() => selectCity("Chicago")} className={styles.city}>
                    <div>
                        <label>US</label>
                        <span>Chicago</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/united-states" title="united-states icons"><img src="./src/assets/flags/united-states.png" alt="US" /></a>
                </div>     
                <div  onClick={() => selectCity("São Paulo")} className={styles.city}>
                    <div>
                        <label>Brazil</label>
                        <span>São Paulo</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/brazil" title="brazil icons"><img src="./src/assets/flags/brazil.png" alt="BR" /></a>
                </div>
                <div  onClick={() => selectCity("Shanghai")} className={styles.city}>
                    <div>
                        <label>China</label>
                        <span>Shanghai</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/flags" title="flags icons"><img src="./src/assets/flags/china.png" alt="CN" /></a>
                </div>
                <div  onClick={() => selectCity("Sydney")} className={styles.city}>
                    <div>
                        <label>Australia</label>
                        <span>Sydney</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/australia" title="australia icons"><img src="./src/assets/flags/australia.png" alt="AU" /></a>
                </div>
                <div  onClick={() => selectCity("Barcelona")} className={styles.city}>
                    <div>
                        <label>Spain</label>
                        <span>Barcelona</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/spain" title="spain icons"><img src="./src/assets/flags/spain.png" alt="ES" /></a>
                </div>
                <div  onClick={() => selectCity("Toronto")} className={styles.city}>
                    <div>
                        <label>Canada</label>
                        <span>Toronto</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/flags" title="flags icons"><img src="./src/assets/flags/canada.png" alt="CA" /></a>
                </div>
                <div  onClick={() => selectCity("Paris")} className={styles.city}>
                    <div>
                        <label>France</label>
                        <span>Paris</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/france" title="france icons"><img src="./src/assets/flags/france.png" alt="FR" /></a>
                </div> 
                <div  onClick={() => selectCity("Istanbul")} className={styles.city}>
                    <div>
                        <label>Turkey</label>
                        <span>Istanbul</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/turkey" title="turkey icons"><img src="./src/assets/flags/turkey.png" alt="TR" /></a>
                </div>
                <div  onClick={() => selectCity("Frankfurt")} className={styles.last_city}>
                    <div>
                        <label>Germany</label>
                        <span>Frankfurt</span>
                    </div>
                    <a href="https://www.flaticon.com/free-icons/germany" title="germany icons"><img src="./src/assets/flags/germany.png" alt="DE" /></a>
                </div>
            </div>
        </>
    )
}

export default ImportantCities;