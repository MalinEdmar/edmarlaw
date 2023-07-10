import Hero from "@/components/Global/Hero";
import References from "@/components/References/References";
import TypicalAssignment from "@/components/References/TypicalAssignment";
import React from "react";

const page = () => {
  return (
    <main style={{overflow:"hidden"}}>
      <Hero isEdmr={false} title={"References"} />
      <References />
      <TypicalAssignment />
    </main>
  );
};

export default page;
