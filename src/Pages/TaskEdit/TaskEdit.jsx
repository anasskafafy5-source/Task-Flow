import { useParams } from 'react-router-dom'
import BackButton from '../../Components/BackButton/BackButton';
import AddTaskForm from '../../Components/AddTaskForm/AddTaskForm';
import { useMainContext } from '../../Context/MainContext';
function TaskEdit() {
    const {id} = useParams();
    const {getTaskById} = useMainContext();
    const task = getTaskById(id);
  
    return (
        <div style={{padding: "20px"}}>
            <div style={{marginBottom: "30px"}}>
            <h3>Edit the Task</h3>
            <BackButton />
            </div>
            <AddTaskForm type="edit" task={task}/>
        </div>
    )
}

export default TaskEdit
