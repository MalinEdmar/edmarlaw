"use client";
import React, { useRef, useState } from "react";
import styles from "./GDPR.module.css";
import { useTranslations } from "next-intl";
import WhatGDPR from "./Sections/WhatGDPR";
import DO from "./Sections/DO";
import Information from "./Sections/Information";
import Privacy from "./Sections/Privacy";
import Deletion from "./Sections/Deletion";
import Data from "./Sections/Data";
import { AiOutlineRight } from "react-icons/ai";
import Incident from "./Sections/Incident";
import Process from "./Sections/Process";
import DataProtection from "./Sections/DataProtection";
import Faq from "./Faq";

export const GDPR = () => {
  const t = useTranslations("GDPR");
  const scrollContainerRef = useRef(null);
  const areasOfExpertise = [
    {
      title: "What is GDPR?",
      image: "/techlogo.png",
      description: <WhatGDPR />, // Replace with the appropriate component for IT Law
    },
    {
      title: "DO_YOU",
      image: "/techlogo.png",
      description: <DO />, // Replace with the appropriate component for Contract Law
    },
    {
      title: "Information Obligation",
      image: "/techlogo.png",
      description: <Information />, // Replace with the appropriate component for Privacy Law
    },
    {
      title: "Privacy by Design",
      image: "/techlogo.png",
      description: <Privacy />, // Replace with the appropriate component for Copyright
    },
    {
      title: "Deletion of Personal Data and Keeping a Data Register",
      image: "/techlogo.png",
      description: <Deletion />, // Replace with the appropriate component for Outsourcing
    },
    {
      title: "Incident Management",
      image: "/techlogo.png",
      description: <Incident />, // Replace with the appropriate component for Marketing Law
    },
    {
      title: "Data Processors",
      image: "/techlogo.png",
      description: <Process />, // Replace with the appropriate component for Domain Names
    },
    {
      title: "Data Protection Officer",
      image: "/techlogo.png",
      description: <DataProtection />, // Replace with the appropriate component for Trademark Law
    },
    // {
    //   title: "Design Law",
    //   image: "/techlogo.png",
    //   description: <DesignLawDescription />, // Replace with the appropriate component for Design Law
    // },
    // {
    //   title: "Telecom Law",
    //   image: "/techlogo.png",
    //   description: <TelecomLawDescription />, // Replace with the appropriate component for Telecom Law
    // },
  ];
  const [selectedArea, setSelectedArea] = useState({
    title: "What is GDPR?",
    image: "/techlogo.png",
    description: <WhatGDPR />, // Replace with the appropriate component for IT Law
  });
  const handleAreaClick = (area, index) => {
    setSelectedArea(area);
    const selectedAreaDiv = document.getElementById(`area-${index}`);
    if (selectedAreaDiv) {
      const offset = 96 // Adjust the offset value as needed
      const top = selectedAreaDiv.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.gridList}>
            <ul>
              {areasOfExpertise.map((area, index) => (
                <li
                  key={index}
                  onClick={() => handleAreaClick(area, index)}
                  className={
                    selectedArea.title === area.title ? styles.active : ""
                  }
                >
                  <div className={styles.row}>
                    <img src={area.image} alt="" />
                    <span>{t(area.title)}</span>
                  </div>
                  <AiOutlineRight style={{ color: "#21212B" }} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.gridContent}  ref={scrollContainerRef}>
            {areasOfExpertise.map((val, index) => (
              <div key={index} id={`area-${index}`}>
                {val.description}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <Faq />
      </div>
    </>
  );
};
