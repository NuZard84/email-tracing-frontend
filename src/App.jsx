import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Image } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box height={"95vh"}>
      <h1>The end of fucking world.</h1>
      <div>
        hello this is email tracing app and you can trace the email by headrers
      </div>
      <div>
        <h1>hello</h1>
        <Image src={import.meta.env.VITE_MAIL_IMG_LINK} boxSize={"500px"} />
      </div>
    </Box>
  );
}

export default App;
