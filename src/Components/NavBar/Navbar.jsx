import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { useState } from "react";
import InputSearch from "../InputSearch/InputSearch";
import accountImage from "../../assets/accountImage.jpg";
import { FaBars } from "react-icons/fa";


function Navbar({ setAsideOpen, asideOpen }) {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <nav className={`${styles.mainNav} left-0 flex w-full flex-col`}>
        <div className={styles.content}>
          {/* start for the small screen (ser) */}
          <div className="temp flex w-full  items-center justify-between md:hidden!">
            <div onClick={() => setAsideOpen((aside) => !aside)}>
              {
                <FaBars
                  className={`text-[25px] ${asideOpen ? "text-red-500" : "text-blue-300"}`}
                />
              }
            </div>
            <div onClick={() => setIsSearch(is => !is)}>
              {
                <FaSearch
                  className={`mr-5! block text-[25px] ${isSearch ? "text-red-500" : "text-blue-300"}`}
                />
              }
            </div>
          </div>
          {/* end for the small screen */}

          <div className="hidden md:flex"><InputSearch /></div>

          <div className={styles.sec}>
            <div className={`${styles.info} hidden`}>
              <IoIosNotifications className={styles.noti} />
              <CiDark className={styles.dark} />
            </div>
            <div className={styles.acc}>
              <div className={`${styles.info} hidden`}>
                <p className={styles.name}>Anass Mahmoud</p>
                <p className={styles.email}>anass@gmail.com</p>
              </div>
              <div className={`${styles.image}`}>
                <img
                  src={accountImage}
                  alt="account image"
                ></img>
              </div>
            </div>
          </div>
        </div>

       <div className={`flex md:hidden justify-center ${isSearch ? "flex" : "hidden"}`}> <InputSearch /></div>
      </nav>
    </>
  );
}

export default Navbar;
