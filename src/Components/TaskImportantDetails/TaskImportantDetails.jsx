import { FiFlag } from "react-icons/fi";
import styles from './TaskImportantDetails.module.css';
import TaskPriority from "../TaskPriority";
import { MdDateRange } from "react-icons/md";
import { FaVoteYea } from "react-icons/fa";
// function to get the state of the task(overdue , completed , pending)
function getTaskState(task){
    if(task.done) return "Completed";
    const today = new Date();
    today.setHours(0,0,0,0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0,0,0,0);

    if(today > dueDate) return "OverDue";
    return "Pending";
}


function TaskImportantDetails({task}) {
    if(!task) return null;
    return (
        
        <div className={styles.main}>
            <div className={`${styles.upper} ${task.done ? styles.complete : ""}`}>
            <h4>{task.title}</h4>
            <p className={styles.desc}>{task.description}</p>
            </div>
            <TaskStatDetails task={task} />
        </div>
    )
}

export default TaskImportantDetails


// for stat task
function TaskStatDetails({task}){
        if(!task) return null;
    return (
        <div className={styles.mainStat}>
            <MinDetailTask icon={<FiFlag className={styles.icon} style={{color: "rgb(19, 142, 219)"}}/>} title="priority"> 
            <TaskPriority prio={task.priority} />
            </MinDetailTask>

            <MinDetailTask icon={<MdDateRange className={styles.icon} style={{color: "rgb(104, 7, 95)"}}/>} title="Due Date"
            color={getTaskState(task) === "Completed" ? "green" : getTaskState(task) === "OverDue" ? "red" : "orange"}> 
            <p className={styles.txt}>{task.dueDate}</p>
            </MinDetailTask>

            <MinDetailTask icon={<FaVoteYea className={styles.icon} style={{color: "rgb(51, 198, 43)"}}/>} title="Status"
            color={getTaskState(task) === "Completed" ? "green" : getTaskState(task) === "OverDue" ? "red" : "orange"}> 
            <p className={`${styles.txt} `}>
                {getTaskState(task)}</p>
            </MinDetailTask>
        </div>
    );
}


// priority det

function MinDetailTask({icon , title, color , children}){
    return (
    <div className={styles.minDetails}>
        <div className={styles.left}>
            {icon}
        </div>
        <div className={styles.right}>
            <p className={styles.title}>{title}</p>
            <div style={{color: color}}>{children}</div>
            
        </div>
    </div>
    );
}



