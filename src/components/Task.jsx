import React, { useState } from "react";
import { Box, Checkbox, Flex, Input, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import DeleteModal from "../modals/DeleteModal";
import EditTaskModal from "../modals/EditTaskModal";

function Task({ task, onUpdateTask, onDeleteTask }) {
  const [editing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleCheck(completed) {
    onUpdateTask(task.id, { completed });
  }

  function handleDelete() {
    setShowDeleteModal(true);
  }

  function confirmDelete() {
    onDeleteTask(task.id);
    setShowDeleteModal(false);
  }

  function cancelDelete() {
    setShowDeleteModal(false);
  }

  return (
    <Box className="task">
      {editing ? (
        <Flex alignItems="center" justifyContent="flex-end">
          <Input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <Input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Checkbox
              isChecked={task.completed}
              onChange={(e) => handleCheck(e.target.checked)}
            />
            <Box as="h4" marginLeft="2">
              {task.name}
            </Box>
          </Flex>
          <Flex alignItems="center">
            <EditTaskModal task={task} onUpdateTask={onUpdateTask} />
            <IconButton
              aria-label="Delete Task"
              colorScheme="red"
              icon={<DeleteIcon />}
              onClick={handleDelete}
            />
          </Flex>
        </Flex>
      )}

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </Box>
  );
}

export default Task;