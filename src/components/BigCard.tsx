import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import line from "../assets/line.png"
interface BigCardProps {
 
}

const BigCard: React.FC<BigCardProps> = () => {
  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="flex-3 flex max-md:flex-col justify-between p-3 big-card rounded-md shadow-2xl bg-white">
      <div className="flex flex-col items-end gap-4">
        <h3>{t("headers.paidcontracts")}</h3>
        <p>97855.52</p>
        <img width={120} height={100} src={line} alt="line graph" />
      </div>
      <div className="flex flex-col items-end gap-4">
        <h3>{t("headers.unpaidcontracts")}</h3>
        <p>97855.52</p>
        <img width={120} height={100} src={line} alt="line graph" />
      </div>
      <div className="flex flex-col items-end gap-4">
        <h3>{t("headers.canceledcontracts")}</h3>
        <p>97855.52</p>
        <img width={120} height={100} src={line} alt="line graph" />
      </div>
    </div>
  );
};

export default BigCard
