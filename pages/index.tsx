import { Heading } from '@chakra-ui/react'
import MapScroll from '../components/mapScroll'
import Map from './Map'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'



const Home = () => {


  return (
    <>
      <Heading>
        <MapScroll />
      </Heading>

      <Map />
    </>




  )
}

export default Home;
