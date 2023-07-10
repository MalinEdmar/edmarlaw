"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const OutsourcingDescription = () => {
    const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>
     {t("OutSource1")}
      </p>
      <br />
      <p>
      {t("OutSource2")}
      </p>
      <br />
      <p>
      {t("OutSource3")}
      </p>
    </div>
  );
};

export default OutsourcingDescription;
