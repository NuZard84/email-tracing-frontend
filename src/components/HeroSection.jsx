import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { fonts } from "../utils/colors/colors";

const HeroSection = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"full"}
      >
        <Box display={"flex"} flexDir={"column"} width={"50%"} gap={4}>
          <Heading
            fontSize={"70px"}
            lineHeight={1.1}
            textColor={fonts.primaryColor}
          >
            Email Tracking Made Easy
          </Heading>
          <Text fontSize={"lg"} textColor={fonts.primaryColor}>
            Track emails and extract valuable details from headers with our
            powerful email tracking web app.
          </Text>
          <Button
            transition={"all 0.2s ease-in-out"}
            transitionDuration={"300ms"}
            _hover={{
              backgroundColor: fonts.tertiaryColor,
              textColor: fonts.primaryColor,
              border: "1px solid",
              boxShadow: "xl",
            }}
            _active={{
              transform: "translateY(5px)",
            }}
            width={"40%"}
            backgroundColor={fonts.primaryColor}
            textColor={fonts.secondaryColor}
            padding={4}
          >
            Get Start
          </Button>
        </Box>
        <Image src={import.meta.env.VITE_MAIL_IMG_LINK} boxSize={"600px"} />
      </Box>
    </Box>
  );
};

export default HeroSection;
