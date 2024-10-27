import React from "react";
import { useTranslation } from "react-i18next";

const MemberCountries = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-6 bg-[#F8FAFC]">
      <div className="max-w-[1320px] w-full mx-auto">
        <h2 className="text-xl font-semibold text-[#121926] mb-5">
          {t("countrylist.heading")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/ad.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Andorra
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/au.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Australia
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/at.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Austria
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/be-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Belgium
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/bn-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Brunei
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/cl-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Chile
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/cr.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Croatia
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/cz-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Czech Republic
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/dk-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Denmark
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/ee-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Estonia
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/fi-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Finland
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/fr-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              France
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/de-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Germany
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/gr-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Greece
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/hu-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Hungary
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/is-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Iceland
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/ie-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Ireland
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/il-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Israel
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/it-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Italy
            </li>
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/jp-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Japan
            </li>
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/kr-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              South Korea
            </li>
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/lv-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Latvia
            </li>
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/li-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Liechtenstein
            </li>
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/lt-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Lithuania
            </li>
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/lu-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Luxembourg
            </li>
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/mt-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Malta
            </li>
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/mc-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Monaco
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/nl-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Netherlands
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/nz-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              New Zealand
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/no-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Norway
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/pl-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Poland
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/pt-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Portugal
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/sm-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              San Marino
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/sg-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Singapore
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/sk-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Slovakia
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/si-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Slovenia
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/es-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Spain
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/se-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Sweden
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/ch-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Switzerland
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/tw-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              Taiwan
            </li>

            <li className="flex items-center gap-4 text-[#121926] text-sm">
              <img
                src="/assets/gb-min.webp"
                alt="flag"
                className="h-[18px] rounded-[3px]"
              />
              United Kingdom
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MemberCountries;
