"use client";
import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../home/Hero";
import Information from "../home/Information";
import OurServices from "../home/OurServices";
import MemberCountries from "../home/MemberCountries";

const LanguagePage = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {
    const getLanguage = () => {
      if (typeof window !== "undefined") {
        const pathLang = window.location.pathname.split("/")[1];
        const storedLang = localStorage.getItem("selectedLanguage");
        return pathLang === "de" ? "de" : storedLang || "en";
      }
      return "en";
    };

    const selectedLang = getLanguage();

    if (i18n.isInitialized) {
      i18n.changeLanguage(selectedLang).catch((err) => {
        console.error("Error changing language:", err);
      });
      localStorage.setItem("selectedLanguage", selectedLang);
    }
  }, [i18n]);

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Hero />
      <Information />
      <OurServices />

      <section className="px-4 py-6">
        <div className="max-w-[1320px] w-full mx-auto flex items-center md:gap-12 flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-xl font-semibold tracking-[-.8px] text-[#121926] mb-2">
              {t("section1.sectionheading")}
            </h2>
            <p className="text-sm text-[#121926] mb-4">
              {t("section1.sectiondisc")}
            </p>
          </div>

          <img
            src="/assets/ESTA-Application.webp"
            alt="ESTA Application"
            className="h-full md:h-[148px] w-full md:w-auto"
          />
        </div>
      </section>

      <section className="px-4 py-6 bg-[#f8fafc]">
        <div className="max-w-[1320px] w-full mx-auto">
          <div className="flex-1">
            <h2 className="text-xl font-semibold tracking-[-.8px] text-[#121926] mb-2">
              {t("section2.sectionheading")}
            </h2>
            <p className="text-sm text-[#121926] mb-4">
              {t("section2.sectiondisc")}
            </p>

            <p className="text-sm text-[#121926] mb-4">
              {t("section2.sectiondisc2")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 bg-[#f8fafc]">
        <div className="max-w-[1320px] w-full mx-auto border border-[#eef2f6] rounded p-3">
          <h2 className="text-xl font-semibold tracking-[-.8px] text-[#121926] mb-2">
            {t("checklistsection.heading")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-14">
            <ul className="flex flex-col gap-2 text-sm text-[#121926]">
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list1")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list2")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list3")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list4")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list5")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list6")}
              </li>
            </ul>

            <ul className="flex flex-col gap-2 text-sm text-[#121926]">
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list7")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list8")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list9")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list10")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("checklistsection.list11")}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MemberCountries />
      <Footer />
    </I18nextProvider>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "de" } }],
    fallback: false,
  };
};

export default LanguagePage;
