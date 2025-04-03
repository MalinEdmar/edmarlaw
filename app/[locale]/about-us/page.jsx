"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("About");
  const tNew = useTranslations("NewAbout");
  return (
    <main className="w-full h-full flex flex-col px-6">
      <div className="flex flex-col lg:flex-row py-16">
        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          <h1 className="lg:text-6xl text-[32px] font-light text-[#00adee] pb-6">
            {t("About the law firm EdmarLaw")}
          </h1>
          <p className="lg:text-[22px] text-[18px] font-bold">{tNew("p2")}</p>
          <p>{tNew("p3")}</p>
          <p>{tNew("p4")}</p>
        </div>
        <div className="lg:w-1/2 flex justify-end lg:py-0">
          <Image
            className="object-contain lg:h-[500px] lg:py-0 py-10"
            src={"/edmarbild.png"}
            alt="Bild på Malin Edmar"
            width={800}
            height={1200}
          ></Image>
        </div>
      </div>
      <div className="bg-[#F5F5F5] relative flex flex-col items-center">
        <div className="absolute h-full bg-[#F5F5F5] !max-w-none !w-screen"></div>
        <div className="z-10 relative pt-20">
          <h1 className="lg:text-[40px] text-[28px] pb-12 font-bold lg:leading-[52px] leading-[40px]">
            {tNew("p5")} <br /> {tNew("p6")}
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-14">
            <div className="flex flex-col lg:pb-0 pb-14">
              <p>{tNew("p7")}</p>
              <br />
              <p>
                {tNew("p8")} {tNew("p9")}
              </p>
              <br />
              <p>{tNew("p10")}</p>
              <br />
              <p>{tNew("p11")}</p>
              <br />
              <p>{tNew("p12")}</p>
            </div>
            <div className="bg-white rounded lg:pl-4 lg:p-16 lg:pr-32 p-4 h-fit flex flex-col gap-y-2 lg:w-fit">
              <h3 className="text-[28px] w-max font-[500]">Malin Edmar</h3>
              <Link className="underline" href="mailto:malin.edmar@edmarlaw.se">
                malin.edmar@edmarlaw.se
              </Link>
              <Link href="tel:+46707111111">+46 76-774 2220</Link>
            </div>
          </div>
          <div>
            <div className="lg:pt-36 pt-14">
              <h4 className="text-[32px] font-bold">{t("Experience")}</h4>
              <div className="flex flex-col gap-y-4 pt-8">
                <TableRow company={"GitHub, Inc"} year={"2021-2023"} />
                <TableRow company={"Advokatfirman EdmarLaw"} year={"2016 - "} />
                <TableRow company={"Advokatfirman Fylgia"} year={"2009-2015"} />
                <TableRow
                  company={"Advokatfirman Westermark Anjou"}
                  year={"2007-2008"}
                />
                <TableRow
                  company={"Microsoft Corporation, Redmond, WA"}
                  year={"2003-2006"}
                />
                <TableRow company={"Advokatfirman Delphi"} year={"1999-2002"} />
                <TableRow
                  company={"Kungliga Ingenjörsvetenskapsakademien (IVA)"}
                  year={"1997 - 1999"}
                />
                <TableRow
                  company={
                    "IT-kommittén Kulturnät Sverige, Kulturdepartementet"
                  }
                  year={"1996"}
                />
                <TableRow
                  company={"Åklagarmyndigheten i Varberg"}
                  year={"1996"}
                />
              </div>
            </div>
            <div className="lg:pt-36 pt-14">
              <h4 className="text-[32px] font-bold">{t("Publications")}</h4>
              <div className="flex flex-col gap-y-4 pt-8">
                <div className="flex flex-col">
                  <TableRow
                    link={true}
                    company={tNew("Författare till boken")}
                    year={"Norstedts Juridik, 7 uppl., 2021"}
                    linkTitle={"Internetpublicering och sociala medier"}
                    linkHref={
                      "https://shop.nj.se/products/internetpublicering-och-sociala-medier-1"
                    }
                  />
                  <div className="lg:flex gap-x-2 underline hidden font-semibold">
                    <Link
                      href={
                        "https://shop.nj.se/products/internetpublicering-och-sociala-medier-1"
                      }
                      target="_blank"
                    >
                      Internetpublicering och sociala medier
                    </Link>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <TableRow
                    link={true}
                    company={"Edmar, Malin;"}
                    year={"Norstedts Juridik, 2015"}
                    linkTitle={t("Online education on Internet publishing")}
                    linkHref={
                      "https://www.nj.se/ekurs-internetpublicering-och-sociala-medier"
                    }
                  />
                  <div className="lg:flex gap-x-2 underline hidden font-semibold">
                    <Link
                      href={
                        "https://www.nj.se/ekurs-internetpublicering-och-sociala-medier"
                      }
                      target="_blank"
                    >
                      {t("Online education on Internet publishing")}
                    </Link>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <TableRow
                    link={true}
                    company={tNew("Medförfattare till boken")}
                    year={"Norstedts Juridik, 2014"}
                    linkTitle={t("Domain Names – Strategies and Legal Aspects")}
                    linkHref={"https://shop.nj.se/products/domannamn"}
                  />
                  <div className="lg:flex lg:flex-col gap-y-1 underline hidden font-semibold">
                    <div className="lg:flex gap-x-2 underline hidden font-semibold">
                      <Link 
                        href={"https://shop.nj.se/products/domannamn"}
                        target="_blank"
                      >
                        {t("Domain Names – Strategies and Legal Aspects")}
                      </Link>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </div>
                    <div className="lg:flex gap-x-2 underline hidden font-semibold">
                      <Link
                        href={
                          "https://www.sweetandmaxwell.co.uk/Product/Dispute-Resolution/Domain-Names-Strategies-and-Legal-Aspects/Hardback-and-eBook-ProView/42960040"
                        }
                        target="_blank"
                      >
                        {t("Also available in English")}
                      </Link>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <TableRow
                    link={true}
                    company={tNew("Redaktör och medförfattare till boken")}
                    year={"Jure, 2012"}
                    linkTitle={t("The Twilight Zone of Intellectual Property,")}
                    linkHref={
                      "https://www.jure.se/ns/default.asp?url=visatitel.asp?tuid=17706"
                    }
                  />
                  <div className="lg:flex gap-x-2 underline hidden font-semibold">
                    <Link
                      href={
                        "https://www.jure.se/ns/default.asp?url=visatitel.asp?tuid=17706"
                      }
                      target="_blank"
                    >
                      {t("The Twilight Zone of Intellectual Property,")}
                    </Link>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

function TableRow({ company, year, link, linkTitle, linkHref, swedishLink }) {
  return (
    <div className="flex gap-x-8 flex-col lg:flex-row lg:gap-y-2">
      <div className="lg:w-1/2 w-full font-semibold">{company}</div>
      {link && (
        <div className="flex gap-x-2 underline lg:hidden font-semibold">
          <Link href={linkHref}>{linkTitle}</Link>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
              fill="#1D1D1D"
            />
          </svg>
        </div>
      )}
      <div className="lg:w-1/2 w-full font-light italic">{year}</div>
    </div>
  );
}

export default Page;
