import styles from './Achievement.module.css';

function Achievement({children , title , text}) {
    return (
        <div className={styles.box}>

            <div className={styles.icon}>
                {children}
            </div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{text}</p>
            </div>

        </div>
    )
}

export default Achievement
