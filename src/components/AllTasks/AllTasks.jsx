import { useSelector } from "react-redux";
import Task from "../Tasks/Task";

const AllTasks = () => {
  const activeTasks = useSelector((state) => state.activeTasks.value);
  const completedTasks = useSelector((state) => state.completedTasks.value);

  const tasks = [...activeTasks, ...completedTasks];
  return (
    <div>
      <div className="center">
        <div className="centered-div">
          <h1>All Tasks</h1>
        </div>
      </div>

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default AllTasks;
