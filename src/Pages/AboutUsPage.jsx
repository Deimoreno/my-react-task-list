import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Header from "../components/Header";

const AboutUsPage = () => {
  return (
    <Box>
      <Box className="text-center">
        <Header />
      </Box>
      <Flex className="d-flex justify-content-center align-items-center">
        <Accordion
          defaultIndex={[]}
          allowMultiple
          w="60%"
          marginTop="40px"
          borderColor="gray.400"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="h4" flex="1" textAlign="left">
                  What is my product?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Tasks List is a web platform built with React Js.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="h4" flex="1" textAlign="left">
                  What is it used for?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              It is a platform that will serve us to keep track of all the tasks
              that arise in our day-to-day life, but in an automated way. This
              means that we will be able to register, modify, delete, and update
              the status of our tasks. In this way, we can create our own task
              list and see which tasks are pending and which ones have already
              been completed.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="h4" flex="1" textAlign="left">
                  The Tasks List platform uses the following technologies
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>React JS</li>
                <li>Chakra UI</li>
                <li>Bootstrap</li>
                <li>CSS</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  );
};

export default AboutUsPage;
