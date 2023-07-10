"use client";
import React from "react";
import styles from "../Home/Area.module.css";
import { useTranslations } from "next-intl";
const TypicalAssignment = () => {
  const t = useTranslations("REF");
  return (
    <div className={styles.container}>
      <h2>
        {t(
          "Examples of typical assignments where the legal counsel of EdmarLaw has been requested"
        )}
      </h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>{t("Licensing of software")}</span>
        </div>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>{t("Licensing of AI services")}</span>
        </div>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>{t("Licensing of security products and services")}</span>
        </div>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>
            {t(
              "Contracts regarding development and implementation of IT systems"
            )}
          </span>
        </div>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>{t("Outsourcing of IT services")}</span>
        </div>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>{t("International joint development")}</span>
        </div>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>{t("Implementation of IT-system for payment solutions")}</span>
        </div>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>{t("Regulations around technical platforms")}</span>
        </div>
        <div className={styles.gridItem2}>
          <img src="/icon.png" />
          <span>
            {t("Drafting terms and conditions for customers and users")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TypicalAssignment;
