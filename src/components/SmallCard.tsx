import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import { ResponsivePie } from "@nivo/pie";
import { Box } from "@mui/material";

interface SmallCardProps {
  stat: any;
}

const SmallCard: React.FC<SmallCardProps> = ({stat}) => {
  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="flex-1 p-3 rounded-md shadow-2xl bg-white flex flex-col items-center justify-center gap-4 max-md:w-fit">
      <Box
        style={{ backgroundColor: "white", color: "black", fontWeight: "bold" }}
      >
        <h3>{t("headers.totalcontracts")}</h3>
      </Box>
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
  );
};

export default SmallCard;
