import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Tfoot, Box, Flex, Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { tableData } from '../../../data/tableData';
import { BiUserCircle, BiEditAlt } from 'react-icons/bi';
import AllStudentsModal from "./allstudents-modal";

export default function StudentsTable() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSmallerThan1015] = useMediaQuery('(max-width: 1015px)')

    return (
    <Box paddingTop='1rem'>
    <TableContainer borderRadius='7px'>
        <Table size={`${ isSmallerThan1015 ? 'sm' : 'md'}`} variant='striped' colorScheme='teal'>
            <Thead>
            <Tr bg='gray.200'>
                <Th padding='1rem' color='primary'>Admission#</Th>
                <Th padding='1rem' color='primary'>Class</Th>
                <Th padding='1rem' color='primary'>Name</Th>
                <Th padding='1rem' color='primary'>Transcript</Th>
                <Th padding='1rem' color='primary'>Fee</Th>
                <Th padding='1rem' color='primary'>Transport Fee</Th>
                <Th padding='1rem' color='primary'>Paid Till</Th>
                <Th padding='1rem' color='primary'>Actions</Th>
            </Tr>
            </Thead>
            <Tbody>
                { tableData.map((table, index) => (
                    <Tr key={index}>
                        <Td padding='1rem'>{table.admissionNo}</Td>
                        <Td>{table.class}</Td>
                        <Td>{table.name}</Td>
                        <Td>{table.transport}</Td>
                        <Td>{table.fees}</Td>
                        <Td>{table.transportFee}</Td>
                        <Td>{table.paidTill}</Td>
                        <Td>
                            <Flex gap='4' cursor='pointer' fontSize='1.5rem'>
                                <BiUserCircle />
                                <BiEditAlt onClick={onOpen} />
                            </Flex>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContainer>
    <Flex justifyContent='flex-end' paddingY='1rem' gap='2'>
        <Button>Previous</Button>
        <Button>1</Button>
        <Button>Next</Button>
    </Flex>

    <AllStudentsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
    )
}