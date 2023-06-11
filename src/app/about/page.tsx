import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import LogoIcon from "@/components/utilities/LogoIcon/LogoIcon";
import React from "react";

export default function AboutPage() {
  return (
    <div className="h-screen w-full">
      <PageTopSectionContainer>About!</PageTopSectionContainer>
      {/* @ts-expect-error Server Component */}
      <LogoIcon size={400} />
    </div>
  );
}
