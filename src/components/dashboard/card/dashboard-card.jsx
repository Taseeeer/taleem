import { Box, Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function DashboardCard({ title, calc, icon, headerColor }) {
    return (
        <Box>
            <Box width='full' height='20px' bg={headerColor} borderTopRadius='8px'></Box>
                <Card paddingX='0.5rem' paddingY='2rem'>
                    <Flex alignItems='center' gap='5rem'>
                        <Stack>
                            <Heading size='md'>{title}</Heading>
                            <Heading size='md' color='blue.400'>{calc}</Heading>
                            <Flex gap='1'>
                                <Text color='green'>+0.6%</Text>
                                <Text>than last month</Text>
                            </Flex>
                        </Stack>
                        <Text fontSize='3rem'>{icon}</Text>
                    </Flex>
                </Card>
        </Box>
    )
}