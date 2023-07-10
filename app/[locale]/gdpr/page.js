"use client"
import { GDPR } from "@/components/GDPR/GDPR";
import Hero from "@/components/Global/Hero";
import React from "react";

const page = () => {
  return (
    <main Style={{overflow:"hidden"}}>
        <Hero isEdmr={true} logoImg={"logoedmr"} title={"GDPR"} />
      <GDPR />
    </main>
  );
};

export default page;
