import { Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../../context/LanguageContext";
import { ResponsivePie } from "@nivo/pie";
import { Box } from "@mui/material";
import Card from "./Card";
import useMediaQuery from "@mui/material/useMediaQuery";

const Row3: FC = () => {
  const isSmallDevice = useMediaQuery("(max-width: 640px)");

  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  // Define custom colors
  const customColors = ["#C2BDC6", "#867b8d", "#493954"];
  //Fake data for testing
  const data2 = [
    {
      id: t("mainStat.available").slice(0, 9),
      label: t("mainStat.available").slice(0, 9),
      value: 50,
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
      value: 30,
      color: "hsl(22, 90%, 90%)",
    },
  ];
  return (
    <Stack
      direction={{ md: "row", sm: "column" }}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", md: "space-between" }}
    >
      <Paper
        sx={{
          minWidth: "260px",
          p: 1.5,
          display: "flex",
          justifyContent: `${isSmallDevice ? "center" : "space-between"}`,
          alignItems: `${isSmallDevice ? "center" : "space-between"}`,
          flexDirection: `${isSmallDevice ? "column" : "row"}`,
          gap: "20px",
          flex: 2,
        }}
      >
        <Card color={"#C2BDC6"} header={t("headers.canceledcontracts")} />
        <Card color={"#867B8D"} header={t("headers.canceledcontracts")} />
        <Card color={"#493954"} header={t("headers.canceledcontracts")} />
      </Paper>

      <Paper
        sx={{
          minWidth: "260px",
          p: 1.5,
          display: "flex",
          // justifyContent: "space-between",
          flexDirection: "column",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <Box sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              padding: "20px 6px",
              fontSize: "16px",
              fontFamily: "Rajdhani",
              fontWeight: "bold",
              fontFamily: "Rajdhani",
            }}
            variant="h6"
          >
            {t("headers.totalcontracts")}
          </Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box>
            <Stack
              direction={language === "en" ? "row-reverse" : "row"}
              justifyContent={language === "en" ? "start" : "end"}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  marginLeft: "10px",
                  fontFamily: "Rajdhani",
                }}
              >
                {t("headers.paidcontracts")}
              </Typography>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  background: "#493954",
                  marginTop: "3px",
                }}
              />
            </Stack>
            <Stack
              direction={language === "en" ? "row-reverse" : "row"}
              justifyContent={language === "en" ? "start" : "end"}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  marginLeft: "10px",
                  fontFamily: "Rajdhani",
                }}
              >
                {t("headers.unpaidcontracts")}
              </Typography>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  background: "#867B8D",
                  marginTop: "3px",
                }}
              />
            </Stack>
            <Stack
              direction={language === "en" ? "row-reverse" : "row"}
              justifyContent={language === "en" ? "start" : "end"}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  marginLeft: "10px",
                  fontFamily: "Rajdhani",
                }}
              >
                {t("headers.canceledcontracts")}
              </Typography>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  background: "#C2BDC6",
                  marginTop: "3px",
                }}
              />
            </Stack>
          </Box>
          <Box sx={{position: "relative"}}>
            <Box height={"100px"} width={"100px"}>
              <ResponsivePie
                data={data2}
                margin={{ top: 1, right: 0, bottom: 10, left: 0 }}
                innerRadius={0.7}
                padAngle={0.7}
                cornerRadius={0}
                colors={customColors}
                activeOuterRadiusOffset={8}
                enableArcLinkLabels={false}
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
                fontSize: "12px",
                fontWeight: "bold",
                marginRight: "10px",
                marginLeft: "10px",
                fontFamily: "Rajdhani",
                position: "absolute",
                top:"40px",
                left:"30px"
              }}
            >
              1430
            </Typography>
          </Box>
          {/* chart */}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Row3;
