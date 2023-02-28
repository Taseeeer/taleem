import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import { BiHomeAlt } from 'react-icons/bi';
import { FaUserGraduate } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'
import { TbDoorExit } from 'react-icons/tb'
import { BiBus } from 'react-icons/bi'
import TreeLogo from '../../assets/tree.svg'
import { Link } from "react-router-dom";

export default function SidePanel() {
    return (
        <Box borderRight='1px' borderColor='green' height='100%' paddingBottom='9rem'>
            <Center borderBottom='1px' borderColor='green' paddingY='2'>
                <Image src={TreeLogo} alt='Tree Logo' />
            </Center>
            <Flex flexDir='column' alignItems='center' gap='3rem' paddingTop='8'>
                <Box as='button' _focus={{ bgGradient: 'linear(to-r, gray.100, green)', color: 'green' }} color='secondary' _hover={{ bgGradient: 'linear(to-r, gray.100, green)'}} width='max-content' paddingX='3.1rem' paddingY='2.5' cursor='pointer' fontSize='2rem'>
                    <Link to='/dashboard/home'><BiHomeAlt /></Link>
                </Box>
                <Box as='button' _focus={{ bgGradient: 'linear(to-r, gray.100, green)', color: 'green' }} color='secondary' _hover={{ bgGradient: 'linear(to-r, gray.100, green)'}} width='max-content' paddingX='3.1rem' paddingY='2.5' cursor='pointer' fontSize='2rem'>
                    <Link to='/dashboard/allstudents'><FaUserGraduate /></Link>
                </Box>
                <Box as='button' _focus={{ bgGradient: 'linear(to-r, gray.100, green)', color: 'green' }} color='secondary' _hover={{ bgGradient: 'linear(to-r, gray.100, green)'}} width='max-content' paddingX='3.1rem' paddingY='2.5' cursor='pointer' fontSize='2rem'>
                    
                    <Link to='/dashboard/studentsinformation'><IoIosPeople /></Link>
                </Box>
                <Box as='button' _focus={{ bgGradient: 'linear(to-r, gray.100, green)', color: 'green' }} color='secondary' _hover={{ bgGradient: 'linear(to-r, gray.100, green)'}} width='max-content' paddingX='3.1rem' paddingY='2.5' cursor='pointer' fontSize='2rem'><BiBus /></Box>
                <Box as='button' _focus={{ bgGradient: 'linear(to-r, gray.100, green)', color: 'green' }} color='secondary' _hover={{ bgGradient: 'linear(to-r, gray.100, green)'}} width='max-content' paddingX='3.1rem' paddingY='2.5' cursor='pointer' fontSize='2rem'><FiSettings /></Box>
                <Box as='button' _focus={{ bgGradient: 'linear(to-r, gray.100, green)', color: 'green' }} color='secondary' _hover={{ bgGradient: 'linear(to-r, gray.100, green)'}} width='max-content' paddingX='3.1rem' paddingY='2.5' cursor='pointer' fontSize='2rem'><TbDoorExit /></Box>
            </Flex>
        </Box>
    )
}