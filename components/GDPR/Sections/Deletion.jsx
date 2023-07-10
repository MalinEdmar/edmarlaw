import { useTranslations } from "next-intl";
import React from "react";

const Deletion = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <h1>{t("Deletion of Personal Data and Keeping a Data Register")}</h1>
      <br />
      <p>{t("delete1")}</p> <br />
      <p>{t("delete2")}</p>
    </div>
  );
};

export default Deletion;
