import { Heading } from '@chakra-ui/react'
import MapScroll from '../components/mapScroll'
import Map from './Map'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'



const Home = () => {


  return (
    <>
      <Heading>
        <MapScroll/>
      </Heading>
      <Link href="/Map">
        <Text>View Map</Text>
      </Link>

      <Map />
    </>




  )
}

export default Home;
