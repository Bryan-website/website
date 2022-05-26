import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Background = styled("div")(({ image }) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100vh",
  minHeight: 600,
}));

export default function Section({ title, image, children }) {
  return (
    <Background image={image}>
      <Box display="flex" height="100%" justifyContent="center" alignItems="center">
        <Typography variant="h1" sx={{ fontWeight: 900 }}>
          {title}
        </Typography>
        {children}
      </Box>
    </Background>
  );
}
