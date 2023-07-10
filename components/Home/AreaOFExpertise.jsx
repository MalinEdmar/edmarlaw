"use-client";
import React from "react";
import styles from "./Area.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";

const AreaOFExpertise = () => {
  const t = useTranslations("Index");
  const data = [
    {
      logo: "/techlogo.png",
      text: "IT Law",
    },
    {
      logo: "/techlogo.png",
      text: "Contract Law",
    },
    {
      logo: "/techlogo.png",
      text: "Privacy Law",
    },
    {
      logo: "/techlogo.png",
      text: "Copyright",
    },
    {
      logo: "/techlogo.png",
      text: "Outsourcing",
    },
    {
      logo: "/techlogo.png",
      text: "E-commerce",
    },
    {
      logo: "/techlogo.png",
      text: "Marketing Law",
    },
    {
      logo: "/techlogo.png",
      text: "Domain Names",
    },
    {
      logo: "/techlogo.png",
      text: "Trademark Law",
    },
    {
      logo: "/techlogo.png",
      text: "Design Law",
    },
    {
      logo: "/techlogo.png",
      text: "Telecom Law",
    },
  ];

  // Render the data in your React component using the map function

  return (
    <div className={styles.container}>
      <h1>{t("expertiseTitle")}</h1>
      <br />
      <div className={styles.gridContainer}>
        {data.map((item, index) => (
          <Link href={`/expertise?section=${item.text}&index=${index}`} key={index} className={styles.gridItem}>
            <img src={item.logo} alt="" />
            <span>{t(item.text)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AreaOFExpertise;
