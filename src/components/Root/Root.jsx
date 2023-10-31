import { Link, Outlet } from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
    <div className="root">
      <div className="links">
        <Link className="linkStyle" to="/">Dashboard</Link>
        <Link className="linkStyle" to="/allTasks">All Tasks</Link>
        <Link className="linkStyle" to="/completedTasks">Completed Tasks</Link>
        <Link className="linkStyle" to="/addTask">Add A Task</Link>
      </div>
      <div className="out">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
