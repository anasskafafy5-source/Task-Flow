import ContainerStatsBox from "../../Components/ContainerStatsBox/ContainerStatsBox";
import styles from "./Dashboard.module.css";
import StatsBox from "../../Components/StatsBox/StatsBox";
import { VscTarget } from "react-icons/vsc";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import ProgressWeekly from "../../Components/ProgressWeekly/ProgressWeekly";
import RecentTasks from "../../Components/RecentTasks/RecentTasks";
import { useMainContext } from "../../Context/MainContext";
function Dashboard() {
  const { totalTasks, completedTasks, pendingTasks } = useMainContext();
  return (
    <div className={`${styles.container}`}>
      <div className={styles.title}>
        <h3>Welcome Back !</h3>
        <p className={styles.par}>
          Here's what's happening with your tasks today.
        </p>

        <ContainerStatsBox>
          <StatsBox
            textBox="Completed"
            textNum={completedTasks}
            per={12}
            color="blue"
          >
            <VscTarget
              className="icon"
              style={{ color: "rgb(32, 218, 255)" }}
            />
          </StatsBox>
          <StatsBox
            textBox="Total Task"
            textNum={totalTasks}
            per={8}
            color="green"
          >
            <IoCloudDoneSharp
              className={styles.icon}
              style={{ color: "rgb(106, 248, 108)" }}
            />
          </StatsBox>

          <StatsBox
            textBox="Pending"
            textNum={pendingTasks}
            per={3}
            color="orange"
          >
            <MdOutlinePending
              className="icon"
              style={{ color: "rgb(247, 166, 84)" }}
            />
          </StatsBox>

          <StatsBox textBox="Productivity" textNum={76} per={24} color="purple">
            <FaArrowTrendUp
              className="icon"
              style={{ color: "rgb(137, 51, 236)" }}
            />
          </StatsBox>
        </ContainerStatsBox>
      </div>

      {/* Start Progress weekly */}
      <ProgressWeekly />
      {/* start recent  tasks*/}
      <RecentTasks />
    </div>
  );
}

export default Dashboard;
