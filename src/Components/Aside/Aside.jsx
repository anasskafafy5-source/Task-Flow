import { NavLink } from "react-router-dom";
import styles from "./Aside.module.css";
import { MdOutlineDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoIosStats, IoIosSettings } from "react-icons/io";
import logo from "../../assets/logo.png";


function Aside({isOpen}) {

  return (
    <div className={`${styles.aside} ${isOpen ? styles.open : styles.close}`}>
      <div className={styles.mainLogo}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo"></img>
        </div>
        <div className={styles.logoText}>
          <p className={styles.log}>TaskFlow</p>
          <p className={styles.tex}>Productivity Suite</p>
        </div>
      </div>
      <div className={styles.navLinks}>
        <NavLink to="/" className={styles.navLink}>
          {<MdOutlineDashboard />} <span>DashBoard</span>
        </NavLink>
        <NavLink to="tasks" className={styles.navLink}>
          {<FaTasks />} <span>Tasks</span>
        </NavLink>
        <NavLink to="stats" className={styles.navLink}>
          {<IoIosStats />}
          <span>Stats</span>
        </NavLink>
        <NavLink to="settings" className={styles.navLink}>
          {<IoIosSettings />} <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Aside;
