import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Background from "./assets/background";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box height={"95vh"}>
      <div>
        hello this is email tracing app and you can trace the email by headrers
      </div>
      <div>
        <Background />
        <h1>hello</h1>
      </div>
    </Box>
  );
}

export default App;
