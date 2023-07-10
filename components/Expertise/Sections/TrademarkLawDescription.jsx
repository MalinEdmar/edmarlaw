"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const TrademarkLawDescription = () => {
    const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>
      {t("TDesc1")}
      </p>
      <br />
      <p>
      {t("TDesc2")}
      </p>
      <br />
      <p>
      {t("TDesc3")}
      </p>
    </div>
  );
};

export default TrademarkLawDescription;
