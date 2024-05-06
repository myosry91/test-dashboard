import { deepOrange } from "@mui/material/colors";

export const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          // primary: amber,
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
          background: {
            default: "#FFFFFF",
            paper: "#FFFFFF",
            
          },
        }
      : {
          // background: {
          //   default: "#493954",
          // },
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          background: {
            default: "#493954",
            paper: "#493954",
          },
          // text: {
          //   primary: "#fff",
          //   secondary: grey[500],
          // },
        }),
  },
});
