import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 12,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "completed",
    },
    {
      id: 13,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "completed",
    },
    {
      id: 14,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "completed",
    },
    {
      id: 15,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "completed",
    },
  ],
};

export const completedTaskSlice = createSlice({
  name: "completedTasks",
  initialState,
  reducers: {
    completeTask: (state, action) => {
      const task = { ...action.payload, status: "completed" };
      state.value = [task, ...state.value];
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    removeAll: (state) => {
      state.value = [];
    },
  },
});

export const { completeTask, deleteTask, removeAll } =
  completedTaskSlice.actions;

export default completedTaskSlice.reducer;
