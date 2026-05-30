import { useMainContext } from '../../Context/MainContext';
import styles from './DangerArea.module.css';
import { MdDeleteForever } from "react-icons/md";

function DangerArea() {
    const {resetAllTasks} = useMainContext();
    return (
        <div className={styles.dangerArea}>
            <h4>Danger Zone</h4>
            <TheDanger onClick={resetAllTasks}
            title="Reset All Tasks"
             text="This will permanently delete all your tasks. This action cannot be undone."/>

             <TheDanger 
            title="Delete Account"
             text="Permanently delete your account and all associated data."/>
        </div>
    )
}

function TheDanger({title , text , onClick}){

    return (
    <div className={styles.box}>
        <div className='left'>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
        <div className='right'>
            <ButtonDelete onClick={onClick}><MdDeleteForever/> Reset</ButtonDelete>
        </div>
    </div>
    );
}


function ButtonDelete({children , onClick}){
    const style = {
        backgroundColor: "rgba(203, 35, 35, 0.32)",
        color: "red",
        fontSize: `${14}px`,
        fontWeight: "bold",
        padding: `${5}px ${12}px`,
        borderRadius: `${10}px`,
        border: "none",
        cursor: "pointer",
    };
    return (
        <button onClick={onClick} style={style}>{children}</button>
    );
}

export default DangerArea
