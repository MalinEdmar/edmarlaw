"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const MarketingLawDescription = () => {
    const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>
      {t("MDesc1")}
      </p>{" "}
      <br />
      <p>
      {t("MDesc2")}
      </p>
    </div>
  );
};

export default MarketingLawDescription;
