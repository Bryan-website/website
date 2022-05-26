import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const wrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 48,
  backgroundColor: "rgba(0, 0, 0, 0.70)",
  boxSizing: "border-box",
  padding: "4px 8px",
};

const ListText = ({ href, caption, closeDrawer }) => (
  <ListItem disablePadding>
    <ListItemButton onClick={closeDrawer} component="a" href={href}>
      <ListItemText primary={caption} />
    </ListItemButton>
  </ListItem>
);

const DropdownDrawer = ({ open, closeDrawer }) => {
  return (
    <Drawer anchor="top" open={open} onClose={closeDrawer}>
      <List sx={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.70)" }}>
        <ListText closeDrawer={closeDrawer} href="#games" caption="Games" />
        <ListText closeDrawer={closeDrawer} href="#mission" caption="Our Mission" />
        <ListText closeDrawer={closeDrawer} href="#team" caption="The Team" />
        <ListItem disablePadding>
          <Stack direction="row" pt={2} pb={1}>
            <Icon color="#7289da" icon={faDiscord} link="https://discord.gg/28c78UQZEC" />
            <Icon color="#1da1f2" icon={faTwitter} link="https://twitter.com/soulflee" />
            <Icon
              color="#ff0000"
              icon={faYoutube}
              link="https://www.youtube.com/channel/UCiZ-yjyYMGtT4YWBepumu_A/featured"
            />
          </Stack>
        </ListItem>
      </List>
    </Drawer>
  );
};

const NavLink = ({ link, children }) => {
  return (
    <Link
      className="navLink"
      color="white"
      href={link}
      variant="h6"
      underline="hover"
      sx={{ mx: 3 }}>
      {children}
    </Link>
  );
};

const Icon = ({ icon, link, dark, className, color }) => (
  <Link
    href={link}
    underline="none"
    rel="noopener"
    target="_blank"
    sx={{
      color: "white",
      "&:hover": { color: color },
    }}>
    <FontAwesomeIcon
      className={className}
      size="lg"
      icon={icon}
      style={{ padding: "0 12px", color: "inherit" }}
    />
  </Link>
);

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);

  return (
    <header style={{ position: "fixed", width: "100%", zIndex: 10 }}>
      <div style={wrapperStyles}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <DropdownDrawer open={open} closeDrawer={closeDrawer} />
        </Box>
        <Typography variant="h4" color="white">
          Makka Studios
        </Typography>
        {/* If Makka logo is wanted
         <img src="images/logo.jpeg" style={{ height: 40 }} /> */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <NavLink link="#games">Games</NavLink>
          <NavLink link="#mission">Our Mission</NavLink>
          <NavLink link="#team">The Team</NavLink>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Icon color="#7289da" icon={faDiscord} link="https://discord.gg/28c78UQZEC" />
          <Icon color="#1da1f2" icon={faTwitter} link="https://twitter.com/soulflee" />
          <Icon
            color="#ff0000"
            icon={faYoutube}
            link="https://www.youtube.com/channel/UCiZ-yjyYMGtT4YWBepumu_A/featured"
          />
        </Box>
      </div>
    </header>
  );
}
