import React from "react";
import { Text, Container, Box, Image, HStack } from "@chakra-ui/react";

const Mission = () => {
  return (
    <>

      <Box backgroundColor="#FFF9F2" minH="100vh" >

        <Container minW="70vh">
        <HStack>
          <Image boxSize="300px"
          objectFit="cover"
          src='https://images.unsplash.com/photo-1612965110667-4175024b0dcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Electronics landfill'>
          </Image>
          <Image boxSize="300px"
          objectFit="cover"
          src='https://www.ecotextile.com/images/stories/2018/September/landfill.jpg'
          alt='Textile pollution'>
          </Image>
      </HStack>
          <Text p="5">
            Our mission wtih DNJ sustainability is to raise awareness about the detrimental effects of
            improper disposal of electronics and textiles on the environment
            by promoting waste management and sustainable businesses.
          </Text>

          <Text p="5">
           Improper disposal of electronics is a significant source of
            pollution, as e-waste contains toxic substances such as lead,
            cadmium, and mercury that can leach into the soil and waterways.
            According to the United Nations, the world generates approximately
            50 million tonnes of e-waste each year, and only a fraction of this
            is properly recycled or disposed of. This leads to environmental
            pollution, as well as health hazards for humans and animals. 
          </Text>

          <Text p="5">
          In
            addition to electronics, textiles are also a major contributor to
            waste and pollution. The fashion industry is known for its
            fast-paced production cycles, which lead to a high volume of
            discarded clothing and textile waste. According to the Ellen
            MacArthur Foundation, the equivalent of one garbage truck full of
            textiles is landfilled or burned every second globally.
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Mission;
