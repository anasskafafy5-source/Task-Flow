import styles from './WeeklyP.module.css';

// fake data
const days = [
    {mon: 30},
    {tue: 10},
    {wen: 80},
    {thus: 90},
    {fri: 24},
    {sat: 20},
    {sun: 76},
];

function WeeklyP() {
    return (
        <div className={styles.weekDigram}>
            <h4>Weekly Progress</h4>

            <div className={styles.digram}>

                <div className={styles.days}>
                    <div className={styles.spansDays}>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wen</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>

                <div className={styles.pro}>
                    <div className={styles.complete}>
                        <span>0</span>
                        <span>3</span>
                        <span>6</span>
                        <span>9</span>
                        <span>12</span>
                    </div>
                </div>

                <div className={styles.progressDays}>
                    {days.map((day , i) => (
                        <div className={styles.oneDay} key={i}
                         style={{height: `${Object.values(day)[0]}%`}}>
                             </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default WeeklyP
