"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Global/Hero";
import Intro from "@/components/Home/Intro";
import AreaOFExpertise from "@/components/Home/AreaOFExpertise";
import References from "@/components/Home/References";
import Publisher from "@/components/Home/Publisher";
import "slick-carousel/slick/slick.css";


import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <main>
      <Hero title={"edmar"} logoImg={"logo"} isEdmr={true} />
      <Intro />
      <AreaOFExpertise />
      <References />
      <Publisher />
    </main>
  );
}
