import { useState } from "react";
import "./App.css";
import { Box, Image } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";

function App() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Footer />
    </Box>
  );
}

export default App;
