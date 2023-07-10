import { useTranslations } from "next-intl";
import React from "react";

const Process = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <h1>{t("Data Processors")}</h1>
      <br />
      <p>{t("process1")}</p> <br />
      <h2>1. {t("Due diligence ur ett dataskyddsperspektiv")}</h2> <br />
      <p>{t("processD1")}</p> <br />
      <h2>2. {t("Personuppgiftsbiträdesavtalet")}</h2> <br />
      <p>{t("processD2")}</p>
      <br />
      <h2>3. {t("Uppföljning")}</h2> <br />
      <p>
        {t("processD3")} <br />
        <br />
        {t("processD4")}
      </p>
    </div>
  );
};

export default Process;
