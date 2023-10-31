import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Root from "./components/Root/Root";
import CreateTask from "./components/Form/CreateTask";
import AllTasks from "./components/AllTasks/AllTasks";
import AllCompletedTasks from "./components/AllCompletedTasks/AllCompletedTasks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "allTasks",
          element: <AllTasks />,
        },
        {
          path: "completedTasks",
          element: <AllCompletedTasks />,
        },
        {
          path: "addTask",
          element: <CreateTask />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Dashboard />
    </RouterProvider>
  );
}

export default App;
