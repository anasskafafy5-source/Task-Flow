import styles from './AddTask.module.css';
import BackButton from '../../Components/BackButton/BackButton';
import AddTaskForm from '../../Components/AddTaskForm/AddTaskForm';

function AddTask() {
    

    return (
        <div className={styles.main}>
           <div className={styles.title}>
            <h4>Add New Task</h4>
            <BackButton />
           </div>
           <AddTaskForm />
        </div>
    )
}

export default AddTask
