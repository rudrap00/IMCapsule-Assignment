import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";
import completedTaskReducer from "../features/completedTaskSlice";

const store = configureStore({
  reducer: {
    activeTasks: taskReducer,
    completedTasks: completedTaskReducer,
  },
});

export default store;
