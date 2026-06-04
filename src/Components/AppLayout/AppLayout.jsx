import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Navbar from "../NavBar/Navbar";
import styles from "./AppLayout.module.css";
import { useState } from "react";

function AppLayout() {
    const [asideOpen , setAsideOpen] = useState(true);

  return (
    <>
      <Aside isOpen={asideOpen}/>
      <Navbar setAsideOpen={setAsideOpen} asideOpen={asideOpen} />
      <main className={`${styles.main}`}>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
