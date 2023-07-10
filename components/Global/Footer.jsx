"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaLinkedinIn, FaMailchimp } from "react-icons/fa";
import { AiFillMail, AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  const t = useTranslations("Index");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <span>EdmarLaw AB</span>
          <a style={{ color: "#4f4f4f" }} href="tel:+46767742220">
            +46 76-774 2220
          </a>
          <div className={styles.image}>
            <img src="/logo2.png" alt="" />
          </div>
          <a
            style={{
              color: "#4f4f4f",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            href="mailto:info@edmarlaw.se"
          >
         <AiOutlineMail />   info@edmarlaw.se
          </a>

          <a
            style={{
              color: "#4f4f4f",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            href="https://www.linkedin.com/company/advokatfirman-edmarlaw/"
            target="_blank"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
        </div>
        <hr />
        <div className={styles.row2}>
          <p>
            {" "}
            <Link style={{color: "#4f4f4f"}} href={"/terms"}>{t("Terms and Conditions")} </Link> &{" "}
            <Link style={{color: "#4f4f4f"}} href={"/privacy-policy"}>{t("Privacy Policy")}</Link>
          </p>
          <p>© EdmarLaw 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
