import { Box, Button, Card, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { BiSearch, BiFilterAlt,BiChevronDown, BiPlus } from 'react-icons/bi';
import { useLocation } from "react-router-dom";
import StudentsTable from "./students-table";

export default function AllStudentsHome() {
    const location = useLocation();
    return (
        <Box padding='4'>
            {/* header */}
            <Heading as='h4' size='lg'>Students</Heading>
            <Flex paddingTop='0.5rem' gap='2'>
                <Text color='secondary'>Dashboard</Text>
                <Text fontWeight='bold' color='primary'>{'> Students'}</Text>
            </Flex>
            <Card padding='0.5rem'>
            <Flex alignItems='center' justifyContent='space-between'> 
                <Flex alignItems='center' gap='4'>
                    <Text fontWeight='medium' color='primary' fontSize='1.3rem'>All Students Data</Text>
                    <Flex alignItems='center' border='1px' borderColor='secondary' marginY='4' paddingX='4' borderRadius='8px'>
                        <Box fontSize='2rem' color='primary'>
                            <BiSearch style={{ fontSize: '1.5rem'}} />
                        </Box>
                        <input placeholder='Enter your email address' style={{ padding: '0.6rem 1rem', outline: 'none' }} />
                    </Flex>
                    <Stack direction='row' spacing={4}>
                        <Button bg='none' border='1px' borderColor='secondary' color='primary' paddingY='1.35rem' leftIcon={<BiFilterAlt />} rightIcon={<BiChevronDown />} >Filters</Button>
                    </Stack>
                </Flex>
                    <Stack direction='row' spacing={4}>
                        <Button bg='green' border='1px' borderColor='secondary' color='white' paddingY='1.35rem' leftIcon={<BiPlus />}>Add Student</Button>
                    </Stack>
            </Flex>


            {/* table */}
            <StudentsTable />
            </Card>
        </Box>
    )
}