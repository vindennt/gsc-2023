import React from "react";
import { Text, Box, Link, VStack, Heading, Container } from "@chakra-ui/react";
//import ShopCard from '@/components/shopCard';

import data from "../data/shops.json";

const parsedData = data.shop;

const ShopCard = ({ children, href, ...props }) => {
  return (
    <Link href={href} target="_blank">
      <Box
        h="300px"
        w="100%"
        borderRadius="10px"
        border="1px"
        borderColor="gray.300"
        boxShadow="lg"
        background="white"
        textAlign="left"
        p="8px"
        margin="5"
        // _hover={{
        //     boxShadow: "xl",
        //     marginTop: '-8px'
        // }}
        cursor="pointer"
        transition="all .2s"
        {...props}
      >
        {children}
      </Box>
    </Link>
  );
};

const Shop = () => {
  return (
    <>
      <Box backgroundColor="#FFF9F2">
        <Container
          minH="100vh"
          alignItems="center"
          justifyContent="center"
          pt={2}
          backgroundRepeat="no-repeat"
          backgroundPosition="bottom"
        >
          {parsedData.map((item) => (
            // <Link href={item.link}>
            <ShopCard key={item.name} href={item.link}>
              <VStack gap={1}>
                <Text>{item.name}</Text>
                <Text fontSize="md">{item.description}</Text>
                <Text fontSize="md"> Products: {item["product-type"]}</Text>
                <Link fontSize="md"> Link: {item.link}</Link>
              </VStack>
            </ShopCard>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Shop;
