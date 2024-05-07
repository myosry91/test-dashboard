import { Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../../context/LanguageContext";
import { ResponsivePie } from "@nivo/pie";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Row1: FC = () => {

  const isLargeDevice = useMediaQuery("(min-width: 1100px)");

  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  interface Person {
    id: number;
    details: string;
    total: number;
    stat: any;
  }
  const mainStats: Person[] = [
    {
      id: 1,
      details: t("mainStat.available"),
      total: 97837.83,
      stat: 30,
      data: [
        {
          id: "unapproved",

          value: 70,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "approved",
          value: 30,
          color: "hsl(22, 90%, 90%)",
        },
      ],
    },
    {
      id: 2,
      details: t("mainStat.unapproved"),
      total: 5,
      stat: 30,
      data: [
        {
          id: "unapproved",

          value: 70,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "approved",
          value: 30,
          color: "hsl(22, 90%, 90%)",
        },
      ],
    },
    {
      id: 3,
      details: t("mainStat.amount"),
      total: 710,
      stat: 40,
      data: [
        {
          id: "unapproved",

          value: 60,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "approved",
          value: 40,
          color: "hsl(22, 90%, 90%)",
        },
      ],
    },
    {
      id: 4,
      details: t("mainStat.deleted"),
      total: 2,
      stat: 50,
      data: [
        {
          id: "unapproved",

          value: 50,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "approved",
          value: 50,
          color: "hsl(22, 90%, 90%)",
        },
      ],
    },
  ];

  // Define custom colors
  const customColors = ["#C2BDC6", "#867b8d"];
  //   Fake data for testing charts
  const data1 = [
    {
      id: "unapproved",

      value: 70,
      color: "hsl(111, 90%, 90%)",
    },
    {
      id: "approved",
      value: 30,
      color: "hsl(22, 90%, 90%)",
    },
  ];

  return (
    <Stack
      direction={"row-reverse"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", md: "space-between" }}
    >
      {mainStats.map((mainStats) => (
        <Paper
          sx={{
            minWidth: "260px",
            p: 1.5,
            display: "flex",
            justifyContent: "space-between",
            flex: isLargeDevice ? 1 : "unset",
          }}
          key={mainStats.id}
        >
          <Box position="relative">
            {/* chart */}
            <Box height={"80px"} width={"80px"}>
              <ResponsivePie
                data={mainStats.data}
                margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                innerRadius={0.8}
                padAngle={0.7}
                cornerRadius={0}
                colors={customColors}
                activeOuterRadiusOffset={8}
                enableArcLinkLabels={false}
                enableArcLabels={false}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                background: "#CFCFCF",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                color: "white",
                position: "absolute",
                top: "20px",
                left: "20px",
              }}
            >
              {mainStats.stat}%
            </Typography>
          </Box>
          <Stack alignItems={"flex-end"} justifyContent={"center"} gap={"2px"}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                fontFamily: "Rajdhani",
                fontWeight: "bold",
                maxWidth: "130px",
              }}
            >
              {mainStats.details}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "12px", fontWeight: "bold", marginRight: "10px" }}
            >
              {mainStats.total}
            </Typography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

export default Row1;
