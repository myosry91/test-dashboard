import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import MainStatCard from "./MainStatCard";
import SmallCard from "./SmallCard";
import BigCard from "./BigCard";
import DropMenuContext from "../context/DarkLightContext";
import Row1 from "./heroComponents/Row1";
import Row2 from "./heroComponents/Row2";
import Row3 from "./heroComponents/Row3";
import Row4 from "./heroComponents/Row4";
import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

interface Person {
  id: number;
  details: string;
  total: number;
  stat: any;
}

const HeroSection: React.FC = () => {
  // show drop down menu
  // const { showMenu, setShowMenu } = useContext(DropMenuContext);

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const mainStat: Person[] = [
    { id: 1, details: t("mainStat.available"), total: 97837.83, stat: 30 },
    { id: 2, details: t("mainStat.unapproved"), total: 5, stat: 30 },
    { id: 3, details: t("mainStat.amount"), total: 710, stat: 40 },
    { id: 4, details: t("mainStat.deleted"), total: 2, stat: 50 },
  ];

  const data1 = [
    {
      id: "javascript",

      value: 70,
      color: "hsl(111, 90%, 90%)",
    },
    {
      id: "sass",
      value: 30,
      color: "hsl(22, 90%, 90%)",
    },
  ];

  const data2 = [
    {
      id: t("mainStat.available").slice(0, 9),
      label: t("mainStat.available").slice(0, 9),
      value: 70,
      color: "hsl(22, 90%, 90%)",
    },
    {
      id: t("mainStat.unapproved").slice(0, 9),
      label: t("mainStat.unapproved").slice(0, 9),
      value: 20,
      color: "hsl(111, 90%, 90%)",
    },
    ,
    {
      id: t("mainStat.deleted").slice(0, 9),
      label: t("mainStat.deleted").slice(0, 9),
      value: 10,
      color: "hsl(22, 90%, 90%)",
    },
  ];

  return (
    <div className="">
      <Row1 />
      <Box sx={{ textAlign: "right" }}>
        <Typography
          sx={{
            padding: "30px 6px",
            fontWeight: "bold",
            fontFamily: "Rajdhani",
          }}
          variant="h6"
        >
          {t("headers.totalcontracts")}
        </Typography>
      </Box>
      <Row2 />
      <Box sx={{ textAlign: "right" }}>
        <Typography
          sx={{
            padding: "30px 6px",
            fontWeight: "bold",
            fontFamily: "Rajdhani",
          }}
          variant="h6"
        >
          {t("headers.totalwallet")}
        </Typography>
      </Box>
      <Row3 />
      <Box sx={{ textAlign: "right" }}>
        <Typography
          sx={{
            padding: "30px 6px",
            fontWeight: "bold",
            fontFamily: "Rajdhani",
          }}
          variant="h6"
        >
          {t("headers.booking")}
        </Typography>
      </Box>
      <Row4 />
      {/* <div className="flex justify-between flex-wrap">
        {mainStat.map((mainStatCard) => (
          <MainStatCard
            key={mainStatCard.id}
            details={mainStatCard.details}
            total={mainStatCard.total}
            stat={data1}
          />
        ))}
      </div>
      <div className="flex justify-end my-7">
        <h2>{t("headers.totalcontracts")}</h2>
      </div>
      <div className="flex pl-6 gap-3 max-md:flex-col max-md:justify-center max-md:items-center">
        <SmallCard stat={data2} />
        <BigCard />
      </div>
      <div className="flex justify-end my-7">
        <h2>{t("headers.totalwallet")}</h2>
      </div>
      <div className="flex pl-6 gap-3 max-md:flex-col max-md:justify-center max-md:items-center">
        <BigCard />
        <SmallCard stat={data2} />
      </div> */}
    </div>
  );
};

export default HeroSection;
