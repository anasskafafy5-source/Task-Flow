import styles from './TaskTitle.module.css';
import { MdDateRange } from "react-icons/md";
import { MdOutlineGppGood } from "react-icons/md";
import TaskPriority from "../TaskPriority";

function TaskTitle({task}) {
    return (
        <div className={styles.task}>

            <div className={styles.left}>
                <span className={`${styles.stat} ${task.done ? styles.done : ""}`}></span>
                <div className={`${styles.title} ${task.done ? styles.done : ""}`}>
                    {task.title}</div>
            </div>
            
            <div className={styles.right}>
                <TaskPriority prio={task.priority} />
                <div className={styles.due}>
                    <MdDateRange />
                    <p>{task.dueDate}</p>
                </div>
                {task.done && <MdOutlineGppGood className={styles.iconDone} />}
            </div>

        </div>
    )
}



export default TaskTitle
