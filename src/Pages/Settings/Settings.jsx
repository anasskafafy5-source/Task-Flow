import DangerArea from '../../Components/DangerArea/DangerArea';
import ProfileEdit from '../../Components/ProfileEdit/ProfileEdit';
import styles from './Settings.module.css';

function Settings() {
    return (
        <div className={styles.page}>

            <div className={styles.title}>
                <h3>Settings</h3>
                <p>Manage your account and preferences</p>
            </div>
            <ProfileEdit />
            <DangerArea />
        </div>
    )
}

export default Settings
