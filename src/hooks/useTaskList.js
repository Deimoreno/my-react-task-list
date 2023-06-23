import { useState } from "react";

function useTaskList () {

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    function createTask(name) {
         // Crea un objeto con los datos de la nueva tarea (nombre, id y estado de completado)
    const newTask = {
        id: Date.now(), // El id se genera a partir del tiempo actual en milisegundos
        name,
        completed: false,
      };
       // Agrega la nueva tarea al estado de la lista de tareas
    setTasks([...tasks, newTask]);
    // Guarda la lista actualizada en el localStorage, convirtiéndola a formato JSON
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    } 

     // Función para actualizar una tarea existente y guardarla en el localStorage
  function updateTask(id, updatedFields) {
    // Crea una nueva lista de tareas actualizando los campos de la tarea correspondiente al id dado
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        // Si la tarea es la que queremos actualizar, sobrescribe los campos especificados en updatedFields
        return { ...task, ...updatedFields };
      }
       // Si no es la tarea que queremos actualizar, deja la tarea tal como está
       return task;
    });

      // Actualiza el estado de la lista de tareas con la nueva lista actualizada
      setTasks(updatedTasks);
      // Guarda la lista actualizada en el localStorage, convirtiéndola a formato JSON
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    // Función para eliminar una tarea existente y guardar la lista actualizada en el localStorage
  function deleteTask(id) {
    // Crea una nueva lista de tareas filtrando las tareas que no corresponden al id dado
    const updatedTasks = tasks.filter((task) => task.id !== id);
    // Actualiza el estado de la lista de tareas con la nueva lista actualizada
    setTasks(updatedTasks);
    // Guarda la lista actualizada en el localStorage, convirtiéndola a formato JSON
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
   // Devuelve un objeto con el estado de la lista de tareas y las tres funciones para crear, actualizar y eliminar tareas
   return { tasks, createTask, updateTask, deleteTask };
}

// Exporta la función personalizada useTaskList
export default useTaskList;
