import { Box, Flex, Text } from "@chakra-ui/react";

const Projects = (props) => {
    return (
        <Flex flexDirection="column" justifyContent={["flex-start", null, "flex-end"]} h="full">
            <Text color="white" fontSize="3xl" fontWeight="thin" cursor="default">Projects</Text>
            <Box bgGradient="linear(to-br, orange.100, purple.300)" _hover={{ bgGradient: "linear(to-tl, orange.100, purple.300)" }} pt="1px" ps="1px" borderTopStartRadius={8} mt={4}>
                <Box bgColor="#242424" borderTopStartRadius={8} p={6}>
                    <Flex flexDirection="column" w="max-content" gap={1} cursor="pointer" role="group" onClick={props.data.onClickStayComfy}>
                        <Text color="white" fontWeight="thin" _groupHover={{ letterSpacing: "wider" }} transitionDuration="0.3s">Stay Comfy</Text>
                        <Box h="1px" bgGradient="linear(to-r, orange.100, purple.300)" _groupHover={{ bgGradient: "linear(to-t, orange.100, purple.300)" }}></Box>
                    </Flex>
                    <Flex mt={6} flexDirection="column" w="max-content" gap={1} cursor="pointer" role="group" onClick={props.data.onClickKTNG}>
                        <Text color="white" fontWeight="thin" _groupHover={{ letterSpacing: "wider" }} transitionDuration="0.3s">KT&G Online Shop</Text>
                        <Box h="1px" bgGradient="linear(to-r, orange.100, purple.300)" _groupHover={{ bgGradient: "linear(to-t, orange.100, purple.300)" }}></Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}

export default Projects