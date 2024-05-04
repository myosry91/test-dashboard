import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import LanguageContext from "../context/LanguageContext";

const Header: React.FC = () => {
  // change lang
  const { language, setLanguage } = useContext(LanguageContext);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  const changeLanguage = () => {
    setLanguage(language == "en" ? "ar" : "en");
  };

  // Hamburger Menu state
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="bg-white h-[70px] pb-2 px-4 w-full flex items-end justify-between">
      <div className="flex-1 flex gap-3 items-center">
        <button className="sign-button max-sm:hidden">{t("logout")}</button>
        <FaRegUser className="link-hover max-sm:mb-3" />
      </div>

      <div className="flex-3 w-full">
        {/* Hamburger Menu Icon */}
        <div
          className="md:hidden  relative z-10 mb-2 ml-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoMenu size={24} />
        </div>
        {/* Navigation Links */}
        {showMenu && (
          <ul className="absolute w-full flex flex-col items-center top-[70px] right-0 left-[150px] max-w-md max-sm:left-0 bg-white shadow-lg p-4 z-20 md:hidden">
            <li className="link-hover cursor-pointer m-3">
              {t("menu.wallet")}
            </li>
            <li className="link-hover cursor-pointer m-3">
              {t("menu.violations")}
            </li>
            <li className="link-hover cursor-pointer m-3">
              {t("menu.reservation")}
            </li>
            <li className="link-hover cursor-pointer m-3">{t("menu.units")}</li>
          </ul>
        )}
        <ul className="flex max-md:hidden justify-end gap-3 cursor-pointer ">
          <li className="link-hover">{t("menu.wallet")}</li>
          <li className="link-hover">{t("menu.violations")}</li>
          <li className="link-hover">{t("menu.reservation")}</li>
          <li className="link-hover">{t("menu.units")}</li>
        </ul>
      </div>
      <div className="flex-1 w-full flex justify-end gap-5">
        <p className="flex flex-col items-center text-[#7db0e0]">
          <span>املاك</span>
          <span>الشاطئ</span>
        </p>
        <button className="sign-button" onClick={changeLanguage}>
          {language == "en" ?  "العربية":"English"}
        </button>
      </div>
    </div>
  );
};

export default Header;
