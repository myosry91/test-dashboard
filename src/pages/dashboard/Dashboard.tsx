import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { HeroSection, SideBar, TopBar } from "../../components";
import { getDesignTokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: "relative",
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState<any>(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
const isSmallDevice = useMediaQuery("(max-width: 640px)");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", position: "relative" }}>
        <CssBaseline />
        {/* Header */}
        <TopBar
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          
        />
        {/* Main */}
        <Main
          style={
            {
              // color: "black",
            }
          }
          open={open}
        >
          <DrawerHeader />
          <Box sx={{ display: open && isSmallDevice ? "none" : "unset"}}>
            <HeroSection />
          </Box>
        </Main>
        {/* R ight side section */}
        <SideBar
          open={open}
          handleDrawerClose={handleDrawerClose}
          setMode={setMode}
        />
      </Box>
    </ThemeProvider>
  );
}
