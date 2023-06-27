import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import About from "../components/About";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
import Projects from "../components/Projects";
import Logo from "../assets/images/logo.png"
import StayComfy from "../components/StayComfy";
import { useState } from "react";

const Home = () => {
    const [content, setContent] = useState("Home")

    const showContent = () => {
        switch (content) {
            case "Home":
                return (
                    <About />
                )
            case "StayComfy":
                return (
                    <StayComfy />
                )
            default:
                return (
                    <About />
                )
        }
    }

    return (
        <Flex minH="100vh" w="100vw" bgColor="#242424" justifyContent="center">
            <Box minH="100vh" maxW="1280px" bgGradient="linear(to-t, orange.100, purple.300)" _hover={{ bgGradient: "linear(to-b, orange.100, purple.300)" }} pt={4} ps={4}>
                <Box h="full" w="full" p={8} bgColor="#242424">
                    <Flex flexDirection={["column", null, "row"]} gap={[8, null, 0]} justifyContent="space-between" h="10%">
                        <Image src={Logo} boxSize={10} cursor="pointer" _hover={{ transform: "scale(1.2)" }} transitionDuration="0.2s" onClick={() => setContent("Home")} />
                        <Contact />
                    </Flex>
                    <Grid templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]} h={["", null, "80%"]} gap={[8, null, 24]}>
                        <GridItem colSpan={[1, null, 2]} mt={16}>
                            {showContent()}
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Projects data={{ onClickStayComfy: () => setContent("StayComfy") }} />
                        </GridItem>
                    </Grid>
                    <Flex alignItems="flex-end" h="10%">
                        <Skill />
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}

export default Home