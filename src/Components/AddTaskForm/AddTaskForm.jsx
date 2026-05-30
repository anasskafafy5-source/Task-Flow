import { useState , useReducer, useEffect } from 'react';
import styles from './AddTaskForm.module.css';
import DueDatePicker from "../DueDatePicker/DueDatePicker";
import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../../Context/MainContext';

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const initalState = {
    title: "",
    description: "",
    notes: "",
    priority: "medium",
    notCompletedForm: false, 
}

function  reducer(state , action) {
    switch(action.type){
        case "changeTitle":
            return {...state , title: action.payload , notCompletedForm: false};
        case "changeDesc":
            return {...state , description: action.payload , notCompletedForm: false};
        case "changeNotes":
            return {...state , notes: action.payload};
        case "changePriority":
            return {...state , priority: action.payload ,notCompletedForm: false};
        case "notForm":
            return {...state , notCompletedForm: true};
        case "editChange":
            return action.payload;
        default:
            throw new Error("UnKown Error");
    }
}

function AddTaskForm({type , task=null}) {
    const [dueDate, setDueDate] = useState(null);
    const navigate = useNavigate();
    const [{title , description , notes , priority , notCompletedForm} , dispatch] = useReducer(reducer , initalState);
    const {addNewTask , editTask} = useMainContext();

    useEffect(() => {
        if(type === "edit"){
            if(task){
                const temp = {
                    title: task.title,
                    description: task.description,
                    notes: task.notes,
                    priority: task.priority,
                    notCompletedForm: false
                }
                dispatch({type: "editChange" , payload: temp});
                setDueDate(task.dueDate ? new Date(task.dueDate) : null);
            }
        }
    } , [type , task]);

    function handleSumbit(e){
        e.preventDefault();
        if(dueDate === null || title === "" || description === ""){
            dispatch({type: "notForm"});
            return false;
        }
        const newTask = {
            id: type === "edit" ? task.id : crypto.randomUUID(),
            title: title,
            description: description,
            notes: notes,
            done: type==="edit" ? task.done :  false,
            priority: priority,
            createdAt:type==="edit" ? task.createdAt : formatLocalDate(new Date()),
            dueDate: dueDate ? formatLocalDate(dueDate) : null,
            completedAt: type==="edit" ? task.completedAt : null,
        }
        if(type === "edit"){
            editTask(newTask);
        }else{
            addNewTask(newTask);
        }
        navigate(-1);
    }
    

    return (
        <form className={styles.form} onSubmit={handleSumbit}>
            {notCompletedForm && 
            <div className={styles.sec}>
                <p className={styles.notCompletedForm}>Please complete the form ⛔</p>
            </div>}
            <div className={styles.sec}>
                <label className={styles.label}>Title</label>
                 <input value={title} 
                 onChange={(e) => dispatch({type: "changeTitle" , payload: e.target.value})}
                  className={styles.input} type='text' placeholder='Enter Task Title'></input>
            </div>
            <div className={styles.sec}>
                <label className={styles.label}>Description</label>
                 <input
                 value={description} 
                 onChange={(e) => dispatch({type: "changeDesc" , payload: e.target.value})}
                  className={`${styles.input} ${styles.inputDesc}`} type='text' placeholder='Enter Task Description'></input>
            </div>
            <div className={styles.sec}>
                <label className={styles.label}>Notes</label>
                 <input
                 value={notes} 
                 onChange={(e) => dispatch({type: "changeNotes" , payload: e.target.value})}
                  className={`${styles.input} ${styles.inputDesc}`} type='text' placeholder='Add Additional Notes...'></input>
            </div>
            <div className={styles.sec}>
                <label className={styles.label}>Priority</label>
                <select value={priority}
                onChange={(e) => dispatch({type: "changePriority" , payload: e.target.value})}>
                    <option value={"high"}>High</option>
                    <option value={"medium"}>Medium</option>
                    <option value={"low"}>Low</option>
                </select>
            </div>
            <div className={styles.sec}>
                <DueDatePicker value={dueDate} onChange={setDueDate} />
            </div>
            <div className={styles.ending}>
                <button className={`${styles.button} ${styles.cn}`} type="button" onClick={() => navigate(-1)}>Cancel</button>
                <button className={`${styles.button} ${styles.ad}`} type='submit'>
                    {type ==="edit" ? "Save Changes" : "Add Task"}
                       </button>
            </div>
        </form>
    )
}

export default AddTaskForm
