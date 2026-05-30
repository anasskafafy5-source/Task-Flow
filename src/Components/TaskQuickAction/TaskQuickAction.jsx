import { useMainContext } from '../../Context/MainContext';
import styles from './TaskQuickAction.module.css';
import { FaClock } from "react-icons/fa6";
function TaskQuickAction({task}) {
    if(!task) return null;
    return (
        <div className={styles.main}>

        <div className={styles.mainz}>
            <h4>Details</h4>
            <p className={styles.title}>Created At: </p>
            <div><FaClock /> {task.createdAt}</div>
        </div>
        <h4>Quick Action</h4>
        <QuickActionButton task={task} />
        </div>
    )
}

export default TaskQuickAction


function QuickActionButton({task}){
    const {changeTaskMarked} = useMainContext();
    return (
        <button className={styles.quickAction} onClick={() => changeTaskMarked(task.id)}>
            Mark As {task.done ? "Pending" : "Completed"}
        </button>
    );
}
