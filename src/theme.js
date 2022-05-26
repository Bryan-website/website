import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      color: "white",
      textTransform: "uppercase",
      fontWeight: 700,
    },
    h2: {
      color: "white",
    },
  },
});

export default responsiveFontSizes(theme);
