import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import { ResponsivePie } from "@nivo/pie";
import { Box } from "@mui/material";

interface MainStatCardProps {
  details: string;
  total: number;
  stat: any;
}

const MainStatCard: React.FC<MainStatCardProps> = ({
  details,
  total,
  stat,
 
}) => {
  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);
  // const data = [stat, 100 - stat];
  

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div
      className={`flex items-center bg-white w-[250px] h-[150px] m-4 gap-4 shadow-md justify-between rounded-md`}
    >
      <div className="">
        {/* <MaiPieChart /> */}
        <Box height={"100px"} width={"100px"}>
          <ResponsivePie
            data={stat}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.2}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            enableArcLinkLabels={false}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            
            
          />

        </Box>
      </div>

      <div className=" w-[50%]">
        <Box
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <h2 className="text-[15px]">{details}</h2>
          <h3 className="text-[12px] mt-4">{total}</h3>
        </Box>
      </div>
    </div>
  );
};

export default MainStatCard;
