import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import MainStatCard from "./MainStatCard";

interface Person {
  id: number;
  details: string;
  total: number;
  stat: number;
}

const HeroSection: React.FC = () => {
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

  return (
    <div className="flex-3 mt-12 pr-6">
      <div className="flex justify-center flex-wrap">
        {mainStat.map((mainStatCard) => (
          <MainStatCard
            key={mainStatCard.id}
            details={mainStatCard.details}
            total={mainStatCard.total}
            stat={mainStatCard.stat}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
