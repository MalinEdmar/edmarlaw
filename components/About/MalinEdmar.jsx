"use client";
import React from "react";
import styles from "./MalinEdmar.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
const MalinEdmar = () => {
  const t = useTranslations("About");
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.firstRow}>
          <div className={styles.imageDiv}>
            <img src="/edmar.png" alt="" />
            <div className={styles.infoBox}>
              <h2>Malin Edmar</h2>
              <span>malin.edmar@edmarlaw.se</span>
              <p>+46 76-774 22 20</p>
              {/* <div className={styles.iconsRow}>
                <FaFacebookF
                  className={styles.icon}
                  style={{ fill: "#b2b2b4", cursor: "pointer" }}
                />
                <FaTwitter
                  className={styles.icon}
                  style={{ fill: "#b2b2b4", cursor: "pointer" }}
                />
                <FaInstagramSquare
                  className={styles.icon}
                  style={{ fill: "#b2b2b4", cursor: "pointer" }}
                />
                <FaLinkedinIn
                  className={styles.icon}
                  style={{ fill: "#b2b2b4", cursor: "pointer" }}
                />
              </div> */}
            </div>
          </div>
          <div className={styles.descriptionDIv}>
            <h1>
              Malin Edmar <br /> {t("title")}
            </h1>{" "}
            <br />
            <p>{t("desc1")}</p>
            <br />
            <p>{t("desc2")}</p>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.education}>
            <div>
              <h1>{t("Education")}</h1> <br />
              <p>
                {t("unii")}
              </p>
            </div>
            <div>
              <h1>{t("Publications")}</h1> <br />
              <p>
                {t("Edmar, Malin; Author of the book")}{" "}
                <a
                  href="https://shop.nj.se/products/internetpublicering-och-sociala-medier-1"
                  target="_blank"
                >
                  {"Internetpublicering och sociala medier"}{" "}
                </a>{" "}
                <br />
                {t(
                  "In Swedish, Norstedts Juridik, 7th edition, 2021"
                )} <br /> <br />
                Edmar, Malin;
                <a
                  href="https://www.nj.se/ekurs-internetpublicering-och-sociala-medier"
                  target="_blank"
                >
                  {" "}
                  {t("Online education on Internet publishing")}{" "}
                </a>{" "}
                <br />
                {t("In Swedish, Norstedts Juridik, 2015")} <br /> <br />{" "}
                {t("Edmar, Malin; Co-author of the book")}
                <a href="https://shop.nj.se/products/domannamn" target="_blank">
                  {" "}
                  {t("Domain Names – Strategies and Legal Aspects")}{" "}
                </a>
                <br /> {t("In Swedish, Norstedts Juridik, 2014")}{" "}
                {t("Also available in English")}
                <a
                  href="https://www.sweetandmaxwell.co.uk/Product/Dispute-Resolution/Domain-Names-Strategies-and-Legal-Aspects/Hardback-and-eBook-ProView/42960040"
                  target="_blank"
                >
                  {" "}
                  {t("here")}.
                </a>{" "}
                <br /> <br />
                {t("Edmar, Malin; Editor and co-author to the book")}{" "}
                <a
                  href="https://www.jure.se/ns/default.asp?url=visatitel.asp?tuid=17706"
                  target="_blank"
                >
                  {t("The Twilight Zone of Intellectual Property,")}
                </a>
                <br /> {t("In Swedish, Jure, 2012")}
              </p>
            </div>
          </div>
          <div className={styles.experience}>
            <h1>{t("Experience")}</h1> <br />
            <ul>
              <li>GitHub, Inc. 2021-2023</li>
              <li>{t("Law firm EdmarLaw 2016-")}</li>
              <li>{t("Law firm Fylgia, 2009-2015")}</li>
              <li>{t("Law firm Westermark Anjou, 2007-2008")}</li>
              <li>{t("Microsoft Corporation, Redmond, WA, 2003-2006")}</li>
              <li>{t("Law firm Delphi, 1999-2002")}</li>
              <li>
                {t("Royal Swedish Academy of Engineering Sciences, 1997-1999")}
              </li>
              <li>
                {t("IT Committee CultureNet Sweden, Ministry of Culture, 1996")}
              </li>
              <li>{t("Public Prosecution Authority, Varberg, 1996")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MalinEdmar;
