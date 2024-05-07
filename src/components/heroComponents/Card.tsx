import { Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../../context/LanguageContext";
import { ResponsiveLine } from "@nivo/line";
import { Box } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Card: FC = ({color, header}) => {
    const [t, i18n] = useTranslation("global");
    const { language } = useContext(LanguageContext);

    useEffect(() => {
      i18n.changeLanguage(language);
    }, [language]);
 // Define custom colors
  const customColors = [color, "#867b8d"];
    // Fake data for testing
    const data = [
      {
        id: "norway",
        color: "hsl(179, 70%, 50%)",
        data: [
          {
            x: "plane",
            y: 213,
          },
          {
            x: "helicopter",
            y: 271,
          },
          {
            x: "boat",
            y: 22,
          },
          {
            x: "train",
            y: 270,
          },
          {
            x: "subway",
            y: 97,
          },
          {
            x: "bus",
            y: 146,
          },
          {
            x: "car",
            y: 116,
          },
          {
            x: "moto",
            y: 159,
          },
          {
            x: "bicycle",
            y: 165,
          },
          {
            x: "horse",
            y: 210,
          },
          {
            x: "skateboard",
            y: 76,
          },
          {
            x: "others",
            y: 126,
          },
        ],
      },
    ];
  return (
    <Stack fontFamily="Rajdhani" direction="column" alignItems="end">
      <Stack direction="row">
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
          {header}
        </Typography>
        <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "100%",
            background: `${color}`,
            marginTop: "3px",
          }}
        />
      </Stack>
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
          fontFamily: "Rajdhani",
        }}
      >
        9784.85
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
          fontFamily: "Rajdhani",
        }}
      >
        <TrendingUpIcon /> 7.5%
      </Typography>
      <Box sx={{ height: "150px", width: "150px"}}>
        <ResponsiveLine
          data={data}
          margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          colors={customColors}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          enablePoints={false}
          pointSize={2}
          pointColor={{ theme: "background" }}
          pointBorderColor={{ from: `${color}` }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-13}
          enableArea={true}
          areaOpacity={0.1}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[]}
        />
      </Box>
    </Stack>
  );
};

export default Card;
