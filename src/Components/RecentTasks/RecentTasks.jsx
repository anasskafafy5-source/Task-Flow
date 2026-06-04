import { Link } from 'react-router-dom';
import styles from './RecentTasks.module.css';
import TaskTitle from "../TaskTitle/TaskTitle";
import { useMainContext } from '../../Context/MainContext';


function RecentTasks() {
  const {tasks} = useMainContext();
  const recentTasks = tasks.length > 6 ? tasks.slice(-5) : tasks.slice();
  
    return (
        <div className={styles.recentTasks}>
            <div className={styles.title}>
                <h4>Recent Tasks</h4>
                <Link to="tasks" className={styles.link}>View All</Link>
            </div>
            {tasks.length === 0 && <div className={styles.empty}>No Tasks Yet, Start By Adding in  Tasks Page😍 </div>}
            {tasks.length > 0 && recentTasks.map((task) => (
              <TaskTitle task={task} key={task.id} />
            ))}
        </div>
    )
}

export default RecentTasks
