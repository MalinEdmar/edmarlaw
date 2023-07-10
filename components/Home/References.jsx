"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./References.module.css";
import { useTranslations } from "next-intl";

const References = () => {
  const t = useTranslations("Index");
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <h1>References</h1>
      <Slider {...settings}>
        <div className={styles.row}>
          <p>{t("quote1")}</p>
          <h6>{t("author1")}</h6>
          <span>{t("position1")}</span>
        </div>
        <div className={styles.row}>
          <p>{t("quote2")}</p>
          <h6>{t("author2")}</h6>
          <span>{t("position2")}</span>
        </div>
        <div className={styles.row}>
          <p>{t("quote3")}</p>
          <h6>{t("author3")}</h6>
          <span>{t("position3")}</span>
        </div>
        <div className={styles.row}>
          <p>{t("quote4")}</p>
          <h6>{t("author4")}</h6>
          <span>{t("position4")}</span>
        </div>
        <div className={styles.row}>
          <p>{t("quote5")}</p>
          <h6>{t("author5")}</h6>
          <span>{t("position5")}</span>
        </div>
        <div className={styles.row}>
          <p>{t("quote6")}</p>
          <h6>{t("author6")}</h6>
          <span>{t("position6")}</span>
        </div>
        <div className={styles.row}>
          <p>{t("quote7")}</p>
          <h6>{t("author7")}</h6>
          <span>{t("position7")}</span>
        </div>
        <div className={styles.row}>
          <p>{t("quote8")}</p>
          <h6>{t("author8")}</h6>
          <span>{t("position8")}</span>
        </div>
        <div className={styles.row}>
          <p>
            &quot;I’ve sought Malin’s advice on new initiatives in Nordic and
            European countries. She’s pragmatic, fast and has excellent judgment
            when it comes to technology agreements and intellectual property. I
            highly recommend her.&quot;
          </p>
          <h6>
           Brian Kennan
          </h6>
          <span>Director, Executive Development, Amazon.com, Inc.</span>
        </div>
        {/* Rest of the slides */}
      </Slider>
    </div>
  );
};

export default References;
