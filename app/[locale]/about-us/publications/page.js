"use client"
import About from "@/components/About/About";
import Associations from "@/components/About/Associations";
import MalinEdmar from "@/components/About/MalinEdmar";
import Hero from "@/components/Global/Hero";
import AreaOFExpertise from "@/components/Home/AreaOFExpertise";
import Publications from "@/components/publications/Publications";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero isEdmr={false} title={"Publications"} />
      <Publications />
    </main>
  );
};

export default page;
