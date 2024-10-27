"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";
import Link from "next/link";

const Header = () => {
  const { t } = useTranslation(); 
  const [currentLang, setCurrentLang] = useState("en");

  // useEffect(() => {
  //   const storedLang = localStorage.getItem("selectedLanguage"); 
  //   const langFromPath = window.location.pathname.split("/")[1]; 
  //   const finalLang = storedLang || (langFromPath === "de" ? "de" : "en"); 
  //   setCurrentLang(finalLang); 
  // }, []);

  return (
    <header>
      <div className="bg-[#1b3b6b] py-5 px-4">
        <div className="max-w-[1320px] w-full mx-auto flex items-center justify-between gap-2">
          <Link href="#">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="h-8 xxs:h-10 md:h-[58px]"
            />
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-2 text-white text-sm">
              <img src="/assets/check-green.svg" alt="check-green" />
              <p> {t("header.customerService")}</p>
            </div>

            <LanguageDropdown />
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-2 bg-white">
        <div className="max-w-[1320px] w-full mx-auto text-[#121926] text-[13px]">
          This website is managed by ETAS TRAVEL LEGAL, a licensed U.S. Law
          Firm. This website is NOT affiliated with any United States
          governmental agency.
        </div>
      </div>
    </header>
  );
};

export default Header;
