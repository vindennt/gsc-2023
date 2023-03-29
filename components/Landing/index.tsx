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
						It's what's on the inside that counts.
					</Heading>
					<Text>
						Geo location app for electronic recycling, batteries, and can. Find and buy sustainable consumables.
					</Text>

					<SimpleGrid mt={12} columns={2} spacing={10}>
						<Card
							subtitle="Recycle"
							title="What do you want to recycle"
							content="Geo location app for electronic recycling, batteries, and can. Find and buy sustainable consumables."
							icon={<FaBatteryHalf fontSize="48px" />}
							color="#189D65"
						/>
						<Card
							subtitle="Buy sustainable"
							title="What do you want to recycle"
							content="Geo location app for electronic recycling, batteries, and can. Find and buy sustainable consumables."
							icon={<FaRecycle fontSize="48px" />}
							color="#F88215"
						/>
					</SimpleGrid>
				</Container>
			</Flex>
		</>
	)
}

export default Landing;
