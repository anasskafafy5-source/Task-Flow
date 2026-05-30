import { Outlet } from "react-router-dom"
import Aside from "../Aside/Aside";
import Navbar from "../NavBar/Navbar";
import styles from './AppLayout.module.css'

function AppLayout() {
    return (
        <>
        <Aside />
        <Navbar />
        <main className={styles.main}>
            <Outlet />
        </main>
        </>
    )
}

export default AppLayout
