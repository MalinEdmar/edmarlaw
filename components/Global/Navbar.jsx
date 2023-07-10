"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import LinkI from "next-intl/link";
import { useTranslations } from "next-intl";
import Drawer from "./Drawer";
import { usePathname, useRouter } from "next/navigation";
const Navbar = () => {
  const t = useTranslations("Index");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const asPath  = usePathname();

  const getNewPath = (locale) => {
    if (locale === "en") {
      return (asPath.startsWith("/en/") || asPath.startsWith("/en")) ? asPath.substring(3) : asPath === "/en" ? "/" : asPath;
    } else {
      return (asPath.startsWith("/en/")|| asPath.startsWith("/en")) ? `/${locale}${asPath.substring(3)}` : `/${locale}${asPath}`;
    }
  };
  return (
    <nav className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.image}>
            <Link href={"/"}>
              <img src="/logo2.png" alt="" />
            </Link>
          </div>
          <div className={styles.sublist}>
            <Link href={"/expertise"}>
              <span>{t("Area of Expertise")}</span>
            </Link>
            <Link href={"/gdpr"}>
              <span>{t("GDPR")}</span>
            </Link>
            <Link href={"/references"}>
              <span>{t("REFERENCES")}</span>
            </Link>
            <Link href={"/about-us"}>
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
              <LinkI href={getNewPath("en")} locale="en" >
                <p>EN</p>
              </LinkI>
              <LinkI href={getNewPath("se")} locale="se" >
                <p>SE</p>
              </LinkI>
            </div>
          </div>
          <div className={`navbar__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}>
          <div className="navbar__hamburger-line" />
          <div className="navbar__hamburger-line" />
          <div className="navbar__hamburger-line" />
        </div>
        </div>
      </div>
      {isOpen && <Drawer onClose={() => setIsOpen(false)} />}
    </nav>
  );
};
export default Navbar;