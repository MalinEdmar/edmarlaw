"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const TelecomLawDescription = () => {
    const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>
      {t("TelDesc1")}
      </p>
      <br />
      <p>
      {t("TelDesc2")}
      </p>
      <br />
      <p>
      {t("TelDesc3")}
      </p>
      <br />
      <p>
      {t("TelDesc4")}
      </p>
    </div>
  );
};

export default TelecomLawDescription;
