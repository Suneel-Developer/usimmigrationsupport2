import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <section className="bg-[#1b3b6b] py-5 md:py-16 px-4">
        <div className="max-w-[1320px] w-full mx-auto flex items-center justify-between flex-col lg:flex-row gap-5">
          <Link href="#">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="h-10 md:h-[58px]"
            />
          </Link>

          <ul className="flex items-center gap-4 flex-col md:flex-row">
            <li>
              <Link href="#" className="text-white text-sm font-normal">
                About US
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm font-normal">
                Legal Disclaimer
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm font-normal">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm font-normal">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm font-normal">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm font-normal">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm font-normal">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-4 bg-[#F8FAFC]">
        <div className="max-w-[1320px] w-full mx-auto text-[#121926px] text-xs text-center">
          {t("footer.footerdescription")}
        </div>
      </section>

      <section className="px-4 pt-3 pb-4">
        <div className="max-w-[1320px] w-full mx-auto text-[#121926px] text-sm text-center">
          {t("footer.copyrights")}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
