import { useTasksContext } from '../../Context/FilterContext';
import { useMainContext } from '../../Context/MainContext';
import styles from './TasksSorting.module.css';

function TasksSorting() {
    const {totalTasks , pendingTasks , completedTasks} = useMainContext();
    return (
        <div className={styles.sorting}>
            <TasksStats all={totalTasks} pending={pendingTasks} completed={completedTasks} />
            <Sorting />
        </div>
    )
}

export default TasksSorting


// function handle the stat of the tasks
function TasksStats({all , completed , pending}){
    const {tasksFilter , setTasksFilter} = useTasksContext();

    return(
        <div className={styles.mainStats}>
            <TaskStat active={tasksFilter === "all"}
            onClick={() => setTasksFilter("all")}>All <span>{all}</span></TaskStat>
            <TaskStat active={tasksFilter === "completed"}
            onClick={() => setTasksFilter("completed")}>Completed <span>{completed}</span></TaskStat>
            <TaskStat active={tasksFilter === "pending"}
            onClick={() => setTasksFilter("pending")}>Pending <span>{pending}</span></TaskStat>
        </div>
    );
}

function TaskStat({children , active , onClick}){

    return(
        <div className={`${styles.taskStat} ${active ? styles.active : ""}`}
        onClick={onClick}>
            {children}
        </div>
    )
}

function Sorting(){
    const {currentSorting , setCurrentSorting} = useTasksContext();
    
    return (
        <select className={styles.select} value={currentSorting}
        onChange={(e) => setCurrentSorting(e.target.value)}>
            <option value="dueDate">Sort: Due Date</option>
            <option value="status">Sort: Status</option>
            <option value="priority">Sort: priority</option>
        </select>
    );
}