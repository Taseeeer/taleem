import { useState } from "react";

import { Box, Button, Card, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import { BiBus } from 'react-icons/bi'
import { FaUserGraduate } from 'react-icons/fa';
import { AiOutlineDollarCircle, AiFillSave } from 'react-icons/ai';
import { RxDotsVertical } from 'react-icons/rx';
import DashboardCard from "./card/dashboard-card";
import DashboardModal from "./dashboard-modal";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DashboardChart from "./dashboard-chart";

const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

export default function DashboardHome() {

    const [value, onChange] = useState(() => new Date());
    const { isOpen, onOpen, onClose } = useDisclosure();

    const today = weekDays[value.getDay()-1]

    return (
        <Box padding='4'>
            <Card paddingY='0.rem'>
            <Flex marginTop='1rem' gap='12' alignItems='center' wrap='wrap'>
                <Box flexBasis='50%' flexShrink='1' flexGrow='1' minW='150px'>
                    <Flex flexWrap='wrap' gap='4'>
                        <DashboardCard title='Total Student' calc='600' icon={<FaUserGraduate />} headerColor='blue.500' /> 
                        <DashboardCard title='Transport' calc='345' icon={<BiBus />} headerColor='yellow.300' /> 
                        <DashboardCard title='Defaulters' calc='600' icon={<FaUserGraduate />} headerColor='red.400' /> 
                        <DashboardCard title='Revenue' calc='600' icon={<AiOutlineDollarCircle />} headerColor='green' /> 
                    </Flex>
                </Box>

                <Box flexShrink='1'>
                    <Card padding='1.1rem'>
                        <Flex justifyContent='space-between' alignItems='center'>
                            <Text fontWeight='bold'>Events & Activities Calendar</Text>
                            <RxDotsVertical onClick={onOpen} style={{cursor: 'pointer'}} />
                        </Flex>
                        <Calendar className='cldr' onChange={onChange} value={value} />
                    </Card>
                </Box>
            </Flex>

            <DashboardModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

            <DashboardChart />
            </Card>
        </Box>
    )
}