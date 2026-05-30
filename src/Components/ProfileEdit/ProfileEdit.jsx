import styles from './ProfileEdit.module.css';
import { FaPerson } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
function ProfileEdit() {
    return (
        <div className={styles.profileInfo}>
            <h4>Profile Information</h4>
            <div className={styles.avatar}>

                <div className={styles.left}>
                    <img src='src/assets/accountImage.jpg' alt="profile image"></img>
                    <div className={styles.accInfo}>
                        <p className={styles.name}>Anass Mahmoud</p>
                        <p className={styles.email}>anasska@gmal.com</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <button className="btn">Change Avatar</button>
                </div>

            </div>

            <div className={styles.inputInfo}>
                <div className={styles.controls}>
                    <div className={styles.name}>
                        <p>
                            <FaPerson /> Full Name
                             </p>
                        <input type='text' placeholder='name' disabled={true}
                         value={"Anass Mahmoud"}></input>
                    </div>
                    <div className={styles.email}>
                        <p>
                            <MdOutlineMail />Email Adress
                            </p>
                        <input type='email' placeholder='email' disabled={true}
                         value={"anasskafgmail.com"}></input>
                    </div>
                </div>
            </div>

            <button className='btn'>Save Change</button>
        </div>
    )
}

export default ProfileEdit
