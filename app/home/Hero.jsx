"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslation } from "react-i18next";

// Countries Data
const countries = [
  { name: "AFGHANISTAN", code: "AFG" },
  { name: "ALBANIA", code: "ALB" },
  { name: "ALGERIA", code: "DZA" },
  { name: "AMERICAN SAMOA", code: "ASM" },
  { name: "ANDORRA", code: "AND" },
  { name: "ANGOLA", code: "AGO" },
  { name: "ANGUILLA", code: "AIA" },
  { name: "ANTARCTICA", code: "ATA" },
  { name: "ANTIGUA AND BARBUDA", code: "ATG" },
];

const Hero = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedSecondCountry, setSelectedSecondCountry] = useState(null);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);
  const dropdownRef = useRef(null);
  const secondDropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
    setIsSecondDropdownOpen(false);
  };

  const handleToggleSecondDropdown = () => {
    setIsSecondDropdownOpen((prev) => !prev);
    setIsOpen(false);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const handleSelectSecondCountry = (country) => {
    setSelectedSecondCountry(country);
    setIsSecondDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      secondDropdownRef.current &&
      !secondDropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setIsSecondDropdownOpen(false);
    }
  };

  const handleCheckboxChange = (event) => {
    setShowSecondDropdown(event.target.checked);
    if (!event.target.checked) {
      setSelectedSecondCountry(null);
      setIsSecondDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const reasons = [
    {
      id: "tourism",
      labelKey: "reason.tourism",
      imgSrc: "/assets/Tourism-&-Travel.svg",
    },
    {
      id: "business",
      labelKey: "reason.business",
      imgSrc: "/assets/business.svg",
    },
    {
      id: "transit",
      labelKey: "reason.transit",
      imgSrc: "/assets/transit.svg",
    },
  ];

  const handleSelectReason = (id) => {
    setSelectedReason(id);
  };

  return (
    <section className="eligibility-form bg-[url('/assets/eligibility-bg.webp')] bg-cover bg-center bg-no-repeat relative py-4 md:py-32 px-4 flex items-center justify-center">
      <div className="max-w-[1320px] w-full mx-auto">
        <div className="max-w-[636px] w-full mx-auto rounded-2xl p-4 md:p-6 bg-white shadow-1 z-30 relative">
          <form>
            <h2 className="mb-4 text-xl md:text-2xl tracking-[-.48px] text-[#202939] font-bold">
              {t("hero.heading")}
            </h2>

            <label className="text-base text-[#202939] font-semibold">
              {t("hero.subheading")}
            </label>

            {/* Countries Dropdown  */}
            <div ref={dropdownRef} className="relative my-3">
              <div
                className={`border border-[#d0d0d0] rounded p-2 cursor-pointer flex justify-between items-center bg-white text-[#303030] text-[13px]`}
                onClick={handleToggleDropdown}
              >
                <input
                  type="text"
                  value={
                    selectedCountry
                      ? `${selectedCountry.name} (${selectedCountry.code})`
                      : ""
                  }
                  placeholder={t("hero.inputplacholder")}
                  readOnly
                  className="border-none outline-none flex-1 cursor-pointer placeholder:text-[#303030]"
                />

                <IoMdArrowDropdown
                  className={`transition-transform duration-300 text-xl text-[#303030] ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isOpen && (
                <ul className="absolute top-full bg-white z-10 w-full left-0 right-0 border border-[#d0d0d0] rounded-b h-[200px] overflow-y-auto">
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      className={`py-[5px] px-2 cursor-pointer transition-all duration-300 text-[13px] ${
                        selectedCountry?.code === country.code
                          ? "bg-[#92c836] text-white hover:bg-[#92c836] hover:text-white"
                          : "text-[#303030] hover:bg-[#f5fafd]"
                      }`}
                      onClick={() => handleSelectCountry(country)}
                    >
                      {`${country.name} (${country.code})`}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mb-7">
              <div className="text-sm flex items-center gap-2 text-[#202939] mb-3">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  onChange={handleCheckboxChange}
                />
                <label className="cursor-pointer">
                  {t("hero.checkboxselect")}
                </label>
              </div>

              {/* Select Second Countries Dropdown */}
              {showSecondDropdown && (
                <div>
                  <label className="text-base text-[#202939] font-semibold">
                    {t("hero.label")}
                  </label>

                  <div ref={secondDropdownRef} className="relative my-3">
                    <div
                      className={`border border-[#d0d0d0] rounded p-2 cursor-pointer flex justify-between items-center bg-white text-[#303030] text-[13px]`}
                      onClick={handleToggleSecondDropdown}
                    >
                      <input
                        type="text"
                        value={
                          selectedSecondCountry
                            ? `${selectedSecondCountry.name} (${selectedSecondCountry.code})`
                            : ""
                        }
                        placeholder={t("hero.inputplacholder")}
                        readOnly
                        className="border-none outline-none flex-1 cursor-pointer placeholder:text-[#303030]"
                      />

                      <IoMdArrowDropdown
                        className={`transition-transform duration-300 text-xl text-[#303030] ${
                          isSecondDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {isSecondDropdownOpen && (
                      <ul className="absolute top-full bg-white z-10 w-full left-0 right-0 border border-[#d0d0d0] rounded-b h-[200px] overflow-y-auto">
                        {countries.map((country) => (
                          <li
                            key={country.code}
                            className={`py-[5px] px-2 cursor-pointer transition-all duration-300 text-[13px] ${
                              selectedSecondCountry?.code === country.code
                                ? "bg-[#92c836] text-white hover:bg-[#92c836] hover:text-white"
                                : "text-[#303030] hover:bg-[#f5fafd]"
                            }`}
                            onClick={() => handleSelectSecondCountry(country)}
                          >
                            {`${country.name} (${country.code})`}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="text-base text-[#202939] font-semibold">
                {t("hero.label2")}
              </label>

              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
                {reasons.map((reason) => (
                  <li
                    key={reason.id}
                    className={`h-[45px] md:h-[120px] rounded-lg border flex flex-col items-center justify-center gap-1 cursor-pointer text-[#121926] font-semibold text-sm ${
                      selectedReason === reason.id
                        ? "border-[#66c61c] bg-[#f8fafc]"
                        : "border-[#cdd5df]"
                    }`}
                    onClick={() => handleSelectReason(reason.id)}
                  >
                    <img
                      src={reason.imgSrc}
                      alt={t(reason.labelKey)}
                      className="hidden md:flex"
                    />
                    <p>{t(reason.labelKey)}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* button  */}
            <button className="mt-6 bg-[#66c61c] text-center py-3 px-5 text-base font-medium uppercase rounded-md w-full text-white hover:bg-[#4f9916] transition-all duration-200">
              {t("hero.continueapplicationbt")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
