"use client";
import React, { useState } from "react";
import styles from "./Faq.module.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useTranslations } from "next-intl";
import WhatGDPR from "./Sections/WhatGDPR";
import DO from "./Sections/DO";
import Information from "./Sections/Information";
import Privacy from "./Sections/Privacy";
import Deletion from "./Sections/Deletion";
import Incident from "./Sections/Incident";
import Process from "./Sections/Process";
import DataProtection from "./Sections/DataProtection";
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
  const t = useTranslations("GDPR");
  return (
    <div className="b-faq">
      <div className={styles.container}>
        <div id="faq" className="b-faq_wrapper">
          <div className="b-faq_list">
            <div
              className={`b-faq_list_item ${first && "open"}`}
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
                  {t("What is GDPR?")}
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
                  <WhatGDPR />
                  <br /> <br />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${second && "open"}`}
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
                  {t("DO_YOU")}
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
                  <DO />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${third && "open"}`}
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
                  {t("Information Obligation")}
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
                  <Information />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${fourth && "open"}`}
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
                  {t("Privacy by Design")}
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
                  <Privacy />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${fifth && "open"}`}
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
                  {t("Deletion of Personal Data and Keeping a Data Register")}
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
                  <Deletion />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${six && "open"}`}
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
                  {t("Incident Management")}
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
                 <Incident />
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${seventh && "open"}`}
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
                  {t("Data Processors")}
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
                 <Process />
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${eigth && "open"}`}
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
                  {t("Data Protection Officer")}
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
                  <DataProtection />
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
