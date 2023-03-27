import React from 'react';
import { Container, Stack, Flex, SimpleGrid, Heading, Text, Box, Button } from '@chakra-ui/react';
import { FaRecycle, FaBatteryHalf } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';


const NavLink = ({
	title,
	icon,
}: {
	title: string,
	icon: React.ReactNode
}) => {
	return (
		<Stack direction="row" alignItems="center">
			{icon}
			<Text>
				{title}
			</Text>
		</Stack>
	)
}
const Navbar = () => {
	return (
		<Stack
			position="absolute"
			w="100%"
			backgroundColor="#FFF6D6"
		>
			<Container maxW="container.xl" py={6} display="flex" justifyContent="space-between">
				<Box>
					Logo
				</Box>

				<Stack direction="row" spacing={12}>
					<NavLink title="Shop" icon={<AiOutlineShopping />} />
					<NavLink title="Search" icon={<AiOutlineSearch />} />
				</Stack>
			</Container>
		</Stack>
	)
}


const Card = ({
	color,
	icon,
	subtitle,
	title,
	content,
}: {
	title: string,
	subtitle: string,
	content: string,
	color: string,
	icon: React.ReactNode
}) => {
	return (
		<Box
			h="300px"
			borderRadius="10px"
			border="1px"
			borderColor="gray.300"
			boxShadow="lg"
			background="white"
			textAlign="left"
			p={8}
			_hover={{
				boxShadow: "xl",
				marginTop: '-8px'
			}}
			cursor="pointer"
			transition="all .2s"
		>
			<Link href="/mapping">
				<Stack gap={1}>
					{icon}
					<Text color={color} fontWeight="bold">
						{subtitle}
					</Text>
					<Heading fontSize="2xl">
						{title}
					</Heading>
					<Text>
						{content}
					</Text>

					<Stack direction="row" alignItems="center" pt={2}>

						<Text fontWeight="bold">
							Get started
						</Text>
						<FiArrowRight fontWeight="bold" />
					</Stack>
				</Stack>
			</Link>
		</Box>
	)
}

const Landing = () => {
	return (
		<>
			<Navbar />
			<Flex
				backgroundColor="#FFF6D6"
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
