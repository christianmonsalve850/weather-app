import styles from './Widgets.module.css'

function TodaysHighlights({weatherData}) {
    return (
        <>
            <p className={styles.todays_highlights}>Today's Highlights</p>
            <div className={styles.highlights}>
                <div className={styles.highlight_widget}>
                    
                </div>

                <div className={styles.highlight_widget}>
                
                </div>

                <div className={styles.highlight_widget}>

                </div>
            </div>
        </>
    )
}

export default TodaysHighlights;