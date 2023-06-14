import { Box, Flex, Link, Text } from "@chakra-ui/react"

const StayComfy = () => {
    return (
        <Box>
            <Text color="white" fontSize="3xl" fontWeight="thin" cursor="default">Stay Comfy</Text>
            <Flex gap={8} mt={6}>
                <Box w={1} bgGradient="linear(to-b, orange.100, purple.300)"></Box>
                <Box>
                    <Text color="white" fontWeight="thin" cursor="default">
                        Stay Comfy is a property renting web app, an e-commerce application which is a web-based application that is used to help its users to compare lodging prices based on dates. The stack is Express JS for the backend or API's and React JS for the frontend.
                    </Text>
                    <Flex gap={4}>
                        <Link href="https://jcwdol00803.purwadhikabootcamp.com/" _hover={{ textDecoration: "none" }} isExternal>
                            <Flex mt={4} flexDirection="column" w="max-content" gap={1} role="group">
                                <Text color="white" _groupHover={{ letterSpacing: "wider" }} transitionDuration="0.3s">View Site</Text>
                                <Box h="1px" bgGradient="linear(to-r, orange.100, purple.300)" _groupHover={{ bgGradient: "linear(to-t, orange.100, purple.300)" }}></Box>
                            </Flex>
                        </Link>
                        <Link href="https://github.com/purwadhikafullstack/JCWDOL00803" _hover={{ textDecoration: "none" }} isExternal>
                            <Flex mt={4} flexDirection="column" w="max-content" gap={1} cursor="pointer" role="group">
                                <Text color="white" _groupHover={{ letterSpacing: "wider" }} transitionDuration="0.3s">Github</Text>
                                <Box h="1px" bgGradient="linear(to-r, orange.100, purple.300)" _groupHover={{ bgGradient: "linear(to-t, orange.100, purple.300)" }}></Box>
                            </Flex>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default StayComfy