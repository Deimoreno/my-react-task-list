import React, { useState } from 'react';
import { GoTrashcan, GoX } from "react-icons/go";
import { VscSave } from "react-icons/vsc";
import { MdNoteAlt } from "react-icons/md";


function Task(props) {
  // Destructuramos las props para obtener los valores necesarios
  const { id, name, completed, onCheck, onDelete, onEdit } = props;
  // Definimos los estados locales necesarios
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);

  // Función para actualizar el valor de updatedName cuando cambia el input de edición
  function handleNameChange(e) {
    setUpdatedName(e.target.value);
  }

  // Función para activar el modo edición
  function handleEdit() {
    setIsEditing(true);
  }

  // Función para cancelar la edición
  function handleCancel() {
    setIsEditing(false);
    setUpdatedName(name);
  }

  // Función para guardar los cambios
  function handleSave() {
    onEdit(id, updatedName);
    setIsEditing(false);
  }

  return (
    <div className="task">
      {/* Checkbox para marcar la tarea como completada */}
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onCheck(id, e.target.checked)}
      />
      {/* Si estamos en modo edición, mostramos el input y los botones de guardar y cancelar */}
      {isEditing ? (
        <>
          <input type="text" value={updatedName} onChange={handleNameChange} />
          <button onClick={handleSave}><VscSave /></button>
          <button onClick={handleCancel}><GoX /></button>
        </>
      ) : (
        // Si no estamos en modo edición, mostramos el nombre de la tarea y los botones de editar y borrar
        <>
          <span className={completed ? "completed" : ""}>{name}</span>
          <button onClick={handleEdit}>< MdNoteAlt /></button>
          <button onClick={() => onDelete(id)}><GoTrashcan /></button>
        </>
      )}
    </div>
  );
}

export default Task;