import TaskImportantDetails from '../TaskImportantDetails/TaskImportantDetails';
import TaskQuickAction from '../TaskQuickAction/TaskQuickAction';
import styles from './MainTaskDetails.module.css';

function MainTaskDetails({task}) {
    return (
        <>
        <div className={styles.container}>
            <TaskImportantDetails task={task} />
            <TaskQuickAction task={task} />
        </div>
        <TaskNotes task={task} />
        </>
    )
}

export default MainTaskDetails


function TaskNotes({task}){
    if(!task) return null
    return <div className={styles.notes}>
        <h4>Notes: </h4>
        <div className={styles.notesArea}>
            {task.notes === "" ? "No Notes Yet." : task.notes}
        </div>
    </div>
}