"use client";
import React, { useEffect, useState } from "react";
import styles from "./Faq.module.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useTranslations } from "next-intl";
import ITLawDescription from "./Sections/ITLawDescription";
import ContractLawDescription from "./Sections/ContractLawDescription";
import PrivacyLawDescription from "./Sections/PrivacyLawDescription";
import CopyrightDescription from "./Sections/CopyrightDescription";
import OutsourcingDescription from "./Sections/OutsourcingDescription";
import MarketingLawDescription from "./Sections/MarketingLawDescription";
import DomainNamesDescription from "./Sections/DomainNamesDescription";
import TrademarkLawDescription from "./Sections/TrademarkLawDescription";
import DesignLawDescription from "./Sections/DesignLawDescription";
import TelecomLawDescription from "./Sections/TelecomLawDescription";
import EcommerceDescription from "./Sections/EcommerceDescription";
import { useSearchParams } from "next/navigation";
const Faq = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [six, setSix] = useState(false);
  const [seventh, setSeventh] = useState(false);
  const [eigth, setEigth] = useState(false);
  const [ninth, setNinth] = useState(false);
  const [tenth, setTenth] = useState(false);
  const [eleven, setEleven] = useState(false);
  const [ready, setReady] = useState(false);
  const t = useTranslations("Index");
  const searchParams = useSearchParams();

  const indx = searchParams.get("index");
  const search = searchParams.get("section");
  useEffect(() => {
    setTimeout(() => {
      if (indx && search) {
        console.log("is it here");
        console.log({ indx });

        // Set the state based on the "index" parameter
        const index = parseInt(indx);
        switch (index) {
          case 0:
            setFirst(true);
            break;
          case 1:
            setSecond(true);
            break;
          case 2:
            setThird(true);
            break;
          case 3:
            setFourth(true);
            break;
          case 4:
            setFifth(true);
            break;
          case 5:
            setSix(true);
            break;
          case 6:
            setSeventh(true);
            break;
          case 7:
            setEigth(true);
            break;
          case 8:
            setNinth(true);
            break;
          case 9:
            setTenth(true);
            break;
          case 10:
            setEleven(true);
            break;
          default:
            break;
        }
      }
    }, 800);
  }, [indx, search]);
  useEffect(() => {
    if (indx && search) {
      console.log({ h: search });
      setTimeout(() => {
        const selectedAreaDiv = document.getElementById(`index-${indx}`);
        if (selectedAreaDiv) {
          const offset = 250; // Adjust the offset value as needed
          const top = selectedAreaDiv.offsetTop - offset;
          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 400);
      const data = { title: search };
    }
  }, []);
  return (
    <div className="b-faq">
      <div className={styles.container}>
        <div id="faq" className="b-faq_wrapper">
          <div className="b-faq_list">
            <div
              className={`b-faq_list_item ${first && "open"}`}
              id="index-0"
              onClick={() => {
                setFirst(!first);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
                setSix(false);
                setNinth(false);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("IT Law")}
                </span>
                {first ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  first ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <ITLawDescription />
                  <br /> <br />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${second && "open"}`}
              id="index-1"
              onClick={() => {
                setSecond(!second);
                setFirst(false);
                setNinth(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
                setSix(false);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Contract Law")}
                </span>
                {second ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  second ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <ContractLawDescription />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${third && "open"}`}
              id="index-2"
              onClick={() => {
                setThird(!third);
                setSecond(false);
                setFirst(false);
                setNinth(false);
                setFourth(false);
                setFifth(false);
                setSix(false);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Privacy Law")}
                </span>
                {third ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  third ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <PrivacyLawDescription />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${fourth && "open"}`}
              id="index-3"
              onClick={() => {
                setFourth(!fourth);
                setSecond(false);
                setThird(false);
                setFirst(false);
                setNinth(false);
                setFifth(false);
                setSix(false);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Copyright")}
                </span>
                {fourth ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  fourth ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <CopyrightDescription />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${fifth && "open"}`}
              id="index-4"
              onClick={() => {
                setFifth(!fifth);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFirst(false);
                setNinth(false);
                setSix(false);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Outsourcing")}
                </span>
                {fifth ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  fifth ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <OutsourcingDescription />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${six && "open"}`}
              id="index-5"
              onClick={() => {
                setSix(!six);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
                setFirst(false);
                setNinth(false);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("E-commerce")}
                </span>
                {six ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  six ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <EcommerceDescription />
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${seventh && "open"}`}
              id="index-6"
              onClick={() => {
                setSeventh(!seventh);
                setSix(false);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
                setFirst(false);
                setNinth(false);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Marketing Law")}
                </span>
                {seventh ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  seventh ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <MarketingLawDescription />
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${eigth && "open"}`}
              id="index-7"
              onClick={() => {
                setSeventh(false);
                setSix(false);
                setSecond(false);
                setThird(false);
                setEigth(!eigth);
                setFourth(false);
                setFifth(false);
                setFirst(false);
                setNinth(false);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Domain Names")}
                </span>
                {eigth ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  eigth ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <DomainNamesDescription />
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${ninth && "open"}`}
              id="index-8"
              onClick={() => {
                setSeventh(false);
                setSix(false);
                setSecond(false);
                setThird(false);
                setEigth(false);
                setFourth(false);
                setFifth(false);
                setFirst(false);
                setNinth(!ninth);
                setTenth(false);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Trademark Law")}
                </span>
                {ninth ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  ninth ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <TrademarkLawDescription />
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${tenth && "open"}`}
              id="index-9"
              onClick={() => {
                setSeventh(false);
                setSix(false);
                setSecond(false);
                setThird(false);
                setEigth(false);
                setFourth(false);
                setFifth(false);
                setFirst(false);
                setNinth(!ninth);
                setTenth(!tenth);
                setEleven(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Design Law")}
                </span>
                {ninth ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  tenth ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <DesignLawDescription />
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${eleven && "open"}`}
              id="index-10"
              onClick={() => {
                setSeventh(false);
                setSix(false);
                setSecond(false);
                setThird(false);
                setEigth(false);
                setFourth(false);
                setFifth(false);
                setFirst(false);
                setNinth(false);
                setTenth(false);
                setEleven(!eleven);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Telecom Law")}
                </span>
                {ninth ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  eleven ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <TelecomLawDescription />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
