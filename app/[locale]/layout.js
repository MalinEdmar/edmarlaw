import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";
import { Lato } from "next/font/google";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "se" }];
}

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={lato.className}>
      <body className="md:max-w-6xl md:mx-auto h-full min-h-screen flex flex-col items-center">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
