import Task from "../Task";
import "./ActiveTasks.css";

const ActiveTasks = ({ tasks }) => {
  return (
    <div className="active">
      <h1>Running Tasks</h1>
      {tasks.slice(0,4).map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ActiveTasks;
