import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Mission() {
  return (
    <Box
      id="mission"
      sx={{
        backgroundImage: { xs: "url('images/about_bg_tb.png')", md: "url('images/mission.png')" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "80% 60%",
        color: "white",
        // minHeight: 500,
        pt: 5,
        pb: { xs: 15, md: 5 },
      }}>
      <Typography variant="h1" textAlign="center" gutterBottom>
        Our mission
      </Typography>
      <Container maxWidth="sm">
        <Typography variant="h6" textAlign="center">
          We wish to develop and publish enjoyable games despite consisting of two inexperienced
          developers without any formal training, knowledge, or funding.
          <br />
          <br />
          With blindfolds over our eyes, we are not fazed by any challenges, no matter the
          difficulty.
        </Typography>
      </Container>
    </Box>
  );
}
