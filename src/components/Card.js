import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack >
      <Box
        alignItems='baseline'
        bg='white'
        color="Black"
        borderRadius='lg'
      >
        <Image borderRadius='lg' src={imageSrc}></Image>

        <Box px="3" py='4'>
          <Heading fontSize='xl'>{title}</Heading>
          <Text color="#999" py="2">{description}</Text>
          <Box display='flex' alignItems="center">
            <Text >See more</Text>
            <FontAwesomeIcon style={{ marginLeft: '8px' }} icon={faArrowRight} />
          </Box>
        </Box>

      </Box>

    </VStack>
  );
};

export default Card;
