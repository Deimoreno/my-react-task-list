import React, { useState } from "react";
import Task from "./Task";
import useTaskList from "../hooks/useTaskList";
import { Box, Flex, Input, IconButton, Divider } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import TaskNameValidationModal from "../modals/TaskNameValidation";
import TaskAddedModal from "../modals/TaskAddedModal";

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskList();
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [showTaskAddedModal, setShowTaskAddedModal] = useState(false);

  function handleAddTask() {
    if (newTaskName.length > 3) {
      createTask(newTaskName, newTaskDescription);
      setNewTaskName("");
      setNewTaskDescription("");
      setShowTaskAddedModal(true);
    } else {
      setShowValidationModal(true);
    }
  }

  function handleDeleteTask(id) {
    deleteTask(id);
  }

  function handleUpdateTask(id, updatedTask) {
    updateTask(id, updatedTask);
  }

  function handleValidationModalClose() {
    setShowValidationModal(false);
  }

  function handleTaskAddedModalClose() {
    setShowTaskAddedModal(false);
  }

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box className="task-list" w="60%" marginTop="40px" p="4">
        <Box className="task-form">
          <Flex>
            <Input
              flex={1}
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              placeholder="Task name*"
              id="task-name-input"
              mr="2"
            />
            <Input
              flex={1}
              type="text"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              placeholder="Description (optional)"
              id="task-description-input"
              mr="2"
            />
            <IconButton
              aria-label="Add Task"
              icon={<AddIcon />}
              colorScheme="green"
              onClick={handleAddTask}
              ml="2"
            />
          </Flex>
        </Box>

        <Box marginTop="20px">
          {tasks.map((task, index) => (
            <React.Fragment key={task.id}>
              <Task
                task={task}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
              />
              {index !== tasks.length - 1 && (
                <Divider my="4" borderColor="gray.400" />
              )}
            </React.Fragment>
          ))}
        </Box>

        <TaskNameValidationModal
          isOpen={showValidationModal}
          onClose={handleValidationModalClose}
        />

        <TaskAddedModal
          isOpen={showTaskAddedModal}
          onClose={handleTaskAddedModalClose}
        />
      </Box>
    </Flex>
  );
}

export default TaskList;
