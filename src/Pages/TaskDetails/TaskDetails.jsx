import { useNavigate, useParams } from 'react-router-dom';
import styles from './TaskDetails.module.css';
import BackButton from "../../Components/BackButton/BackButton";
import { BiEdit } from "react-icons/bi";
import { IoTrash } from "react-icons/io5";
import { useMainContext } from '../../Context/MainContext';
import MainTaskDetails from '../../Components/MainTaskDetails/MainTaskDetails';

function TaskDetails() {
    const {id} = useParams();
    const {getTaskById , deleteTask} = useMainContext();
    const navigate = useNavigate();
    const task = getTaskById(id);
    // handle delete task
    function handleDeleteTask(){
        deleteTask(id);
        navigate("/tasks");
    }

    return (
        <div>
           <div className={styles.title}>
            <div>
                <h4>Task Details</h4> <BackButton />
            </div>
            <div className={styles.control}>
                <button className={`btn  ${styles.button} ${styles.edit}`}
                onClick={() => navigate(`edit`)}>
                    <BiEdit className={styles.icon} /> <span>Edit</span>
                </button>
                <button className={`btn ${styles.button} ${styles.delete}`}
                onClick={handleDeleteTask}>
                    <IoTrash className={styles.icon} /> <span>Delete</span>
                </button>
            </div>
           </div>
           <MainTaskDetails task={task} />

        </div>
    )
}

export default TaskDetails

