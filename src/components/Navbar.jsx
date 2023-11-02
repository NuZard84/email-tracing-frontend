import { Box, Spacer, Flex, Text } from "@chakra-ui/react";
import Github from "../assets/github";
import { fonts } from "../utils/colors/colors";
import Simpson from "../assets/simpson";

const Navbar = () => {
  // working on navbar branch
  return (
    <Box>
      <Flex background="">
        <Flex
          p="4"
          alignItems={"center"}
          fontSize={"3xl"}
          as={"b"}
          textColor={fonts.primaryColor}
        >
          <Simpson />
          MailChimp
        </Flex>
        <Spacer />
        <Box
          p="2"
          rounded={"full"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Github />
          <Text fontSize={"md"} fontWeight={"semibold"}>
            Github Repo
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
