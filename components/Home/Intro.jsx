"use client"
import React from "react";
import styles from "./Intro.module.css";
import { useTranslations } from "next-intl";
const Intro = () => {
  const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>{t("intro")}</p>
    </div>
  );
};

export default Intro;
