import { Box, Typography, Button, Container, Stack } from "@mui/material";
import CardStack from "../components/CardStack";
import React from "react";

function Cards() {
  return (
    <Box
      sx={{
        margin: 10,
        padding: "10px",
        // bgcolor: "#1C2833",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        sx={{ width: "100%", padding: "10px" }}
      >
        {/* Left side - Card Stack */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardStack />
        </Box>

        {/* Right side - Content */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            textAlign: { xs: "center", md: "left" },
            padding: "10px",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Peace of mind across multiple crypto and local currencies
          </Typography>

          <Typography
            sx={{
              color: "grey.300",
              mb: 4,
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Experience safe deposits and instant withdrawals across 20
            cryptocurrencies and 7 local currencies. All with no minimums,
            flexible payment methods and a secure online vault.
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#1976d2",
              px: 4,
              py: 1.5,
              borderRadius: 1,
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                bgcolor: "#1565c0",
              },
            }}
          >
            Learn more
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default Cards;
