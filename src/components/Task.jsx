import React, { useState } from "react";

function Task({ task, onUpdateTask, onDeleteTask }) {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  function handleCheck(completed) {
    onUpdateTask(task.id, { completed });
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    onUpdateTask(task.id, { name: editedName, description: editedDescription });
    setEditing(false);
  }

  function handleDelete() {
    onDeleteTask(task.id);
  }

  return (
    <div className="task">
      {editing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Editar Tarea"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Editar Descripcion"
          />
          <button onClick={handleSave}> Save </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => handleCheck(e.target.checked)}
          />
          <h3>{task.name}</h3>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Task;
