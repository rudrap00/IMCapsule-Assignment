import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "active",
    },
    {
      id: 2,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "active",
    },
    {
      id: 3,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "active",
    },
    {
      id: 4,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "active",
    },
    {
      id: 5,
      title: "Learn Javascript",
      startDate: "07-07-2023",
      priority: "Important",
      category: "Daily task",
      taskDescription: "Important topics: map, forEach, filter",
      endDate: "07-07-2023",
      status: "active",
    },
  ],
};

export const taskSlice = createSlice({
  name: "activeTasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = { id: nanoid(), ...action.payload, status: "active" };
      state.value = [task, ...state.value];
    },
    removeTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
