"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LinkI from "next-intl/link";
import "./Navbar.css";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
const Drawer = ({ onClose }) => {
  const t = useTranslations("Index");
  const asPath = usePathname();

  const getNewPath = (locale) => {
    if (locale === "se") {
      return asPath.startsWith("/se/") || asPath.startsWith("/se")
        ? asPath.substring(3)
        : asPath === "/se"
        ? "/"
        : asPath;
    } else {
      return asPath.startsWith("/se/") || asPath.startsWith("/se")
        ? `/${locale}${asPath.substring(3)}`
        : `/${locale}${asPath}`;
    }
  };

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    setIsOpenDropdown(false);
  }, [asPath]);

  return (
    <div
      className={`w-screen min-h-screen h-full bg-white fixed top-28 z-10 left-0 flex flex-col animate-slide-in`}
    >
      <div
        className={
          "flex flex-col gap-y-10 px-6 overflow-y-scroll text-[16px] pb-44 md:pb-0 pt-8"
        }
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {asPath.startsWith("/se") ? (
            <LinkI
              className="text-[#00adee]"
              href={getNewPath("en")}
              locale="en"
            >
              <p>EN</p>
            </LinkI>
          ) : (
            <LinkI
              className="text-[#00adee]"
              href={getNewPath("se")}
              locale="se"
            >
              <p>SE</p>
            </LinkI>
          )}
        </div>
        <Link onClick={onClose} href={"/about-us"}>
          <span>{t("ABOUT")}</span>
        </Link>
        <Link onClick={onClose} href={"/references"}>
          <span>{t("REFERENCES")}</span>
        </Link>
        <div className="">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsOpenDropdown((prev) => !prev)}
          >
            <h2 className="font-bold">{t("expertiseTitle")}</h2>
            <svg
              className={`w-5 h-5 text-black transform transition-transform duration-200 ${
                isOpenDropdown ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              isOpenDropdown ? "opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-black border-l flex flex-col h-full overscroll-auto gap-y-4">
              <Link
                onClick={onClose}
                className=" py-2 px-3"
                href={"/expertise?section=ai"}
              >
                {t("AI")}
              </Link>
              <Link
                onClick={onClose}
                className=" py-2 px-3"
                href={"/expertise?section=law"}
              >
                {t("IT Law")}
              </Link>
              <Link
                onClick={onClose}
                className=" py-2 px-3"
                href={"/expertise?section=contract"}
              >
                {t("Contract Law")}
              </Link>
              <Link
                onClick={onClose}
                className=" py-2 px-3"
                href={"/expertise?section=copyright"}
              >
                {t("Copyright")}
              </Link>
              <Link
                onClick={onClose}
                className=" py-2 px-3"
                href={"/expertise?section=privacy"}
              >
                {t("Privacy Law")}
              </Link>
              <Link
                onClick={onClose}
                className=" py-2 px-3"
                href={"/expertise?section=outsourcing"}
              >
                {t("Outsourcing")}
              </Link>
              <Link
                onClick={onClose}
                className=" py-2 px-3"
                href={"/expertise?section=ecom"}
              >
                {t("E-commerce")}
              </Link>
              <Link
                onClick={onClose}
                className=" py-2 px-3"
                href={"/expertise?section=domain"}
              >
                {t("Domain Names")}
              </Link>
            </div>
          </div>
        </div>
        <Link onClick={onClose} href={"/ai"}>
          <span>{t("AI")}</span>
        </Link>
        <Link onClick={onClose} href={"/gdpr"}>
          <span>{t("GDPR")}</span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
