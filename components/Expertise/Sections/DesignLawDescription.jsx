"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const DesignLawDescription = () => {
    const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>
      {t("DesignDesc1")}
      </p>{" "}
      <br />
      <p>
      {t("DesignDesc2")}
      </p>{" "}
      <br />
      <p>
      {t("DesignDesc3")}
      </p>
    </div>
  );
};

export default DesignLawDescription;
