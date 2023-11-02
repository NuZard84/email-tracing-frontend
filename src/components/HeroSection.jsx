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
        justifyContent={"center"}
        alignItems={"center"}
        width={"full"}
        gap={4}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"42%"}
          gap={4}
        >
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
            alignSelf={"flex-start"}
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
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image src={import.meta.env.VITE_MAIL_IMG_LINK} boxSize={"675px"} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
