"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const CopyrightDescription = () => {
  const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>{t("CopyDesc1")}</p>
      <br />
      <p>{t("CopyDesc2")}</p>
      <br />
      <p>{t("CopyDesc3")}</p>
    </div>
  );
};

export default CopyrightDescription;
