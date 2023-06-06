import React, { useState } from 'react';
import { GoTrashcan} from "react-icons/go";
import { VscSave } from "react-icons/vsc";
import { MdNoteAlt } from "react-icons/md";


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
    <li className='tareas'>
      {isEditing ? (
        <>
          <input type="text" value={editedTitle} onChange={handleInputChange} />
          <button onClick={handleSaveClick}><VscSave /> </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => completeTask(task.id)}
          />

          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
         
          <button onClick={() => deleteTask(task.id)}><GoTrashcan /></button>
          <button onClick={handleEditClick}>< MdNoteAlt /></button>
        </>
      )}
    </li>
  );
};

export default Task;
