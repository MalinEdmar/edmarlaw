"use client"
import React from "react";
import styles from "./About.module.css";
import { useTranslations } from "next-intl";
const About = () => {
    const t = useTranslations("About")
  return (
    <div className={styles.container}>
      <h1>{t("About the law firm EdmarLaw")}</h1> <br />
      <p>
       {t("first")}
      </p>
      <br />
      <p>
      {t("second")}
      </p>
      <br />
      <p>
      {t("third")}
      </p>
      <br />
      <p>
      {t("fourth")}
      </p>
    </div>
  );
};

export default About;
