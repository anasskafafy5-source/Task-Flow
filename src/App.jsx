import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import AppLayout from "./Components/AppLayout/AppLayout";
import { MainProvider } from "./Context/MainContext";
import { TasksProvider } from "./Context/FilterContext";
import { SearchProvider } from "./Context/SearchContext";


const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Tasks = lazy(() => import("./Pages/Tasks/Tasks"));
const Stats = lazy(() => import("./Pages/Stats/Stats"));
const Settings = lazy(() => import("./Pages/Settings/Settings"));
const AddTask = lazy(() => import("./Pages/AddTask/AddTask"));
const TaskDetails = lazy(() => import("./Pages/TaskDetails/TaskDetails"));
const TaskEdit = lazy(() => import("./Pages/TaskEdit/TaskEdit"));

export default function App() {
  return (
    <BrowserRouter>
      <MainProvider>
        <SearchProvider>
        <TasksProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="tasks/addTask" element={<AddTask />} />
              <Route path="tasks/:id" element={<TaskDetails />} />
              <Route path="tasks/:id/edit" element={<TaskEdit />} />
              <Route path="stats" element={<Stats />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </TasksProvider>
        </SearchProvider>
      </MainProvider>
    </BrowserRouter>
  );
}
