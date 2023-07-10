"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import LinkI from "next-intl/link";
import styles from "./Navbar.module.css";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
const Drawer = ({ onClose }) => {
  const t = useTranslations("Index");
  const asPath = usePathname();

  const getNewPath = (locale) => {
    if (locale === "en") {
      return asPath.startsWith("/en/") || asPath.startsWith("/en")
        ? asPath.substring(3)
        : asPath === "/en"
        ? "/"
        : asPath;
    } else {
      return asPath.startsWith("/en/") || asPath.startsWith("/en")
        ? `/${locale}${asPath.substring(3)}`
        : `/${locale}${asPath}`;
    }
  };
  return (
    <div className="drawer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <AiOutlineClose onClick={onClose} />
      </div>
      <div className={styles.sublist2}>
        <Link onClick={onClose} href={"/expertise"}>
          <span>{t("Area of Expertise")}</span>
        </Link>
        <Link onClick={onClose} href={"/gdpr"}>
          <span>{t("GDPR")}</span>
        </Link>
        <Link onClick={onClose} href={"/references"}>
          <span>{t("REFERENCES")}</span>
        </Link>
        <Link onClick={onClose} href={"/about-us"}>
          <span>{t("ABOUT")}</span>
        </Link>
        {/* <div class="dropdown">
              <select>
                <option value="en">
                  <LinkI href={"/"} locale="en">
                    English
                  </LinkI>
                </option>
                <option value="sv">
                  <LinkI href={"/"} locale="sv">
                    Sweeden
                  </LinkI>
                </option>
              </select>
            </div> */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <LinkI href={getNewPath("en")} locale="en">
            <p>EN</p>
          </LinkI>
          <LinkI href={getNewPath("se")} locale="se">
            <p>SE</p>
          </LinkI>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
