import { IconButton, Stack, Toolbar, Typography, styled } from "@mui/material";
import React, { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import LanguageContext from "../context/LanguageContext";
import DropMenuContext from "../context/DarkLightContext";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth: number = 240;

const AppBar: FC<AppBarProps> = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));
const TobBar: FC<{ open: boolean; handleDrawerOpen: () => void }> = ({
  open,
  handleDrawerOpen,
  isSmallDevice,
}) => {
  // change lang
  const { language, setLanguage } = useContext(LanguageContext);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  const changeLanguage = () => {
    setLanguage(language == "en" ? "ar" : "en");
  };

  // Hamburger Menu state
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <AppBar
      style={{
        // backgroundColor: "primary",
        // color: "black",
        // backgroundColor: "transparent",
        fontWeight: "bold",
        boxShadow: "none",
      }}
      position="fixed"
      open={open}
    >
      <Toolbar>
        <Stack sx={{ flexGrow: 1 }} component="div">
          <div className=" flex items-end justify-between py-2 font-bold relative">
            <div className="flex-1 flex gap-3 items-center max-md:justify-center">
              <button className="sign-button max-lg:hidden">
                {t("logout")}
              </button>
              <FaRegUser className="link-hover max-lg:m-3 max-lg:w-5 max-lg:h-5" />
            </div>

            <div className="flex-3 w-full">
              {/* Hamburger Menu Icon */}
              <div
                className="lg:hidden  relative z-10 mb-2 ml-4 cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                <IoMenu size={24} />
              </div>
              {/* Navigation Links */}
              {showMenu && (
                <ul className="absolute w-full flex flex-col items-center top-[70px] right-3  max-w-md max-sm:left-0 bg-white text-black shadow-lg p-4 z-50 lg:hidden">
                  <li className="link-hover cursor-pointer m-3 ">
                    {t("menu.wallet")}
                  </li>
                  <li className="link-hover cursor-pointer m-3">
                    {t("menu.violations")}
                  </li>
                  <li className="link-hover cursor-pointer m-3">
                    {t("menu.reservation")}
                  </li>
                  <li className="link-hover cursor-pointer m-3">
                    {t("menu.units")}
                  </li>
                </ul>
              )}
              <ul className="flex max-lg:hidden justify-end gap-3 cursor-pointer">
                <li className="link-hover">{t("menu.wallet")}</li>
                <li className="link-hover">{t("menu.violations")}</li>
                <li className="link-hover">{t("menu.reservation")}</li>
                <li className="link-hover">{t("menu.units")}</li>
              </ul>
            </div>
            <div className="flex-1 w-full flex justify-center gap-5 ml-5">
              <p className="flex flex-col items-center text-[#7db0e0]">
                <span>املاك</span>
                <span>الشاطئ</span>
              </p>
            </div>
          </div>
        </Stack>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TobBar;
