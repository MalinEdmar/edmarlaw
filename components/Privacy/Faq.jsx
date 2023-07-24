"use client";
import React, { useState } from "react";
import styles from "./Faq.module.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useTranslations } from "next-intl";

let defaultExpanded = [false, false, false, false, false, false, false, false, false];
const Faq = () => {
  const [expandedBullets, setExpanedBullets] = useState([...defaultExpanded])
  const t = useTranslations("Privacy");

  const setExpanded = (i) => {
    console.log("clicked expanded");
    let modifiedExpanded = [...defaultExpanded];
    modifiedExpanded[i] = !expandedBullets[i];
    setExpanedBullets(modifiedExpanded);
  }

  return (
    <div className="b-faq">
      <div className={styles.container}>
        <div id="faq" className="b-faq_wrapper">
          <div className="b-faq_list">
            <div
              className={`b-faq_list_item ${expandedBullets[0] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(0)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("General")}
                </span>
                {expandedBullets[0] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[0] ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <p className="regular grey">
                    {t("generel1")} <br /> <br />
                    {t("generel2")}
                  </p>
                  <br /> <br />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${expandedBullets[1] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(1)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Collection of Personal Data")}
                </span>
                {expandedBullets[1] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[1] ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <p className="regular grey">
                    {t("personal1")} <br /> <br /> {t("personal2")} <br />{" "}
                    <br /> {t("personal3")} <br /> <br /> {t("personal4")}{" "}
                    <br /> <br /> {t("personal5")} <br /> <br />{" "}
                    {t("personal6")} <br /> <br /> {t("personal7")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${expandedBullets[2] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(2)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("How we process personal data")}
                </span>
                {expandedBullets[2] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[2] ? "accordin" : "accordinback"
                }`}
              >
                <div >
                  <p className="regular grey">{t("process1")}</p>
                  <br />
                  <div style={{overflowX:"scroll", width:"100%" } }>
                  <table width="829">
                    <tbody>
                      <tr>
                        <td width="200">
                          <strong>Purpose of the processing</strong>
                        </td>
                        <td width="200">
                          <strong>Legal grounds for processing</strong>
                        </td>
                        <td width="200">
                          <strong>Categories of personal data</strong>
                        </td>
                        <td width="201">
                          <strong>Storage time</strong>
                        </td>
                      </tr>
                      <tr>
                        <td width="200">
                          To carry out and administer the mission as well as
                          protect EdmarLaws clients’ interests.
                        </td>
                        <td width="200">
                          In order to fulfill contractual obligations.
                        </td>
                        <td width="200">
                          Name, email address, address, telephone number, social
                          security number, copies of identity documents,
                          employer as well as other data necessary for the
                          execution of our assignment.
                        </td>
                        <td width="201">
                          For 10 years from a specific contract completion, or
                          such longer time as the Mission’s nature necessitates.
                        </td>
                      </tr>
                      <tr>
                        <td width="200">
                          To perform mandatory conflict of interest checks and
                          money laundering controls.
                        </td>
                        <td width="200">
                          EdmarLaws legitimate interest or, where appropriate,
                          to comply with applicable law.
                        </td>
                        <td width="200">
                          Name, e-mail address, registration number, address,
                          telephone number.
                        </td>
                        <td width="201">
                          In 10 years from a specific contract completion, or
                          such longer time as the Mission’s nature necessitates.
                        </td>
                      </tr>
                      <tr>
                        <td width="200">
                          To manage the relationship with suppliers and other
                          parties than clients and counterparties.
                        </td>
                        <td width="200">
                          In order to fulfill contractual commitments,
                          EdmarLaws.
                        </td>
                        <td width="200">
                          Name, e-mail address, registration number, address,
                          telephone number.
                        </td>
                        <td width="201">
                          During the term of this agreement and for one year
                          thereafter, unless a longer time is required to make
                          legal claims.
                        </td>
                      </tr>
                      <tr>
                        <td width="200">To manage job applications.</td>
                        <td width="200">
                          Other legitimate interests during initial storage
                          period.&nbsp;Then further treatment be based on
                          consent.
                        </td>
                        <td width="200">
                          Name, email address, address, telephone number and any
                          other information which the applicant chooses to
                          submit in their application.
                        </td>
                        <td width="201">
                          For published vacancies:<p></p>
                          <p>
                            Until the position is filled, then with any consent.
                          </p>
                          <p>For unsolicited applications:</p>
                          <p>Consent for continued storage is appropriate.</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="200">
                          For accounting and billing purposes.
                        </td>
                        <td width="200">
                          In order to carry out EdmarLaws contractual
                          commitments and to comply with applicable law.
                        </td>
                        <td width="200">
                          Name, email address, address, registration number,
                          telephone number.
                        </td>
                        <td width="201">
                          Until the debt is paid, and then for up to seven years
                          in accordance with Swedish accounting rules.
                        </td>
                      </tr>
                      <tr>
                        <td width="200">
                          To invite clients to events or to provide other
                          relevant information.
                        </td>
                        <td width="200">Other legitimate interests.</td>
                        <td width="200">Email address.</td>
                        <td width="201">
                          As long as the EdmarLaw sends out such information,
                          unless the recipient declines.
                        </td>
                      </tr>
                      <tr>
                        <td width="200">
                          To manage and assist those who contact us.
                        </td>
                        <td width="200">Other legitimate interests.</td>
                        <td width="200">Name, email address, phone number.</td>
                        <td width="201">
                          As long as it is required to assist in the contacting
                          us.
                        </td>
                      </tr>
                      <tr>
                        <td width="200">
                          For statistical purposes related to how visitors use
                          the EdmarLaws website.
                        </td>
                        <td width="200">Other legitimate interests.</td>
                        <td width="200">
                          The categories listed under the heading Cookies.
                        </td>
                        <td width="201">6 months.</td>
                      </tr>
                      <tr>
                        <td width="200">
                          In order to comply with applicable law, such as the
                          Bookkeeping Act.
                        </td>
                        <td width="200">
                          In order to comply with applicable law.
                        </td>
                        <td width="200">
                          Name, email address, address, registration number,
                          telephone number.
                        </td>
                        <td width="201">
                          In accordance with the law (according to Swedish
                          accounting rules for seven years).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${expandedBullets[3] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(3)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Transfers of personal data")}
                </span>
                {expandedBullets[3] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[3] ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <p className="regular grey">
                    {t("transfer1")} <br /> <br /> {t("transfer2")}
                  </p>{" "}
                  <br />
                  <div style={{overflowX:"scroll", width:"100%" } }>
                  <table width="821">
                    <tbody>
                      <tr>
                        <td width="198">
                          <strong>Subcontractor (name service)</strong>
                        </td>
                        <td width="198">
                          <strong>
                            Country/region where the service performed
                          </strong>
                        </td>
                        <td width="198">
                          <strong>
                            Mechanism for transfer to a third country
                          </strong>
                        </td>
                        <td width="199">
                          <strong>Type of service</strong>
                        </td>
                      </tr>
                      <tr>
                        <td width="198">Dropbox, Inc.</td>
                        <td width="198">EU/EEA/United States</td>
                        <td width="198">
                          Certification according to EU-U.S Privacy Shield
                          Framework
                        </td>
                        <td width="199">Cloud computing, storage and backup</td>
                      </tr>
                      <tr>
                        <td width="198">Google, Inc. (Google Analytics)</td>
                        <td width="198">EU/EEA/ United States</td>
                        <td width="198">
                          Certification according to EU-U.S Privacy Shield
                          Framework
                        </td>
                        <td width="199">Statistics related to our Web site</td>
                      </tr>
                      <tr>
                        <td width="198">K10 Redovisning i Kalmar AB</td>
                        <td width="198">EU</td>
                        <td width="198">–</td>
                        <td width="199">Bookkeeping and accounting</td>
                      </tr>
                      <tr>
                        <td width="198">Microsoft (Office 365)</td>
                        <td width="198">EU/EEA/ United States</td>
                        <td width="198">
                          Certification according to EU-U.S Privacy Shield
                          Framework
                        </td>
                        <td width="199">Cloud computing, storage and backup</td>
                      </tr>
                      <tr>
                        <td width="198">Netintegrate Sweden AB</td>
                        <td width="198">EU</td>
                        <td width="198">–</td>
                        <td width="199">It Support</td>
                      </tr>
                      <tr>
                        <td width="198">P &amp; K TimeApp AB (TimeApp)</td>
                        <td width="198">EU</td>
                        <td width="198">–</td>
                        <td width="199">Time tracking and invoicing</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <br />
                  <p>
                    {t("transfer3")} <br /> <br /> {t("transfer4")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${expandedBullets[4] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(4)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Rights for registered")}
                </span>
                {expandedBullets[4] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[4] ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  
                    <p>
                      <span style={{ color: "#00AEEF" }} target="_blank" href="#">{t("right1")}</span>
                      {t("right2")}
                    </p>
                    <br />
                    <p>
                      <span style={{ color: "#00AEEF" }} target="_blank" href="#">{t("right3")}</span>
                      {t("right4")}
                    </p>{" "}
                    <br />
                    <p>
                      <span style={{ color: "#00AEEF" }} target="_blank" href="#">{t("right5")}</span>
                      {t("right6")}
                    </p>{" "}
                    <br />
                    <p>
                      <span style={{ color: "#00AEEF" }} target="_blank" href="#">{t("right7")}</span>
                      {t("right8")}
                    </p>{" "}
                    <br />
                    <p>
                      <span style={{ color: "#00AEEF" }} target="_blank" href="#">{t("right9")}</span>
                      {t("right10")}
                    </p>{" "}
                    <br />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${expandedBullets[5] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(5)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Security")}
                </span>
                {expandedBullets[5] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[5] ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <p className="regular grey">{t("security1")}</p>
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${expandedBullets[6] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(6)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Cookies")}
                </span>
                {expandedBullets[5] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[5] ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <p className="regular grey">{t("cookie1")} <br /> <br />{t("cookie2")}</p>
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${expandedBullets[7] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(7)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Changes to this data protection policy")}
                </span>
                {expandedBullets[5] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[5] ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <p className="regular grey">{t("protect1")} <br /> <br /> {t("protect2")}</p>
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${expandedBullets[8] && "open"}`}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
                onClick={() => setExpanded(8)}
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Contact")}
                </span>
                {expandedBullets[5] ? (
                  <AiOutlineMinusCircle style={{ fill: "#00AEEF" }} />
                ) : (
                  <AiOutlinePlusCircle style={{ fill: "#00AEEF" }} />
                )}
              </div>
              <div
                className={`b-faq_list_item_content ${
                  expandedBullets[5] ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <p className="regular grey">{t("contact1")}</p><br />
                  <p>{t("contact2")} <a href="mailto:info@edmarlaw.se">{t("contact3")}</a> </p> <br />
                  <p>{t("contact4")} {" "} <a href="mailto:datainspektionen@datainspektionen.se">{t("contact5")}</a> {" "} {t("contact6")}</p>
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
