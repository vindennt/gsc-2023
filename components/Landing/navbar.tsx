import React from 'react';
import { useState } from 'react'
import { Container, Stack, Flex, SimpleGrid, Heading, Text, Box, Button, Input } from '@chakra-ui/react';
import { FaRecycle, FaBatteryHalf } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { AiOutlineShopping, AiOutlineSearch, AiOutlineExclamationCircle } from 'react-icons/ai';
import Link from 'next/link';

const NavLink = ({
    title,
    icon,
    onClick,
    link
}: {
    title: string,
    icon: React.ReactNode
    onClick?: () => void;
    link: string;
}) => {
    return (
        <Stack direction="row" alignItems="center">
            <Box
                as="button"
                onClick={onClick}
                display="flex"
            >
            </Box>
            <Link href={link} >
                <Button leftIcon={icon}
                
                >
                    {title}
                </Button>
            </Link>
        </Stack>
    )
}
const Navbar = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleSearchClick = () => {
        setIsSearchVisible(true);
    };

    const handleSearchClose = () => {
        setIsSearchVisible(false);
    };


    return (
        <Container
            maxW="container.lg"
            display="flex"
            justifyContent="space-between"
            backgroundColor="#FFF9F2"
            marginLeft={7}
        >
            <Link href="/"
            >
                <Box>
                    Logo
                </Box>
            </Link>

            <Stack direction="row" display="flex" alignSelf="right" justify="flex-end" spacing={12} marginRight={7}>
                <NavLink title="Mission" icon={<AiOutlineExclamationCircle />} link="/mission" />
                <NavLink title="Shop" icon={<AiOutlineShopping />} link="/shop"/>
                <NavLink title="Search" icon={<AiOutlineSearch />} link="" onClick={handleSearchClick} />
            </Stack>

            {isSearchVisible && (
                <Box position="absolute" top="100%" right={0} p={4} backgroundColor="white" boxShadow="md">
                    <input type="text" placeholder="Search..." />
                    <button onClick={handleSearchClose}>Close</button>
                </Box>
            )}


        </Container>
    )
}

export default Navbar;