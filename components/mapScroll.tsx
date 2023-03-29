import { useEffect } from 'react';
import { Stack, HStack, VStack, Box, Text, Container, Link, Icon } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { FaMapMarkerAlt } from 'react-icons/fa';


import data from '../data/vancouverData.json';

const ScrollItem = ({ children, ...props }) => {
  return (
    <Container
      p={3}
      border="1px solid black"
      {...props}
    >
      {children}
    </Container>
  );
};


const MapScroll = () => {
  const [markers, setMarkers] = useState([]);

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


  const parsedData = data.response.collection;


  return (
    <Box height="100vh" width="100%" p={4}>
      <Stack>
        {parsedData.map((item) => (
          <ScrollItem key={item.id} onClick={() => handleOnClick(item.marker)}>
            <Text fontWeight="bold">{item.name}</Text>
            <Text>{item.address1}</Text>
            <Text>{item.address2 ? item.address2 : ""}</Text>
            <Link href={item.url} isExternal>
              {item.url}
            </Link>
          </ScrollItem>
        ))}
      </Stack>
    </Box>
  )
}


export default MapScroll;
