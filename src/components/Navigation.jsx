import { Link, Stack, Text } from "@chakra-ui/react";

const Menu = (props) => {

    return (
        <Stack spacing={4}>
            <Text color="white" fontWeight="bold" cursor="pointer" _hover={{ color: "grey" }} transition="0.3s" onClick={() => props.data.onClick("home")}>
                Home
            </Text>
            <Text color="white" fontWeight="bold" cursor="pointer" _hover={{ color: "grey" }} transition="0.3s" onClick={() => props.data.onClick("projects")}>
                Projects
            </Text>
            <Text color="white" fontWeight="bold" cursor="pointer" _hover={{ color: "grey" }} transition="0.3s" onClick={() => props.data.onClick("contact")}>
                Contact
            </Text>
            <Link href="https://drive.google.com/file/d/1wUBSWBzkcg41FRP2F_eDPHysqScXkq1K/view?usp=sharing" isExternal _hover={{ textDecoration: "none" }}>
                <Text color="white" fontWeight="bold" _hover={{ color: "grey" }} transition="0.3s">
                    Resume
                </Text>
            </Link>
        </Stack>
    )
}

export default Menu