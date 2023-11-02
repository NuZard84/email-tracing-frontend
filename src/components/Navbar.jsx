import { Box, Spacer, Flex } from "@chakra-ui/react";
import Github from "../assets/github";

const Navbar = () => {
  return (
    <Box>
      <Flex background="red.300">
        <Box p="4">MailChimp</Box>
        <Spacer />
        <Box p="4">
          <Github />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
