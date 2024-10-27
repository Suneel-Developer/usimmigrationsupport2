import React from "react";
import { useTranslation } from "react-i18next";

const Information = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#e3e8ef] py-6 md:py-8 px-4">
      <div className="max-w-[1320px] w-full mx-auto">
        <h2 className="text-xl font-bold text-[#364152] mb-2">
          {t("information.informationheading")}
        </h2>
        <p className="text-sm text-[#364152] mb-4">
          {t("information.informationdisc")}
        </p>
      </div>
    </section>
  );
};

export default Information;
