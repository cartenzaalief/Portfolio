import { Box, Flex, Icon } from "@chakra-ui/react";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMysql, SiMongodb } from "react-icons/si"

const Skill = () => {
    return (
        <Box>
            <Flex gap={4}>
                <Icon as={SiJavascript} color="white" boxSize={8} />
                <Icon as={SiHtml5} color="white" boxSize={8} />
                <Icon as={SiCss3} color="white" boxSize={8} />
                <Icon as={SiReact} color="white" boxSize={8} />
                <Icon as={SiNodedotjs} color="white" boxSize={8} />
                <Icon as={SiMysql} color="white" boxSize={8} />
                <Icon as={SiMongodb} color="white" boxSize={8} />
            </Flex>
        </Box >
    )
}

export default Skill