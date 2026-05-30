import styles from './Navbar.module.css';
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { useSearchContext } from '../../Context/SearchContext';

function Navbar() {
    const {searchQuery , handleSearch , clearSearch} = useSearchContext();

    function handleClick(){
        clearSearch()
    }
    return (
        <>
        <nav className={styles.mainNav}>
            <div className={styles.content}>
                <div className={styles.ser}>
                {<FaSearch />}
                <input value={searchQuery}
                 onChange={(e) => handleSearch(e.target.value)}
                 type='text' placeholder='Search Tasks,Projects'></input>
                <button onClick={handleClick} className='btn'>Clear</button>
                </div>

                <div className={styles.sec}>
                    <div className={styles.info}>
                        <IoIosNotifications className={styles.noti} />
                        <CiDark  className={styles.dark}/>
                    </div>
                <div className={styles.acc}>
                    <div className={styles.info}>
                        <p className={styles.name}>Anass Mahmoud</p>
                        <p className={styles.email}>anass@gmail.com</p>
                    </div>
                    <div className={styles.image}>
                        <img src='src/assets/accountImage.jpg' alt='account image'></img>
                    </div>
                </div>
                </div>
            </div>
        </nav>

        
        </>
    )
}

export default Navbar
