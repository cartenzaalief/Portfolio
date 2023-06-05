import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
    return (
        <Box>
            <Flex gap={4} alignItems="flex-end">
                <Text color="white" fontWeight="bold">May, 2023</Text>
                <Text color="white" fontSize="6xl" fontWeight="hairline">Stay Comfy</Text>
                <Flex flexDirection="column" gap={2}>
                    <Link href="https://jcwdol00803.purwadhikabootcamp.com/" isExternal>
                        <Icon as={FiExternalLink} color="white" boxSize={6} _hover={{ color: "grey" }} transition="0.3s" />
                    </Link>
                    <Link href="https://github.com/purwadhikafullstack/JCWDOL00803" isExternal>
                        <Icon as={AiFillGithub} color="white" boxSize={6} _hover={{ color: "grey" }} transition="0.3s" />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Projects