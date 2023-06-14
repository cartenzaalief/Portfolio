import { Flex, Icon, Link } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
    return (
        <Flex gap={4}>
            <Link href="mailto:cartenzaalief@gmail.com">
                <Icon as={MdOutlineEmail} color="white" boxSize={8} _hover={{ color: "grey" }} />
            </Link>
            <Link href="https://www.linkedin.com/in/cartenzaalief/" isExternal>
                <Icon as={AiFillLinkedin} color="white" boxSize={8} _hover={{ color: "grey" }} />
            </Link>
            <Link href="https://github.com/cartenzaalief" isExternal>
                <Icon as={AiFillGithub} color="white" boxSize={8} _hover={{ color: "grey" }} />
            </Link>
            <Link href="https://www.instagram.com/a.__carten/" isExternal>
                <Icon as={AiOutlineInstagram} color="white" boxSize={8} _hover={{ color: "grey" }} />
            </Link>
            <Link href="https://twitter.com/acartennn" isExternal>
                <Icon as={AiOutlineTwitter} color="white" boxSize={8} _hover={{ color: "grey" }} />
            </Link>
            <Link href="https://discordapp.com/users/1032267684500492288" isExternal>
                <Icon as={FaDiscord} color="white" boxSize={8} _hover={{ color: "grey" }} />
            </Link>
        </Flex>
    )
}

export default Contact