"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const DomainNamesDescription = () => {
    const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>
       {t("DDesc1")}
      </p>{" "}
      <br />
      <p>
       {t("DDesc2")}
      </p>
    </div>
  );
};

export default DomainNamesDescription;
