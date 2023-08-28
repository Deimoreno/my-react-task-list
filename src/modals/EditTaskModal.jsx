import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Input,
  useDisclosure,
  Flex,
  Text,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";

function EditTaskModal({ task, onUpdateTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  function handleSave() {
    onUpdateTask(task.id, {
      name: editedName,
      description: editedDescription,
    });
    onClose();
  }

  return (
    <Flex>
      <IconButton
        colorScheme="blue"
        icon={<EditIcon />}
        aria-label="Editar"
        onClick={onOpen}
        mr="4"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit task.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Name:</Text>
            <Input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <Text mt={5}>Description:</Text>
            <Input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <IconButton
              colorScheme="blue"
              icon={<CheckIcon />}
              aria-label="Guardar"
              onClick={handleSave}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default EditTaskModal;
