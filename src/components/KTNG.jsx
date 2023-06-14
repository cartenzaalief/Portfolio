import { Box, Flex, Link, Text } from "@chakra-ui/react"

const KTNG = () => {
    return (
        <Box>
            <Text color="white" fontSize="3xl" fontWeight="thin" cursor="default">KT&G Online Shop</Text>
            <Flex gap={8} mt={6}>
                <Box w={1} bgGradient="linear(to-b, orange.100, purple.300)"></Box>
                <Box>
                    <Text color="white" fontWeight="thin" cursor="default">
                        This is an online shop for cigarrete products, currently only frontend for landing and cart page. I created this with React JS and Chakra UI component library.
                    </Text>
                    <Flex gap={4}>
                        <Link href="https://ktng-online-shop.netlify.app/" _hover={{ textDecoration: "none" }} isExternal>
                            <Flex mt={4} flexDirection="column" w="max-content" gap={1} cursor="pointer" role="group">
                                <Text color="white" _groupHover={{ letterSpacing: "wider" }} transitionDuration="0.3s">View Site</Text>
                                <Box h="1px" bgGradient="linear(to-r, orange.100, purple.300)" _groupHover={{ bgGradient: "linear(to-t, orange.100, purple.300)" }}></Box>
                            </Flex>
                        </Link>
                        <Link href="https://github.com/cartenzaalief/ktng-online-shop" _hover={{ textDecoration: "none" }} isExternal>
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

export default KTNG