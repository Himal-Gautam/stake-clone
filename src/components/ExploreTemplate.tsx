// src/components/ExploreTemplate.tsx
import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import src from "@emotion/styled";

interface ExploreTemplateProps {
  backgroundImage: string;
  figureImage: string;
  title1: string;
  title2: string;
  buttonText: string;
  theme: string;
  icons: { label: string; icon: string }[];
}

function ExploreTemplate({
  backgroundImage,
  figureImage,
  title1,
  title2,
  buttonText,
  icons,
  theme,
}: ExploreTemplateProps) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        padding: "20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "400px", // Adjust height as needed
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component="h1"
          color="white"
          fontWeight={"bold"}
        >
          {title1}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="white"
          fontWeight={"bold"}
        >
          {title2}
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 2,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: 2,
            margin: 2,
          }}
          direction="row"
        >
          {icons.map((item, index) => (
            <Grid item xs={3} key={index} textAlign="center">
              <Stack direction="row" spacing={2}>
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{ width: "40px", height: "40px" }}
                />
                <Box sx={{ height: "100%", alignItems: "center" }}>
                  <Typography variant="body1" color="white" textAlign={"left"}>
                    {item.label}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color={theme == "blue" ? "primary" : "success"}
          sx={{ marginTop: 2 }}
          size="large"
        >
          {buttonText}
        </Button>
      </Box>
      <img
        src={figureImage}
        alt="Human Figure"
        style={{
          width: "100%", // Use 100% to fill the container
          maxWidth: "382px",
          maxHeight: "400px",
          objectFit: "cover", // Corrected camelCase
          aspectRatio: "0.955 / 1", // Corrected camelCase
        }}
      />
    </Box>
  );
}

export default ExploreTemplate;
