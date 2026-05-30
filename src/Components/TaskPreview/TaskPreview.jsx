import styles from './TaskPreview.module.css';
import { LiaBusinessTimeSolid } from "react-icons/lia";
import TaskPriority from "../TaskPriority";
import { useNavigate } from 'react-router-dom';

function isValid(task){
    if(task.done){
        return false;
    }
    const dueDate = task.dueDate;
    const today = new Date();
    today.setHours(0,0,0,0);
    const taskDate = new Date(dueDate);

    if(today > taskDate) {
        return true;
    }

    return false;
}

function TaskPreview({task}) {
    const navigate = useNavigate();

    function handleClick(){
       navigate(`/tasks/${task.id}`);    
    }
    return (
        <div className={styles.main} onClick={handleClick}>
            <div className={styles.left}>
                <div className={`${styles.title} ${task.done ? styles.done : ""}`}>
                    {task.title}
                    </div>
                <div className={`${styles.desc} ${task.done ? styles.done : ""}`}>
                    {task.description}
                </div>
                <div className={styles.stat}>
                    <div className={`${styles.dueDate} ${isValid(task) ? styles.overDue : ""}`}>
                        <LiaBusinessTimeSolid className={styles.icon}/>
                        <span>{task.dueDate}</span>
                    </div>
                    <TaskIsCompleted task={task}/>
                </div>
            </div>
            <TaskPriority prio={task.priority} />
        </div>
    )
}


function TaskIsCompleted({task}){
    let stat = isValid(task);
    if(stat === true) stat = "overdue"
    else if(stat === false){
        if(task.done) stat = "completed";
        else stat = "pending";
    }

    const styles = {
        fontSize: `${12}px`

    };
    if(stat === "overdue"){
        return(
            <div style={{...styles , color: "red"}}>Overdue</div>
        )
    }
    if(stat === "completed"){
        return (
            <div style={{...styles , color: "green"}}>Completed</div>
        );
    }

    if(stat === "pending"){
        return (
            <div style={{...styles , color: "orange"}}>Pending</div>
        );
    }
}

export default TaskPreview
