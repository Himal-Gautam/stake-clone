import React from "react";
import ExploreTemplate from "../components/ExploreTemplate";
import { Stack } from "@mui/material";

function Explore() {
  return (
    <Stack spacing={5}>
      <ExploreTemplate
        backgroundImage="src/assets/blue-gradient.U5jrOHhx.svg"
        figureImage="src/assets/more/unauth-casino-hero-banner-en.png"
        title1="Thousands of thrilling games."
        title2="Thousands of ways to win big."
        buttonText="Explore Casino"
        theme="blue"
        icons={[
          {
            label: "New Releases",
            icon: "src/assets/new-releases-icon.BWnV6JM9.svg",
          },
          {
            label: "Slots",
            icon: "src/assets/slots-icon.BM1XPlAX.svg",
          },
          {
            label: "Live Casino",
            icon: "src/assets/live-casino-icon.CZivXlrw.svg",
          },
          {
            label: "Table Games",
            icon: "src/assets/table-games-icon.CbmjvSoo.svg",
          },
        ]}
      />
      <ExploreTemplate
        backgroundImage="src/assets/green-gradient.B1xn5Pix.svg"
        figureImage="src/assets/more/unauth-casino-hero-banner-en.png"
        title1="Watch and bet on the biggest events across"
        title2="sports and beyond"
        buttonText="Explore Casino"
        theme="green"
        icons={[
          {
            label: "Sports",
            icon: "src/assets/sports-icon.BErAeDZX.svg",
          },
          {
            label: "Esports",
            icon: "src/assets/esports-icon.4WiRIL1V.svg",
          },
          {
            label: "Horse Racing",
            icon: "src/assets/horse-racing-icon.BUiIIMpx.svg",
          },
          {
            label: "Live Streams",
            icon: "src/assets/live-streams-icon.B8ObUphr.svg",
          },
        ]}
      />
    </Stack>
  );
}

export default Explore;
