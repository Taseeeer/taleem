import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";

export default function SignIn() {
    return (
        <Box>
            <Box>
                <Heading as='h2' fontSize='2rem' color='secondary' paddingY='2'>Welcome Back!</Heading>
                <Heading as='h1' fontSize='2.5rem' color='primary' paddingY='2'>Sign In to your account</Heading>
            </Box>
            <Box paddingY='4' alignItems='center'>
                <Flex alignItems='center' gap='2' border='1px' borderColor='secondary' marginY='4' paddingX='4' borderRadius='10px'>
                    <Box fontSize='2rem' color='primary'>
                        <HiOutlineMail />
                    </Box>
                    <input placeholder='Enter your email address' className='app-inputs' />
                </Flex>

                <Flex alignItems='center' gap='2' border='1px' borderColor='secondary' marginTop='4' paddingX='4' borderRadius='10px'>
                    <Box fontSize='2rem' color='primary'>
                        <HiOutlineLockClosed />
                    </Box>
                    <input placeholder='Enter your email address' className='app-inputs' />
                </Flex>

                <Flex justifyContent='flex-end' paddingY='1'>
                    <Text cursor='pointer' fontWeight='bold' color='primary'>Forgot Password?</Text>
                </Flex>

                <Button bg='blackAlpha.800' color='white' fontSize='1.5rem' paddingX='11rem' marginTop='3rem' paddingY='7'
                 _hover={{ bg: 'blackAlpha.800'}} >Sign In</Button>

            </Box>
        </Box>
    )
}