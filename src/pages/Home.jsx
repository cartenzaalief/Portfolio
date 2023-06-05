import { Box, Flex, Grid } from "@chakra-ui/react";
import Background from "../assets/images/bg.gif";
import Name from "../components/Name";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Projects from "../components/Projects";
import { useState } from "react";
import Contact from "../components/Contact";

const Home = () => {
    const [navigation, setNavigation] = useState("home");

    const showContent = () => {
        if (navigation === "home") {
            return (
                <About />
            )
        } else if (navigation === "projects") {
            return (
                <Projects />
            )
        } else if (navigation === "contact") {
            return (
                <Contact />
            )
        }
    }

    return (
        <Box h="100vh" w="100vw" bgImage={Background} bgPosition="center" p={8}>
            <Box h="full" w="full" border="2px" borderColor="white" p={8}>
                <Grid h="full" templateColumns="repeat(2, 1fr)">
                    <Flex h="full" flexDirection="column" justifyContent="space-between">
                        <Name />
                        <Navigation data={{ onClick: (value) => setNavigation(value) }} />
                    </Flex>
                    <Flex h="full" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
                        {showContent()}
                    </Flex>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home