"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", name: "English", flag: "/assets/english.png" },
  { code: "de", name: "German", flag: "/assets/france.png" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("selectedLanguage") || "en";
      const selectedLang =
        languages.find((lang) => lang.code === savedLang) || languages[0];
      setCurrentLang(selectedLang);
      i18n.changeLanguage(selectedLang.code);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const selectedLang = languages.find((lang) => lang.code === lng);
    setCurrentLang(selectedLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", lng);
      setIsOpen(false);

      const newPath = lng === "en" ? "/en" : "/de";
      window.history.pushState({}, "", newPath);
    }
  };

  useEffect(() => {
    const pathLang = pathname.split("/")[1];
    const languageCode = pathLang === "de" ? "de" : "en";

    if (languageCode !== i18n.language) {
      changeLanguage(languageCode);
    }
  }, [pathname, i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="py-[10px] px-5 rounded-[3px] bg-white flex items-center text-sm gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img
          src={currentLang.flag}
          alt={`${currentLang.name} flag`}
          className="h-4 w-5"
        />

        <span className="hidden md:block">{currentLang.name}</span>
        <IoMdArrowDropdown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="py-2 px-4 flex flex-col gap-[10px] bg-white w-full absolute top-[42px] rounded">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center text-[#121926] text-sm gap-1 cursor-pointer"
            >
              <img
                src={lang.flag}
                alt={`${lang.name} flag`}
                className="h-4 w-5"
              />
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;

