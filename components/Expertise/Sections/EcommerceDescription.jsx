"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const EcommerceDescription = () => {
    const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>
      {t("EDesc1")}
      </p>{" "}
      <br />
      <p>
      {t("EDesc2")}
      </p>
    </div>
  );
};

export default EcommerceDescription;
