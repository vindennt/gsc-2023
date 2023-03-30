import React from 'react';
import { Container, Stack, Flex, SimpleGrid, Heading, Text, Box, Button } from '@chakra-ui/react';
import { FaRecycle, FaBatteryHalf } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import Navbar from '../Landing/navbar'
import Card from '../Landing/card'

const Landing = () => {
	return (
		<>
			<Flex
				backgroundColor="#FFF9F2"
				minH="100vh"
				alignItems="center"
				justifyContent="center"
				pt={2}
				backgroundImage="url(/background.png)"
				backgroundRepeat="no-repeat"
				backgroundPosition="bottom"
			>
				<Container maxW="container.xl" textAlign="center">
					<Heading fontSize="5xl" fontWeight="bold" mb={3}>
						Help make our planet greener and cleaner
					</Heading>
					<Text fontSize={'lg'}>
						Locate sites to properly dispose or recycle electronics and find eco-fashion that saves the planet.
					</Text>

					<SimpleGrid mt={12} columns={2} spacing={10}>
						<Card
							subtitle="Locator"
							title="Recycle responsibly"
							content="Find the right place to responsibly dispose of your old batteries and electronics."
							icon={<FaBatteryHalf fontSize="48px" />}
							color="#189D65"
							link="/mapping"
						/>
						<Card
							subtitle="Gallery"
							title="Support sustainable fashion"
							content="The textile industry is one of the highest waste producers. Buy from sustainable clothing brands for a beautiful future."
							icon={<FaRecycle fontSize="48px" />}
							color="#F88215"
							link="/shop"
						/>
					</SimpleGrid>
				</Container>
			</Flex>
		</>
	)
}

export default Landing;
