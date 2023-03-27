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

export default Navbar;