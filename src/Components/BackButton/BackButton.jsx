import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';
import { IoArrowBackCircle } from "react-icons/io5";


function BackButton() {
    const navigate = useNavigate();
    return (
        <button className={styles.back} onClick={() => navigate(-1)}>
            <IoArrowBackCircle className={styles.icon} />
        </button>
    )
}

export default BackButton
