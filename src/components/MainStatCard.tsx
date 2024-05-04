import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import MaiPieChart from "./MainPieChart";


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
  console.log(data)

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div
      className={`flex bg-white w-[300px] h-[150px] m-4 p-10 gap-4 shadow-2xl justify-center items- rounded-md`}
    >
      <div className="">
        <MaiPieChart />
      </div>

      <div className=" w-[50%]">
        <div className="text-[15px]">{details}</div>
        <div className="text-[10px] my-4">{total}</div>
      </div>
    </div>
  );
};

export default MainStatCard;
