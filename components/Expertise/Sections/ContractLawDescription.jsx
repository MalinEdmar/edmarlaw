"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const ContractLawDescription = () => {
    const t = useTranslations("Index")
  return (
    <div className={styles.container}>
      <p>
        {t("contractDesc1")}
      </p>{" "}
      <br />
      <p>
      {t("contractDesc2")}
      </p>{" "}
      <br />
      <p>
      {t("contractDesc3")}
      </p>
    </div>
  );
};

export default ContractLawDescription;
