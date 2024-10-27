import React from "react";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <section className="border-b border-[#D2B367] bg-[#f8fafc] py-4 md:py-8 px-4">
      <div className="max-w-[1320px] w-full mx-auto">
        <div>
          <h2 className="text-xl font-bold text-[#121926] mb-2">
            {t("ourservices.heading")}
          </h2>

          <p className="text-sm text-[#121926] mb-4">{t("ourservices.disc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-lg md:text-xl font-medium text-[#121926] mb-2 tracking-[-.4px]">
              {t("ourservices.listheading")}
            </h2>

            <ul className="flex flex-col gap-2 text-sm text-[#121926]">
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list1")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list2")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list3")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list4")}
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list5")}
              </li>
            </ul>

            <p className="text-[#121926] text-sm mb-4 mt-2">
              {t("ourservices.disc2")}
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-medium text-[#121926] mb-2 tracking-[-.4px]">
              {t("ourservices.listheadingtwo")}
            </h2>

            <ul className="flex flex-col gap-2 text-sm text-[#121926]">
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list6")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list7")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list8")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list9")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list10")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list11")}
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                {t("ourservices.list12")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
