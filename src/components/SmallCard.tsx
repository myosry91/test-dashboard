import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import pieWebp from "../assets/pie.webp";

interface SmallCardProps {}

const SmallCard: React.FC<SmallCardProps> = () => {
  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="flex-1 p-3 rounded-md shadow-2xl bg-white flex flex-col items-end gap-4 max-md:w-fit">
      <h3>{t("headers.totalcontracts")}</h3>
      <img width={150} height={150} src={pieWebp} alt="Pie chart" />
    </div>
  );
};

export default SmallCard;
