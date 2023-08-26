import { useState } from "react";

function useTaskList() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function createTask(name, description) {
    const newTask = {
      id: Date.now(),
      name,
      description: description || "",
      completed: false,
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  function updateTask(id, updatedFields) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updatedFields };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return { tasks, createTask, updateTask, deleteTask };
}

export default useTaskList;