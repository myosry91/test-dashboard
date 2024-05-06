import React, { FC, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import { IoHomeOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiNewspaperLight } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { TbBuildingWarehouse } from "react-icons/tb";
import { TbReport } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  useTheme
} from "@mui/material";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkLightContext from "../context/DarkLightContext";

interface SideBarProps {
  open: boolean;
  handleDrawerClose: () => void;
  setMode:any
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const drawerWidth: number = 240;

const SideBar: FC<SideBarProps> = ({ open, handleDrawerClose, setMode }) => {
  // change lang
  const [t, i18n] = useTranslation("global");
  const { language, setLanguage } = useContext(LanguageContext);

  const changeLanguage = () => {
    setLanguage(language == "en" ? "ar" : "en");
  };

  // change theme
  const theme = useTheme();

  const changeTheme = () => {
    localStorage.setItem("currentMode", theme.palette.mode === "dark"? "light":"dark")
    setMode((prevMode: any) =>
      prevMode === "light" ? "dark" : "light"
    );
    console.log("clicked")
    // setDarkMode(language == "en" ? "ar" : "en");
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            {theme.palette.mode === "light" ? (
              <IconButton onClick={changeTheme} color="default">
                <LightModeOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton onClick={changeTheme} color="default">
                <DarkModeOutlinedIcon />
              </IconButton>
            )}

            <Box style={{ fontWeight: "bold" }}>
              <button className="sign-button" onClick={changeLanguage}>
                {language == "en" ? "العربية" : "English"}
              </button>
            </Box>
          </Stack>
        </DrawerHeader>
        <Divider />
        <List
          style={{
            // backgroundColor: "default",
            // color: "black",
            fontWeight: "bold",
          }}
        >
          <div className="">
            <div className="left-link mt-10">
              <p className="w-[30%]">{t("leftmenu.home")}</p>
              <IoHomeOutline />
            </div>
            <div className="left-link relative">
              <RiArrowDropDownLine size={20} className="absolute left-3" />
              <p className="w-[30%]">{t("leftmenu.processes")}</p>
              <PiNewspaperLight />
            </div>
            <div className="left-link relative">
              <RiArrowDropDownLine size={20} className="absolute left-3" />
              <p className="w-[30%]">{t("leftmenu.sectors")}</p>
              <CiMenuKebab />
            </div>
            <div className="left-link relative">
              <RiArrowDropDownLine size={20} className="absolute left-3" />
              <p className="w-[30%]">{t("leftmenu.units")}</p>
              <TbBuildingWarehouse />
            </div>
            <div className="left-link relative">
              <RiArrowDropDownLine size={20} className="absolute left-3" />
              <p className="w-[30%]">{t("leftmenu.reports")}</p>
              <TbReport />
            </div>
            <div className="left-link relative">
              <RiArrowDropDownLine size={20} className="absolute left-3" />
              <p className="w-[30%]">{t("leftmenu.setting")}</p>
              <CiSettings />
            </div>
          </div>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SideBar;
