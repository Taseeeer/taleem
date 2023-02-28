import { Box, Button, Card, Flex, Heading, Input, Select, Stack, Text, Textarea, useMediaQuery } from "@chakra-ui/react";
import { BiPointer } from 'react-icons/bi';

export default function StudentInformation() {
    const [isSmallerThan992] = useMediaQuery('(max-width: 992px)')
    return (
        <Box padding='4'>
            <Heading as='h4' size='lg'>Students</Heading>
            <Flex paddingTop='0.5rem' gap='2'>
                <Text color='secondary'>Dashboard</Text>
                <Text fontWeight='bold' color='primary'>{'> Students'}</Text>
            </Flex>
            <Card padding='0.5rem' marginTop='1rem'>
                <Text fontWeight='medium' color='primary' fontSize='1.3rem' paddingY='2'>Student Information</Text>
                <Flex gap='4' paddingY='8' justifyContent='space-around' wrap='wrap'>
                    <Input placeholder='Enter first name' name='first-name' width='400px' padding='1.5rem' />
                    <Input placeholder='Enter last name' name='last-name' width='400px' padding='1.5rem' />
                    <Input placeholder='Enter father name' name='father-name' width='400px' padding='1.5rem' />

                    <Select placeholder='Select gender' size='lg' width='400px'>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </Select>
                    <Input type='date' name='last-name' width='400px' padding='1.5rem' />
                    <Select placeholder='Select Class' size='lg' width='400px'>
                        <option value='male'>A</option>
                        <option value='female'>B</option>
                    </Select>


                    <Input placeholder='Select section' name='section' width='400px' padding='1.5rem' />
                    <Input placeholder='Enter admission id' name='admission-id' width='400px' padding='1.5rem' />
                    <Input placeholder='Enter roll number' name='roll-number' width='400px' padding='1.5rem' />

                    <Input placeholder='Enter phone number' name='section' width='400px' padding='1.5rem' />
                    <Input placeholder='Enter residence/mailing address' name='admission-id' width='400px' padding='1.5rem' />
                    <Select placeholder='Select transport' size='lg' width='400px'>
                        <option value='male'>Yes</option>
                        <option value='female'>No</option>
                    </Select>

                <Flex flexDir='column' justifyContent='space-around' padding='0.5rem' width='100%'>
                    <Textarea placeholder='Enter additional details' paddingY='2' height='100px' width='70%' borderColor='secondary'></Textarea>
                    <Stack direction='row' spacing={4} paddingY='4'>
                        <Button bg='green' border='1px' borderColor='secondary' color='white' paddingY='1.35rem' leftIcon={<BiPointer />}>Add Student</Button>
                    </Stack>
                </Flex>
                </Flex>
            </Card>
        </Box>
    )
}