import { Box, Spacer, Flex } from "@chakra-ui/react";
import Github from "../assets/github";
import { fonts } from "../utils/colors/colors";

const Navbar = () => {
  // working on navbar branch
  return (
    <Box>
      <Flex background="">
        <Flex p="4" alignItems={"center"} fontSize={"3xl"} as={"b"}>
          MailChimp
        </Flex>
        <Spacer />
        <Box p="2" bg={"#c1b8ff"} rounded={"full"}>
          <Github />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
