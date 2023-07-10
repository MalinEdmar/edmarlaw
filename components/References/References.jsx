"use client";
import React from "react";
import styles from "./References.module.css";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FirstRef from "@/util/Svgs/FirstRef";
import Ref2 from "@/util/Svgs/Ref2";
import Ref3 from "@/util/Svgs/Ref3";
import Ref4 from "@/util/Svgs/Ref4";
import Ref5 from "@/util/Svgs/Ref5";
import Ref6 from "@/util/Svgs/Ref6";
import Ref7 from "@/util/Svgs/Ref7";
import Ref8 from "@/util/Svgs/Ref8";
import Ref9 from "@/util/Svgs/Ref9";
import { useTranslations } from "next-intl";
const References = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("REF");
  console.log({ pathname });
  console.log({ searchParams });
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.row}>
          <div className={styles.ref}>
            <h4>Adam Berg</h4>
            <span>Co-founding Partner, Looklet AB</span>
            <p>{t("first")}</p>
          </div>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <FirstRef />
            ) : (
              <img src={"/firstref.png"} alt="" />
            )}
          </div>
        </div>
        <div className={`${styles.row} ${styles.roweven}`}>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <Ref2 />
            ) : (
              <img src={"/ref2.png"} alt="" />
            )}
          </div>
          <div className={styles.ref}>
            <h4>Mathias Strand</h4>
            <span>Head of Legal, Microsoft Western Europe</span>
            <p>{t("second")}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.ref}>
            <h4>Stefan Magnusson</h4>
            <span>Vice President, DreamHack AB</span>
            <p>{t("third")}</p>
          </div>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <Ref3 />
            ) : (
              <img src={"/ref3.png"} alt="" />
            )}
          </div>
        </div>
        <div className={`${styles.row} ${styles.roweven}`}>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <Ref4 />
            ) : (
              <img src={"/ref4.png"} alt="" />
            )}
          </div>
          <div className={styles.ref}>
            <h4>Anders Båth</h4>
            <span>Senior Vice President, eBuilder</span>
            <p>{t("eBuilder")}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.ref}>
            <h4>Johan Gustafsson</h4>
            <span>CEO, Unomaly</span>
            <p>{t("unomly")}</p>
          </div>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <Ref5 />
            ) : (
              <img src={"/ref5.png"} alt="" />
            )}
          </div>
        </div>
        <div className={`${styles.row} ${styles.roweven}`}>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <Ref6 />
            ) : (
              <img src={"/ref6.png"} alt="" />
            )}
          </div>
          <div className={styles.ref}>
            <h4>Mattias Unosson</h4>
            <span>CEO, Exmet AB</span>
            <p>{t("exmet")}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.ref}>
            <h4>Patrik Andersson</h4>
            <span>Product Manager, Genero Solutions AB</span>
            <p>{t("genero")}</p>
          </div>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <Ref7 />
            ) : (
              <img src={"/ref7.png"} alt="" />
            )}
          </div>
        </div>
        <div className={`${styles.row} ${styles.roweven}`}>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <Ref8 />
            ) : (
              <img src={"/ref8.png"} alt="" />
            )}
          </div>
          <div className={styles.ref}>
            <h4>Brian Kennan</h4>
            <span>Director, Executive Development, Amazon.com, Inc.</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.ref}>
            <h4>Jakob Johansson</h4>
            <span>CEO, Gleechi AB</span>
            <p>{t("gleechi")}</p>
          </div>
          <div className={styles.svgParent}>
            {pathname === "/references" ? (
              <Ref9 />
            ) : (
              <img src={"/ref9.png"} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
