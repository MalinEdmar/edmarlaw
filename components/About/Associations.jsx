"use client"
import React from "react";
import styles from "./Associations.module.css";
import { useTranslations } from "next-intl";

const Associations = () => {
  const t = useTranslations("About")
  return (
    <div className={styles.container}>
      <h1>{t("Member of the following associations")}</h1>
      <div className={styles.row}>
        <div>
          <img src="/associate1.png" alt="" />
          <p>International Technology Law</p>
        </div>
        <div>
          <img src="/associate2.png" alt="" />
          <p>
            Association - ITechlaw, Swedish <br /> Organization for Copyright
            Law - SFU
          </p>
        </div>
        <div>
          <img src="/associate3.png" alt="" />
          <p>
            Swedish Organization for IT and Law - <br /> SIJU
          </p>
        </div>
        <div>
          <img src="/associate4.png" alt="" />
          <p>Swedish Data Privacy Forum</p>
        </div>
      </div>
    </div>
  );
};

export default Associations;
