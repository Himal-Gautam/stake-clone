// src/sections/ReturnToPlayerSection.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Grid,
  Stack,
} from "@mui/material";

const ReturnToPlayerSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cardDuration = 3000; // Duration for each card in milliseconds
  const videoAddress = "https://mediumrare-videos.imgix.net/bonus.webm?fm=mp4"; // Video address

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveCard((prev) => (prev + 1) % 4); // Loop through 4 cards
    }, cardDuration);
    return () => clearTimeout(timer);
  }, [activeCard]);

  return (
    <Box sx={{ padding: "10px 100px 10px 100px", margin: 10 }}>
      <Typography variant="h4" gutterBottom>
        Enjoy the Best Odds with Up to 99.5% Return-to-Player Games
      </Typography>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {/* Left Side with Cards */}
        <Grid item xs={12} md={7}>
          {[
            {
              title: "Bobus Boosts",
              subTitle:
                "Weekly boosts and monthly bonuses mean you’ll get rewarded the more you play top casino games and bet on your favourite sports.",
              icon: "src/assets/bonus-icon.BDU3QLVQ.svg",
            },
            {
              title: "Raffles & Races",
              subTitle:
                "Get in the draw to win 75K each week. Plus score big on daily races.",
              icon: "src/assets/raffle-icon.ec7wmZpx.svg",
            },
            {
              title: "Promotions",
              subTitle:
                "Make the most from our casino promotions and sports betting bonuses which are updated weekly.",
              icon: "src/assets/promotion-icon.CrYq-DC8.svg",
            },
            {
              title: "High Returns-to-Players (RTP)",
              subTitle:
                "With enhanced RTP percentages, you stand a chance to win big every time you play.",
              icon: "src/assets/return-icon.CgJwlR43.svg",
            },
          ].map((item, index) => (
            <Card
              key={index}
              sx={{
                margin: "10px 0",
                backgroundColor:
                  activeCard === index
                    ? "rgba(128, 128, 128, 0.3)"
                    : `rgba(0, 0, 0, 0)`,
                border: "none",
                color: "white",
                width: "80%",
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Box sx={{ height: "100%", alignItems: "center" }}>
                    <Typography variant="h6">{item.title}</Typography>
                    {activeCard === index && (
                      <Typography>{item.subTitle}</Typography>
                    )}
                  </Box>
                </Stack>

                {activeCard === index && (
                  <Box
                    sx={{
                      position: "relative",
                      height: "5px",
                      backgroundColor: "#e0e0e0",
                    }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={
                        (200 * (cardDuration - (Date.now() % cardDuration))) /
                        cardDuration
                      }
                      sx={{ backgroundColor: "primary" }}
                    />
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Right Side with Video */}
        <Grid item xs={12} md={5}>
          <Box
            component="video"
            src={videoAddress}
            controls
            sx={{ width: "100%", height: "100%", backgroundColor: "#000" }}
          >
            <Typography color="#fff">Video Placeholder</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReturnToPlayerSection;
