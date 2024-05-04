import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import MaiPieChart from "./MainPieChart";
import pieWebp from "../assets/pie.webp";

interface MainStatCardProps {
  details: string;
  total: number;
  stat: number;
}

const MainStatCard: React.FC<MainStatCardProps> = ({
  details,
  total,
  stat,
}) => {
  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);
  const data = [stat, 100 - stat];
  console.log(data);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div
      className={`flex items-center bg-white w-[300px] h-[150px] m-4 pr-2 gap-4 shadow-2xl justify-start rounded-md`}
    >
      <div className="">
        {/* <MaiPieChart /> */}
        <img width={150} height={150} src={pieWebp} alt="Pie chart"/>
      </div>

      <div className=" w-[50%]">
        <div className="text-[15px]">{details}</div>
        <div className="text-[12px] mt-4">{total}</div>
      </div>
    </div>
  );
};

export default MainStatCard;
