
import styles from './StatsBox.module.css'
function StatsBox({textBox , textNum , per=1 , color ="blue",children }) {
    return (
        <div className={styles.box}>
            <span className={styles.color} 
            style={{backgroundColor: color}}></span>

            <div className={styles.left}>
                <div className={styles.icon}>{children}</div>
                <p className={styles.text}>{textBox}</p>
                <p className={styles.number}>{textNum}</p>
            </div>

            <span className={styles.per}>+{per}%</span>
        </div>
    )
}

export default StatsBox
