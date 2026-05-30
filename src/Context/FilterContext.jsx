import { createContext, useContext , useState , useMemo} from "react";
import { useMainContext } from "./MainContext";
import { useSearchContext } from "./SearchContext";

const TasksContext = createContext();

// function filter the tasks to by due Date
function filterTasksByDueDate(tasks){
    const temp = tasks.slice();
    temp.sort((a,b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return dateA - dateB;
    });
    return temp;
}

// function filter the tasks by status
function filterTasksByPriority(tasks) {
  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };

  return [...tasks].sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

// function to filter by status
function getTaskStatus(task) {
  if (task.done) return "completed";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(task.dueDate);
  dueDate.setHours(0, 0, 0, 0);

  if (dueDate < today) return "overdue";

  return "active";
}

function filterTasksByStatus(tasks) {
  const statusOrder = {
    overdue: 1,
    active: 2,
    completed: 3,
  };

  return [...tasks].sort((a, b) => {
    return statusOrder[getTaskStatus(a)] - statusOrder[getTaskStatus(b)];
  });
}


function TasksProvider({children}){
    const {tasks} = useMainContext();
    const { searchQuery } = useSearchContext();
    
    const [currentSorting , setCurrentSorting] = useState("dueDate");
    const [tasksFilter , setTasksFilter] = useState("all");


    const filteredByType = useMemo(() => {
  if (tasksFilter === "completed") {
    return tasks.filter((task) => task.done);
  }

  if (tasksFilter === "pending") {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      return !task.done && today <= dueDate;
    });
  }

  return tasks;
}, [tasks, tasksFilter]);


    const currentTasks = useMemo(() => {
    let filteredTasks = [...filteredByType];

    // search
    if (searchQuery.trim() !== "") {
        filteredTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // sorting
    if (currentSorting === "dueDate") {
        return filterTasksByDueDate(filteredTasks);
    }

    if (currentSorting === "priority") {
        return filterTasksByPriority(filteredTasks);
    }

    if (currentSorting === "status") {
        return filterTasksByStatus(filteredTasks);
    }

    return filteredTasks;

}, [currentSorting,filteredByType , searchQuery]);


    const value = useMemo(() => (
    {
     tasks: currentTasks,
             currentSorting,
            setCurrentSorting,
            tasksFilter,
            setTasksFilter,
    }
) , [
          currentTasks,
            currentSorting,
            tasksFilter,
]);

    return (
        <TasksContext.Provider value={value} >
            {children}
        </TasksContext.Provider>
    );
}


function useTasksContext(){
    const context = useContext(TasksContext);
    if(context === undefined){
        throw new Error("useTasksContext must be used within a TasksProvider");
    }
    return context;
}

export {TasksProvider , useTasksContext};