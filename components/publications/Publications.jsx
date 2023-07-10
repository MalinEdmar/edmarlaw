"use client";
import React from "react";
import styles from "./Publications.module.css";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
const Publications = () => {
  const t = useTranslations("Publication");
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.forwardFlex}>
        <div className={styles.imageDiv}>
          <img src="/firstbook.webp" alt="" />
        </div>
        <div>
          <h1>{t("Internet publishing and Social Media")}</h1> <br />
          {pathname === "/about-us/publications" && <p>{t("gdpr")}</p>} <br />
          <p> {t("purpose")}</p> <br />
          {pathname === "/about-us/publications" && (
            <>
              <p>{t("purpose2")}</p> <br />
            </>
          )}
          {pathname === "/about-us/publications" ? (
            <ul>
              <li>Får man använda cookies?</li>
              <li>
                För vilka personuppgifter krävs samtycke och när behöver man
                inte be om lov för att lägga ut uppgifter?
              </li>
              <li>Hur får man marknadsföra en vara på internet?</li>
              <li>Vem äger en webbproduktion?</li>
              <li>När är det förtal på Facebook?</li>
              <li>Vilket lands lag gäller för en webbplats?</li>
            </ul>
          ) : (
            <ul>
              <li>{t("Who owns a web production?")}</li>
              <li>{t("What personal data requires consent?")}</li>
              <li>{t("What are the rules for marketing on the web?")}</li>
              <li>{t("Must-knows for contracting of web productions?")}</li>
              <li>{t("What country’s law applies to a website?")}</li>
              <li>{t("What is a domain name from a legal perspective?")}</li>
              <li>
                {t(
                  "How should you draft terms and conditions for selling a product or service on the internet?"
                )}
              </li>
            </ul>
          )}
          <br />
          {pathname === "/en/about-us/publications" && (
            <>
              <p>({t("In Swedish only")})</p>
              <br />
            </>
          )}
          <p>
            {t("Buy")} <a href="https://shop.nj.se/products/internetpublicering-och-sociala-medier-1" target="_blank"> Internetpublicering och sociala medier</a>
          </p>
        </div>
      </div>
      <div className={styles.reverseFlex}>
        <div className={styles.imageDiv}>
          <img
            src="https://image.nj.se/product/9789139113898.png?w=600"
            alt=""
          />
        </div>
        <div>
          <h1>{t("Domain Names – Strategies and Legal Aspects")}</h1> <br />
          {pathname === "/en/about-us/publications" && (
            <>
              <p>{t("This book is available in both Swedish and English!")}</p>
              <br />
            </>
          )}
          <p>{t("domainP1")}</p>
          <p> {t("domainP2")}</p> <br /> <br />
          <>
            <p>
              {t("These and many more questions are answered in this book")}
            </p>
            <br />
          </>
          {pathname === "/en/about-us/publications" ? (
            <>
              <p>
                {t("Buy")}{" "}
                <a
                  href="https://www.sweetandmaxwell.co.uk/Product/Dispute-Resolution/Domain-Names-Strategies-and-Legal-Aspects/Hardback-and-eBook-ProView/42960040"
                  target="_blank"
                >
                  Domain Names – Strategies and Legal Aspects
                </a>
              </p>
              <br />

              <p>
                (Buy it in Swedish{" "}
                <a href="https://shop.nj.se/products/domannamn" target="_blank">
                  Domännamn – Strategier och juridiska överväganden
                </a>
                )
              </p>
            </>
          ) : (
            <p>
              {t("Buy")}{" "}
              <a href="https://shop.nj.se/products/domannamn" target="_blank">
                Domännamn – Strategier och juridiska överväganden
              </a>
            </p>
          )}
        </div>
      </div>
      <div className={styles.forwardFlex}>
        <div className={styles.imageDiv}>
          <img src="/2.jpg" alt="" />
        </div>
        <div>
          <h1>{t("The Twilight Zone of Intellectual Property")}</h1>
          <br />
          <p>{t("twilight1")}</p> <br />
          <p> {t("twilight2")}</p> <br />
          <p>{t("twilight3")}</p>
          <br />
          {pathname === "/en/about-us/publications" && (
            <>
              <p>({t("In Swedish only")})</p> <br />
            </>
          )}
          <p>
            {t("Buy")}{" "}
            <a
              href="https://www.jure.se/ns/default.asp?url=visatitel.asp?tuid=17706"
              target="_blank"
            >
              I immaterialrättens gränsland
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publications;
