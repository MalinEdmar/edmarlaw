"use client"
import React from "react";
import styles from "./Publisher.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Publisher = () => {
  const t = useTranslations("Index");

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="/Mask.png" alt="" />
      </div>
      <div className={styles.rightP}>
        <h1>{t("publisherTitle")}</h1>
        <p>{t("publisherDescription")}</p>
        <Link href={"/about-us/publications"}>{t("publisherViewAllPublications")}</Link>
      </div>
    </div>
  );
};

export default Publisher;
