import { Stack, HStack, VStack, Box, Text, Container } from '@chakra-ui/react'

const ScrollItem = ({ children, ...props }) => {
    return (
      <Box
        p={2}
        boxShadow='outline'
        {...props}
      >
        {children}
      </Box>
    );
  };


const Locations = [
    { name: "X Depot", address: "1234 Sesame Street"},
    { name: "Y Depot", address: "2234 Sesame Street"},
    { name: "Z Depot", address: "3234 Sesame Street"},
    { name: "Z Depot", address: "3234 Sesame Street"},
    { name: "Z Depot", address: "3234 Sesame Street"},
    { name: "Z Depot", address: "3234 Sesame Street"},
    { name: "Z Depot", address: "3234 Sesame Street"}, 
    { name: "Z Depot", address: "3234 Sesame Street"},
    { name: "Z Depot", address: "3234 Sesame Street"},


];
export default function MapScroll() {
    return (

    <Container alignItems="baseline" height="300px" width="400px">
        <VStack width="100%">
        {Locations.map((location) => (
            <ScrollItem>
              {location.name}
              {location.address}
            </ScrollItem>
          ))}
        </VStack>
    </Container>
        
        
    )
}