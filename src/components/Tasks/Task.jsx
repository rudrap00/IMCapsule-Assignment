import TaskDate from "./TaskDate";
import "./Task.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../../features/taskSlice";
import { completeTask, deleteTask } from "../../features/completedTaskSlice";

const Task = ({ task }) => {
  const { id, title, startDate, endDate, status } = task;

  const dispatch = useDispatch();

  const taskDeleteHandler = () => {
    if (status === "active") {
      dispatch(removeTask(id));
    } else {
      dispatch(deleteTask(id));
    }
  };

  const completeTaskHandler = () => {
    dispatch(removeTask(id));
    dispatch(completeTask(task));
  };

  return (
    <div className="task">
      <div>
        <h3>{title}</h3>
        <TaskDate startDate={startDate} endDate={endDate} status={status} />
        <div className="status">
          {status === "completed" && (
            <p>
              <span className="material-symbols-outlined">check_circle</span>
              completed
            </p>
          )}
          {status === "active" && (
            <button onClick={completeTaskHandler}>
              <span className="material-symbols-outlined">select_all</span>
              Mark as completed
            </button>
          )}
        </div>
      </div>
      <div className="actions">
        <button>
          <span className="material-symbols-outlined">info</span>
        </button>
        <button>
          <span className="material-symbols-outlined">edit_square</span>
        </button>
        <button onClick={taskDeleteHandler}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};

export default Task;
