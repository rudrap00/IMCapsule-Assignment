import Task from "../Task";
import "./CompletedTasks.css";

const CompletedTasks = ({ tasks }) => {
  return (
    <div className="completed">
      <h1>Completed Tasks</h1>
      {tasks.slice(0, 3).map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default CompletedTasks;
