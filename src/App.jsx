import { useState } from "react";
import "./App.css";
import { Box, Image } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Image src={import.meta.env.VITE_MAIL_IMG_LINK} boxSize={"500px"} />
    </Box>
  );
}

export default App;
