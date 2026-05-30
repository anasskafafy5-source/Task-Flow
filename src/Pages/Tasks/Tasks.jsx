import { Link } from 'react-router-dom';
import TasksSorting from '../../Components/TasksSorting/TasksSorting';
import styles from './Tasks.module.css';
import TasksArea from '../../Components/TasksArea/TasksArea';
import { useMainContext } from '../../Context/MainContext';

function Tasks() {
    const {totalTasks , pendingTasks , completedTasks} = useMainContext();
    return (
        <div className={styles.tasksPage}>
            <div className={styles.title}>
                <div className={styles.txt}>
                    <h3>Tasks</h3>
                    <div className={styles.info}>
                        <span>{totalTasks} Tasks. </span><span>{completedTasks} Completed. </span>
                        <span>{pendingTasks} Pending</span>
                    </div>
                </div>
                <Link to="addTask" className='btn btn-main'>+ Add Task</Link>
            </div>
            <TasksSorting />
            <TasksArea />
        </div>
    )
}

export default Tasks
