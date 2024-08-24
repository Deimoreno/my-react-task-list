import React from "react";
import useTaskList from "../hooks/useTaskList";
import Header from "../components/Header";
import "../App.css";
import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Checkbox,
  Text,
} from "@chakra-ui/react";

function TaskPage() {
  const { tasks, updateTask } = useTaskList();

  function handleCheck(id, completed) {
    updateTask(id, { completed });
  }

  return (
    <Box className="task-page">
      <Box className="text-center">
        <Header />
      </Box>
      <Flex className="d-flex justify-content-center align-items-center">
        <Table className="task-table">
          <Thead>
            <Tr>
              <Th borderBottom="1px solid" borderColor="gray.400">
                Name
              </Th>
              <Th borderBottom="1px solid" borderColor="gray.400">
                Description
              </Th>
              <Th borderBottom="1px solid" borderColor="gray.400">
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map((task) => (
              <Tr className="task" key={task.id}>
                <Td borderBottom="1px solid" borderColor="gray.400">
                  <h4>{task.name}</h4>
                </Td>
                <Td borderBottom="1px solid" borderColor="gray.400">
                  {task.description}
                </Td>
                <Td borderBottom="1px solid" borderColor="gray.400">
                  <label
                    className={`task-check-label ${
                      task.completed ? "completed" : ""
                    }`}
                  >
                    <Checkbox
                      className="task-check"
                      isChecked={task.completed}
                      onChange={() => handleCheck(task.id, !task.completed)}
                    />
                    {task.completed ? "Completed" : "Incompleted"}
                  </label>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Box>
  );
}

export default TaskPage;
