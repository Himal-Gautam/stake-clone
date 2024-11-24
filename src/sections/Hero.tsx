import React from "react";
import src from "@emotion/styled";
import { Container, Box, Grid, Typography, Button, Stack } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Hero() {
  return (
    <Box sx={{ marginTop: 10 }}>
      <img
        src="src/assets/stake.BFmdy97X.svg"
        alt="Stake Logo"
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          backgroundColor: "grey.900",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={6}>
          <Box>
            <Grid container spacing={10} direction="column">
              <Grid item xs={12} md={6}>
                <Typography variant="h1" fontWeight={"bold"}>
                  An unrivalled Online Casino & Sportsbook
                </Typography>
                <Button variant="contained" size="large" sx={{ margin: 2 }}>
                  Sign up
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Or sign up with</Typography>
                <Stack direction="row" spacing={1}>
                  {[<GoogleIcon />, <FacebookIcon />, <WhatsAppIcon />].map(
                    (icon, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 50, // Set width for square
                          height: 50, // Set height for square
                          backgroundColor: "rgba(128, 128, 128, 0.3)", // Faded gray background
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {icon}
                      </Box>
                    )
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} direction="row">
            <Grid item xs={6}>
              <img
                src="src/assets/more/unauth-header-casino-en.png"
                alt="Image 1"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 15,
                  maxHeight: "100%", // Limit height to grid max height
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src="src/assets/more/unauth-header-sportsbook-en.png"
                alt="Image 2"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 15,
                  maxHeight: "100%", // Limit height to grid max height
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
