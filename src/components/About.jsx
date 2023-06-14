import { Box, Flex, Text } from "@chakra-ui/react";

const About = () => {
    return (
        <Box>
            <Text color="white" fontSize="6xl" fontWeight="thin" cursor="default">Welcome.</Text>
            <Flex gap={8} mt={8}>
                <Box w={1} bgGradient="linear(to-b, orange.100, purple.300)"></Box>
                <Box>
                    <Text color="white" fontWeight="thin" cursor="default">
                        Hello my name is Cartenza Alief, a full stack web developer based in Bandung, Indonesia. I'm a graduated Bachelor of Science, who would like the opportunity to switch path into the web development field.
                    </Text>
                    <Text color="white" fontWeight="thin" cursor="default" mt={6}>
                        Proven experience developing website using Javascript, React JS, Express JS, and MySQL. Proficient in creating user interfaces, developing databases, troubleshooting simple and complex issues, and adding new features while also implementing Agile and Scrum.
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default About