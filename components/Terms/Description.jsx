"use client";
import React from "react";
import styles from "./Description.module.css";
import { useTranslations } from "next-intl";
const Description = () => {
  const t = useTranslations("Terms");
  return (
    <div className={styles.container}>
      <p>
        {t("desc1")}
        <a href=""> {t("desc2")} </a> {t("desc3")}
      </p>
      <br />
      <p>{t("desc4")}</p>
      <br />
      <p>{t("desc5")}</p>
    </div>
  );
};

export default Description;
