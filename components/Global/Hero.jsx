"use client"
import React from "react";
import styles from "./Hero.module.css";
import { useTranslations } from "next-intl";
const Hero = ({title, isEdmr, logoImg}) => {
  const t = useTranslations("Index");
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
       {isEdmr ? <img src={`/${logoImg}.png`} alt="" /> : <h1>{t(title)}</h1>}
      </div>
    </section>
  );
};

export default Hero;
