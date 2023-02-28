import {  Box, Flex } from "@chakra-ui/react";
import SidePanel from "../dashboard/side-panel";

export default function DashboardLayout({ children }) {
    return (
        <Box>
            <Flex>
                <Box flexBasis='8%' flexShrink='0' minW='130px'>
                    <SidePanel />
                </Box>
                <Box flexGrow='1' flexShrink='1'>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}