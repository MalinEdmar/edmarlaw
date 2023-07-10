"use client";
import React, { useEffect, useState } from "react";
import styles from "./Area.module.css"; // Import the CSS module
import { AiOutlineRight } from "react-icons/ai";
import TelecomLawDescription from "./Sections/TelecomLawDescription";
import DesignLawDescription from "./Sections/DesignLawDescription";
import TrademarkLawDescription from "./Sections/TrademarkLawDescription";
import DomainNamesDescription from "./Sections/DomainNamesDescription";
import MarketingLawDescription from "./Sections/MarketingLawDescription";
import EcommerceDescription from "./Sections/EcommerceDescription";
import OutsourcingDescription from "./Sections/OutsourcingDescription";
import CopyrightDescription from "./Sections/CopyrightDescription";
import PrivacyLawDescription from "./Sections/PrivacyLawDescription";
import ContractLawDescription from "./Sections/ContractLawDescription";
import ITLawDescription from "./Sections/ITLawDescription";
import { useTranslations } from "next-intl";
import Faq from "./Faq";
import { useSearchParams } from "next/navigation";
const AreaOfExpertise = () => {
  const t = useTranslations("Index");
  const searchParams = useSearchParams();

  const indx = searchParams.get("index");
  const search = searchParams.get("section");
  useEffect(() => {
    if (indx && search) {
      console.log({ search });
      const selectedAreaDiv = document.getElementById(`area2-${indx}`);
      if (selectedAreaDiv) {
        const offset = 96; // Adjust the offset value as needed
        const top = selectedAreaDiv.offsetTop - offset;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
      const data = { title: search };
      setSelectedArea(data);
    }
  }, []);

  const areasOfExpertise = [
    {
      title: "IT Law",
      image: "/techlogo.png",
      description: <ITLawDescription />, // Replace with the appropriate component for IT Law
    },
    {
      title: "Contract Law",
      image: "/techlogo.png",
      description: <ContractLawDescription />, // Replace with the appropriate component for Contract Law
    },
    {
      title: "Privacy Law",
      image: "/techlogo.png",
      description: <PrivacyLawDescription />, // Replace with the appropriate component for Privacy Law
    },
    {
      title: "Copyright",
      image: "/techlogo.png",
      description: <CopyrightDescription />, // Replace with the appropriate component for Copyright
    },
    {
      title: "Outsourcing",
      image: "/techlogo.png",
      description: <OutsourcingDescription />, // Replace with the appropriate component for Outsourcing
    },
    {
      title: "E-commerce",
      image: "/techlogo.png",
      description: <EcommerceDescription />, // Replace with the appropriate component for E-commerce
    },
    {
      title: "Marketing Law",
      image: "/techlogo.png",
      description: <MarketingLawDescription />, // Replace with the appropriate component for Marketing Law
    },
    {
      title: "Domain Names",
      image: "/techlogo.png",
      description: <DomainNamesDescription />, // Replace with the appropriate component for Domain Names
    },
    {
      title: "Trademark Law",
      image: "/techlogo.png",
      description: <TrademarkLawDescription />, // Replace with the appropriate component for Trademark Law
    },
    {
      title: "Design Law",
      image: "/techlogo.png",
      description: <DesignLawDescription />, // Replace with the appropriate component for Design Law
    },
    {
      title: "Telecom Law",
      image: "/techlogo.png",
      description: <TelecomLawDescription />, // Replace with the appropriate component for Telecom Law
    },
  ];

  const [selectedArea, setSelectedArea] = useState({
    title: "IT Law",
    image: "/techlogo.png",
    description: <ITLawDescription />, // Replace with the appropriate component for IT Law
  });

  const handleAreaClick = (area, index) => {
    setSelectedArea(area);
    const selectedAreaDiv = document.getElementById(`area2-${index}`);
    if (selectedAreaDiv) {
      const offset = 96; // Adjust the offset value as needed
      const top = selectedAreaDiv.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
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
        <div className={styles.gridContent}>
          {areasOfExpertise.map((val, index) => (
            <div key={index} id={`area2-${index}`}>
              <h1>{t(val.title)}</h1> <br />
              {val.description}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <Faq />
      </div>
    </>
  );
};

export default AreaOfExpertise;
