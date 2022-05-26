import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Background = styled("div")(() => ({
  backgroundImage: "url('images/home_bg_wb.jpeg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100vh",
}));

export default function Main() {
  return (
    <Background>
      <Box display="flex" height="100%" justifyContent="center" alignItems="center">
        <Box px={2} maxWidth={400}>
          <img src="images/makka_white.png" width="100%" height="auto" />
        </Box>
      </Box>
    </Background>
  );
}
