import { useEffect } from 'react';
import { Stack, HStack, VStack, Box, Text, Container, Link, Icon, Button } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

import data from '../data/lowerMainlandData.json';
import json from '../data/lowerMainlandData.json';

const ScrollItem = ({ children, ...props }) => {
  return (
    <Container backgroundColor="#FFF9F2"
      p={3}
      border="1px solid black"
      {...props}
    >
      {children}
    </Container>
  );
};


const MapScroll = () => {
  const [markers, setMarkers] = useState([]);0

  const [stuff, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);


  let parsedData = isChecked
  ? json.response.collection.filter(item => item.city = "Vancouver")
  : json.response.collection.filter(item => item.city = "Richmond");

  useEffect(() => {
    // Fetch data from an API or perform some other action to update the data
    parsedData = isChecked
  ? json.response.collection.filter(item => item.city = "Vancouver")
  : json.response.collection.filter(item => item.city = "Richmond");

    setData(data);
  }, [forceUpdate]);



  useEffect(() => {
    // Initialize the L object and the custom icon here
    const L = require('leaflet');
    const customIcon = L.icon({
      iconUrl: 'path/to/your/icon.png',
      iconSize: [30, 30]
    });

    // Parse the data and create the markers
    const parsedData = data.response.collection;
    const newMarkers = parsedData.map(function (item) {
      const lat = parseFloat(item.latitude);
      const lng = parseFloat(item.longitude);
      return L.marker([lat, lng], { icon: customIcon }).bindPopup(item.name);
    });

    // Set the markers in state
    setMarkers(newMarkers);
  }, []);


  // const handleOnClick = (marker: any) => {
  //   if (marker && typeof marker.openPopup === 'function') {
  //     marker.openPopup();
  //   }

  // function handleOnClick(parsed: any) {
  //   if (parsed && typeof parsed.openPopup === 'function') {
  //     parsed.openPopup();
  //   }
  // };

  function handleOnClick(parsed: any) {
    console.log("parsed:", parsed);
    if (parsed) {
      console.log("openPopUp function:", parsed.openPopUp);
      parsed.openPopUp();
    }
  }


  const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    function handleChange() {
      setIsChecked(prevState => !prevState);
    }
  
    return (
      <Box>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleChange} 
        />
        {" Vancouver"}
      </Box>
    );
  };

  // const googleMapLink = `http://www.google.com/maps/place/${item.latitude},${item.longitude}`


  return (
    <Box height="100vh" width="35vh" p={4}>
      <Stack>
        <Text>Filters</Text>
        <Checkbox/>
        {parsedData.map((item) => (
          <ScrollItem key={item.id} onClick={() => handleOnClick(item.marker)}>
            <Text fontWeight="bold">{item.name}</Text>
            <Text fontSize="sm">{item.address1}</Text>
            <Text fontSize="sm">{item.address2 ? item.address2 : ""}</Text>
            <Text fontSize="sm">{item.city}, {item.prvince} {item.postalcode}</Text>
            <Link color="blue.500" fontSize="sm" href={item.url} isExternal>
              {item.url}
            </Link>

            <Box>
              <Link href={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`}
                target="_blank">
                <Button leftIcon={<FaDirections />} colorScheme="green" aria-label="directions" variant="outline" mr={4}>
                  Get directions
                </Button>
              </Link>
            </Box>
          </ScrollItem>
        ))}
      </Stack>
    </Box>
  )
}


export default MapScroll;
