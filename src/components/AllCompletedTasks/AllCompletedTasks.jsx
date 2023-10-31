import { removeAll } from "../../features/completedTaskSlice";
import Task from "../Tasks/Task";
import { useDispatch, useSelector } from "react-redux";
import "./AllCompletedTasks.css";

const AllCompletedTasks = () => {
  const tasks = useSelector((state) => state.completedTasks.value);
  const dispatch = useDispatch();

  const clearAllHandler = () => {
    dispatch(removeAll());
  };

  return (
    <div>
      <div className="center">
        <div className="centered-div">
          <h1>Completed Tasks</h1>
        </div>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}

      <div className="buttons">
        <button onClick={clearAllHandler}>Clear All</button>
      </div>
    </div>
  );
};

export default AllCompletedTasks;
