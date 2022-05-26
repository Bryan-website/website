import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Stack backgroundColor="grey.700" direction="row" justifyContent="space-around" color="white">
      <Link
        href="https://www.freeprivacypolicy.com/live/2c6ee62d-2c49-44f3-971f-cb87928fb9c3"
        target="_blank"
        variant="body1"
        color="primary.contrastText">
        Privacy Policy
      </Link>
      <Typography variant="body1">Website by Ya Boi John</Typography>
    </Stack>
  );
}
