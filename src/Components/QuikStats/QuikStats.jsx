import { useMainContext } from '../../Context/MainContext';
import styles from './QuikStats.module.css';

function QuikStats() {
    const {tasksDueToday , totalTasks , tasksThisWeek , overDue} = useMainContext();

    // derived state:
    const tasksDueTodayPercentage = Math.ceil((tasksDueToday / totalTasks) * 100);
    const tasksThisWeekPercentage = Math.ceil((tasksThisWeek / totalTasks) * 100);
    const overDuePercentage = Math.ceil((overDue / totalTasks) * 100);
    return (
        <div className={styles.quickStats}>
            <h4>Quick Stats</h4>

            <div className={styles.bar}>
                <div className={styles.text}>
                    <p>Tasks Due Today </p> <span>{tasksDueToday}</span>
                </div>
                <div className={styles.progress}>
                    <span style={{width: `${tasksDueTodayPercentage}%` , backgroundColor: "rgb(50, 139, 255)"}}></span>
                </div>
            </div>

            <div className={styles.bar}>
                <div className={styles.text}>
                    <p>This Week </p> <span>{tasksThisWeek}</span>
                </div>
                <div className={styles.progress}>
                    <span style={{width: `${tasksThisWeekPercentage}%` , backgroundColor: "rgb(58, 255, 78)"}}></span>
                </div>
            </div>

            <div className={styles.bar}>
                <div className={styles.text}>
                    <p>Overdue </p> <span>{overDue}</span>
                </div>
                <div className={styles.progress}>
                    <span style={{width: `${overDuePercentage}%` , backgroundColor: "rgb(255, 31, 31)"}}></span>
                </div>
            </div>

        </div>
    )
}

export default QuikStats
