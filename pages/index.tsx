import { Box, Container, Flex, Text, Stack, Center} from '@chakra-ui/react'
import { VStack, StackDivider, HStack } from '@chakra-ui/react'
import MapScroll from '../components/mapScroll'
import Map from './Map'
import Link from 'next/link'




const Home = () => {


  return (
    <>
  <Center>
    <Box w="100%" h="100vh" position="relative" overflow="hidden">
      <Flex  alignItems="center">
        <Box overflowY="auto">
          <MapScroll/>
        </Box>
        <Box w="500px" flex="1">
          <Map/>
        </Box>
        
      </Flex>
      
      </Box>ß
      </Center>
    </>
    
  )
}

export default Home;
