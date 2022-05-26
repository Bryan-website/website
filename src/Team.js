import React from "react";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";

const Member = ({ imgUrl, name, description }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Avatar src={imgUrl ?? "images/profile.jpeg"} sx={{ height: 200, width: 200, mb: 2 }} />
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ textTransform: "uppercase", mb: 2, fontWeight: 900 }}>
        {name}
      </Typography>
      <Typography variant="h6" textAlign="center" sx={{ mb: 2 }}>
        {description}
      </Typography>
    </Box>
  );
};

const teamMembers = [
  {
    name: "Bryan Pierce (Soulflee)",
    description: "I can't draw but I can code",
  },
  {
    name: "Miska",
    description: "I can jump and run on walls and ceilings",
  },
  { name: "Soshi Abe (Sossus)", description: "I can draw" },
];

export default function Team() {
  return (
    <Box
      id="team"
      sx={{
        backgroundColor: "#96A27B",
        color: "white",
        py: 5,
      }}>
      <Typography variant="h1" textAlign="center" gutterBottom>
        The Team
      </Typography>
      <Stack
        spacing={3}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent="space-around"
        mx={3}>
        {teamMembers.map((member) => (
          <Member key={member.name} {...member} />
        ))}
      </Stack>
    </Box>
  );
}
