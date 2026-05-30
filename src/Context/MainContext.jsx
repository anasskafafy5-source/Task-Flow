import { createContext, useCallback, useContext , useEffect, useMemo, useState } from "react";

const MainContext = createContext(null);

// function to get pending tasks
function getPendingTasks(tasks){
  return tasks.filter((task) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0,0,0,0);
    return dueDate >= today && !task.done;
  }).length;
}

// function to get tasks due today
function getTasksDueToday(tasks) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate.getTime() === today.getTime();
  }).length;
}

// fuction to get tasks this week
function getTasksThisWeek(tasks) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  return tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);

    return dueDate >= today && dueDate <= nextWeek;
  }).length;
}

// function get tasks over due
function getTasksOverDue(tasks){
  const today = new Date();
  today.setHours(0 , 0, 0, 0);

  return tasks.filter((task) => {
    const dueDate = new Date(task.dueDate );
    dueDate.setHours(0,0,0,0);
    return !task.done && dueDate < today;
  }).length;
}

function MainProvider({children}){
    const [tasks , setTasks ] = useState(() => {
      const temp = window.localStorage.getItem("tasks");
      return temp ? JSON.parse(temp) : [];
    });

    // for the localStorage
    useEffect(() => {
      window.localStorage.setItem("tasks" , JSON.stringify(tasks));
    } , [tasks]);

    // derived state:
    const totalTasks = tasks.length;
    const completedTasks = useMemo(() =>  tasks.filter((task) => task.done === true).length , [tasks]);
    const pendingTasks = useMemo(() =>getPendingTasks(tasks) , [tasks]);
    const tasksDueToday = useMemo(() =>getTasksDueToday(tasks) , [tasks]);
    const tasksThisWeek = useMemo(() => getTasksThisWeek(tasks) ,[tasks] );
    const overDue = useMemo(() => getTasksOverDue(tasks) , [tasks]);

     // function to add a new Task
    const addNewTask = useCallback( function addNewTask(newTask){
      setTasks(tasks => [...tasks , newTask]);
    } , []);

    // function to get the task by id
    const getTaskById = useCallback(function getTaskById(id){
      return tasks.find((task) => String(task.id) === String(id));
    } , [tasks]);

    // delete task
    const deleteTask = useCallback( function deleteTask(id){
      setTasks((tasks) => tasks.filter((task) => String(task.id) !== String(id)));

    } , []);
    // change the task (pending or completed) by its prop done
    const changeTaskMarked = useCallback( function changeTaskMarked(id){
      setTasks((tasks) => tasks.map((task) => (String(task.id) === String(id) ?
        {...task , done: !task.done} : task) ));
    } ,[]);

    // edit on the task
    const editTask = useCallback( function editTask(editedTask){
      setTasks((tasks) => tasks.map((task) => (
        String(task.id) === String(editedTask.id) ? editedTask : task  
      )));
    } ,[]);

    // reset all tasks
    const resetAllTasks = useCallback(function resetAllTasks(){
      const ans = window.confirm("Are You Sure You Want to reset all tasks");
      if(ans){
        setTasks([]);
      }
    } ,[]);

    const value = useMemo(
          () => (
        { tasks,
          totalTasks,
            completedTasks,
            pendingTasks,
            tasksDueToday,
            tasksThisWeek,
            overDue,
            addNewTask,
            getTaskById,
            deleteTask,
            changeTaskMarked,
           editTask,
           resetAllTasks
        }
      ) , [
        tasks,
        totalTasks,
            completedTasks,
            pendingTasks,
            tasksDueToday,
            tasksThisWeek,
            overDue,
            addNewTask,
            getTaskById,
            deleteTask,
            changeTaskMarked,
           editTask,
           resetAllTasks
      ])
    

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
}

function useMainContext(){
    const context = useContext(MainContext);
    if(context === null){
        throw new Error(`there is error`);
    }

   return context;
    
}

export {MainProvider , useMainContext};