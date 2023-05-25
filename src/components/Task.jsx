import React, { useState } from 'react';
import { GoTrashcan } from "react-icons/go";
import { GoPencil } from "react-icons/go";

const Task = ({ task, completeTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleInputChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedTitle.trim() !== '') {
      editTask(task.id, editedTitle);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editedTitle} onChange={handleInputChange} />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => completeTask(task.id)}
          />
          <button onClick={() => deleteTask(task.id)}><GoTrashcan /></button>
          <button onClick={handleEditClick}>< GoPencil /></button>
        </>
      )}
    </li>
  );
};

export default Task;
