import { useRef } from "react";
import "./CreateTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/taskSlice";

const CreateTask = () => {
  const titleRef = useRef("");
  const dateRef = useRef("");
  const priorityRef = useRef("");
  const categoryRef = useRef("");
  const descriptionRef = useRef("");

  const dispatch = useDispatch();

  const addToListHandler = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const date = dateRef.current.value;
    const priority = priorityRef.current.value;
    const category = categoryRef.current.value;
    const taskDescription = descriptionRef.current.value;

    const task = {
      title,
      startDate: date,
      priority,
      category,
      taskDescription,
      endDate: date,
    };

    dispatch(addTask(task));

    titleRef.current.value = "";
    dateRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div className="create-task">
      <div className="center">
        <div className="centered-div">
          <h1>Create your task</h1>
        </div>
      </div>

      <div className="form">
        <form onSubmit={addToListHandler}>
          <div className="labels">
            <label htmlFor="title">Task Title</label> <br />
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Task Title"
              ref={titleRef}
            />
          </div>
          <div className="labels">
            <label htmlFor="endDate">End date</label> <br />
            <input
              type="date"
              id="endDate"
              name="endDate"
              placeholder="End date"
              ref={dateRef}
            />
          </div>
          <div className="labels">
            <label htmlFor="priority">Priority level</label> <br />
            <select id="priority" name="priority" ref={priorityRef}>
              <option value="Important">Important</option>
            </select>
          </div>
          <div className="labels">
            <label htmlFor="priority">Category</label> <br />
            <select id="priority" name="priority" ref={categoryRef}>
              <option value="Daily task">Daily Task</option>
            </select>
          </div>

          <div className="label">
            <label htmlFor="taskDescription">Task description</label> <br />
            <input
              type="text"
              id="taskDescription"
              name="taskDescription"
              ref={descriptionRef}
            />
          </div>

          <div className="button">
            <button type="submit">Add to list</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
