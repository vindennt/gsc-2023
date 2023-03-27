import React from 'react';
import { Container, Stack, Flex, SimpleGrid, Heading, Text, Box, Button } from '@chakra-ui/react';
import { FaRecycle, FaBatteryHalf } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import Navbar from '../Landing/navbar'

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
};

export default Card;