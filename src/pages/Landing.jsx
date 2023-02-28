import { Box, Flex, Image } from "@chakra-ui/react"
import Logo from '../assets/taleem.png'
import SideImage from '../assets/group.svg'
import SignIn from "../components/auth/signin"

export default function Home() {
    return (
        <Box padding='5rem' height='100vh'>
            <Flex justifyContent='space-between'>
                <Box>
                    <Image src={Logo} alt='Logo' paddingBottom='10' />
                    <SignIn />
                </Box>
                <Box>
                    <Image src={SideImage} alt='Side Image' width='40rem'  height='37rem'/>
                </Box>
            </Flex>
        </Box>
    )
}