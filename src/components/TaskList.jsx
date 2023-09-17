import React, { useState } from 'react';
import Task from './Task';
import useTaskList from '../hooks/useTaskList';
import { GrAddCircle } from "react-icons/gr";


function TaskList() {
  // Se utiliza el hook useTaskList para obtener las tareas del estado global
  const { tasks, createTask, deleteTask, updateTask } = useTaskList();

  // Estado local para el nombre de la nueva tarea
  const [newTaskName, setNewTaskName] = useState("");

  // Estado local para el id de la tarea a eliminar
  const [newTaskDescription, setNewTaskDescription] = useState("");

  // Función para agregar una nueva tarea
  function handleAddTask() {
    if (newTaskName.length > 3) {
      // Se crea la tarea con el nombre especificado
      createTask(newTaskName, newTaskDescription);

      // Se reinicia el estado local del nombre de la nueva tarea
      setNewTaskName("");
      // Se agregara una descipcion de la nueva tarea
      setNewTaskDescription("");
    }else {
      alert('El nombre de la tarea debe tener más de 3 caracteres');
    }
  }

  // Función para manejar la eliminación de una tarea
  function handleDeleteTask(id) {
    if (window.confirm('Está seguro que deseas eliminar esta tarea?')) {
      deleteTask(id);
    }
  }
  return (
    <div className="task-list">
      <div className="task-form">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Agregar tarea"
          id="task-name-input"
        />
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Descripcion (Opcional)"
          id="task-description-input"
        />
        <button onClick={handleAddTask}><GrAddCircle /></button>
      </div>

      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          completed={task.completed}
          onCheck={(id, completed) => updateTask(id, { completed })}
          onDelete={(id) => handleDeleteTask(id)}
          onEdit={(id, name, description) =>
            updateTask(id, { name, description })
          }
        />
      ))}
    </div>
  );
}

export default TaskList;