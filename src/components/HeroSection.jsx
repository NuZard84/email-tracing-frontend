import { Box, Heading, Image, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"col"}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box min={"75%"}>
          <Heading> Email Tracking Made Easy</Heading>
          <Text>
            Track emails and extract valuable details from headers with our
            powerful email tracking web app.
          </Text>
        </Box>
        <Image src={import.meta.env.VITE_MAIL_IMG_LINK} boxSize={"400px"} />
      </Box>
    </Box>
  );
};

export default HeroSection;
