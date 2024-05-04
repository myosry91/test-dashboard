import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import { IoHomeOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiNewspaperLight } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { TbBuildingWarehouse } from "react-icons/tb";
import { TbReport } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

const LeftSection: React.FC = () => {
  // change lang
  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="w-full flex flex-col items-center flex-1 max-md:hidden text-center bg-white h-[calc(100vh-70px)]">
      <div className="left-link mt-10">
        <p className="w-[30%]">{t("leftmenu.home")}</p>
        <IoHomeOutline />
      </div>
      <div className="left-link relative">
        <RiArrowDropDownLine size={20} className="absolute left-3" />
        <p className="w-[30%]">{t("leftmenu.processes")}</p>
        <PiNewspaperLight />
      </div>
      <div className="left-link relative">
        <RiArrowDropDownLine size={20} className="absolute left-3" />
        <p className="w-[30%]">{t("leftmenu.sectors")}</p>
        <CiMenuKebab />
      </div>
      <div className="left-link relative">
        <RiArrowDropDownLine size={20} className="absolute left-3" />
        <p className="w-[30%]">{t("leftmenu.units")}</p>
        <TbBuildingWarehouse />
      </div>
      <div className="left-link relative">
        <RiArrowDropDownLine size={20} className="absolute left-3" />
        <p className="w-[30%]">{t("leftmenu.reports")}</p>
        <TbReport />
      </div>
      <div className="left-link relative">
        <RiArrowDropDownLine size={20} className="absolute left-3" />
        <p className="w-[30%]">{t("leftmenu.setting")}</p>
        <CiSettings />
      </div>
    </div>
  );
};

export default LeftSection;
