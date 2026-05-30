import Achievement from '../Achievement/Achievement';
import styles from './Achievements.module.css';
import { FaSuperpowers } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { GiGreatPyramid } from "react-icons/gi";
function Achievements() {
    return (
        <div className={styles.achievements}>
            <div className={styles.title}>
                <h4>Achievements: </h4>
            </div>

            <div className={styles.achievementContainer}>
                <Achievement title="Early Bird" text="Completed 5 tasks before 9 AM">
                    <FaSuperpowers style={{color: "blue" , fontSize: `${25}px`}}/>
                    </Achievement>
                <Achievement title="Productivity Master" text="Maintained 80%+ productivity for a month">
                    <FaArrowUpRightDots style={{color: "green" , fontSize: `${25}px`}}/>
                    </Achievement>
                <Achievement title="100 Tasks Done" text="Reached 100 completed tasks milestone">
                    <IoMdDoneAll style={{color: "purple" , fontSize: `${25}px`}}/>
                    </Achievement>
                <Achievement title="Excellent Work" text="you are doing a great job here keep going.">
                    <GiGreatPyramid style={{color: "yellow" , fontSize: `${25}px`}}/>
                    </Achievement>
            </div>

        </div>
    )
}


export default Achievements
