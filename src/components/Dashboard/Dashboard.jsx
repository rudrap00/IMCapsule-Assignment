import { useSelector } from "react-redux";
import ActiveTasks from "../Tasks/Active/ActiveTasks";
import CompletedTasks from "../Tasks/Complete/CompletedTasks";
import "./Dashboard.css";

const Dashboard = () => {
  const activeTasks = useSelector((state) => state.activeTasks.value);
  const completedTasks = useSelector((state) => state.completedTasks.value);

  return (
    <div className="dashboard">
      <ActiveTasks tasks={activeTasks} />
      <div className="margin"></div>
      <CompletedTasks tasks={completedTasks} />
    </div>
  );
};

export default Dashboard;
