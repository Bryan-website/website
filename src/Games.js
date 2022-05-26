import React from "react";

import {
  Box,
  Button,
  IconButton,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";
import ArrowBack from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// imgUrl: relative path from root of website folder
// altText: for if the image doesn't load, and for screen readers
// gameTitle: what goes in big bold letters
// description: smaller text under title
// playLink: if there is a link to the app, add it as a parameter,
// and a button will appear with it, otherwise nothing will appear
const Game = ({ imgUrl, altText, gameTitle, description, playLink }) => {
  const theme = useTheme();
  const mdQuery = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" py={3}>
      <Box
        boxSizing="border-box"
        sx={{
          flex: { xs: "100%", md: "50%" },
          maxWidth: 600,
          pb: { xs: 2, md: 0 },
          px: 2,
        }}>
        <img
          src={imgUrl}
          alt={altText}
          style={{ width: "100%", height: "auto", borderRadius: 10 }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
        justifyContent="center"
        sx={{ flex: { xs: "100%", md: "50%" }, px: 1 }}
        boxSizing="border-box">
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          style={{ textTransform: "uppercase" }}>
          {gameTitle}
        </Typography>
        <Typography variant="h6" textAlign="center">
          {description}
        </Typography>
        {playLink && (
          <Button
            color="secondary"
            variant="contained"
            href={playLink}
            size="large"
            sx={{
              mt: 3,
              backgroundColor: "#D3174A",
              color: "white",
              fontSize: 18,
              fontWeight: 600,
            }}>
            Play Now
          </Button>
        )}
      </Box>
    </Box>
  );
};

// Edit list here to add new games, be sure to add images/ filepath prefix to all images
const gameList = [
  {
    imgUrl: "images/game_1.png",
    altText: "Gameplay image of Miska's Cave",
    gameTitle: "Miska's Cave",
    description:
      "Miska's Cave is an action-centric side scroller with strategic components and animated with pixel art. Play as Miska, the inexperienced rabbit who wishes to conquer the cave.",
    playLink: "https://store.steampowered.com/app/1517830/Miskas_Cave/",
  },
  {
    imgUrl: "images/hme_bg_wb.jpeg",
    altText: "Placeholder",
    gameTitle: "Miska Mania",
    description: "This is a placeholder description",
  },
];

export default function Games() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnDotsHover: true,
    autoplaySpeed: 5000,
  };
  return (
    <Box id="games" sx={{ py: 5, backgroundColor: "#FF808F", color: "white" }}>
      <Typography variant="h1" textAlign="center">
        Games
      </Typography>
      <Container>
        <Slider {...carouselSettings}>
          {gameList.map((game) => (
            <Game key={game.gameTitle} {...game} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
