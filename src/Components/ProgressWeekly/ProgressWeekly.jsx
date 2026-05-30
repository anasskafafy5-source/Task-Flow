import QuikStats from '../QuikStats/QuikStats';
import WeeklyP from '../WeeklyP/WeeklyP';
import styles from './ProgressWeekly.module.css';

function ProgressWeekly() {
    return (
        <div className={styles.main}>
            <WeeklyP />
            <QuikStats />
        </div>
    )
}

export default ProgressWeekly
