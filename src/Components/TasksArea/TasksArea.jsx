import styles from './TasksArea.module.css'
import TaskPreview from '../TaskPreview/TaskPreview';
import { useTasksContext } from '../../Context/FilterContext';

function TasksArea() {
  const {tasks} = useTasksContext();
    return (
        <div className={styles.main}>
            {tasks.map((task ) => <TaskPreview task={task} key={task.id} />)}
        </div>
    )
}

export default TasksArea
