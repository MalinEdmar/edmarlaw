import { useTranslations } from "next-intl";
import React from "react";

const Information = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <h1 >{t("Information Obligation")}</h1>{" "}
      <br />
      <h2>{t("Requirements to provide information")}</h2>
      <p>{t("info1")}</p>
      <br />
      <p>{t("info2")}</p>
      <br />
      <ul>
        <li>{t("infoList1")}</li>
        <li>{t("infoList2")}</li>
        <li>{t("infoList3")}</li>
        <li>{t("infoList4")}</li>
        <li>{t("infoList5")}</li>
        <li>{t("infoList6")}</li>
        <li>{t("infoList7")}</li>
      </ul>
      <br />
      <p>{t("info3")}</p>
      <br />
      <h2>{t("Data Records")}</h2>
      <br />
      <p>
        {t("data1")} <br /> <br />
        {t("data2")}
      </p>
    </div>
  );
};

export default Information;
