import BrandCarousel from "./sections/BrandCarousel";
import Explore from "./sections/Explore";
import Hero from "./sections/Hero";
import Navigation from "./sections/Navigation";
import { Box } from "@mui/material";
import ReturnToPlayerSection from "./sections/ReturnToPlayerSection";
import Cards from "./sections/Cards";

function App() {
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      {/* <CssBaseline /> */}
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, p: 1, width: "100vw" }}>
        <Hero />
        <BrandCarousel />
        <Explore />
        <ReturnToPlayerSection />
        <Cards />
      </Box>
    </Box>
  );
}

export default App;
