import React from "react";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import LogoIcon from "@/components/utilities/LogoIcon/LogoIcon";
import PageWrapper from "@/components/utilities/PageWrapper";

export default function AboutPage() {
  return (
    <div className="h-screen w-full">
      <PageWrapper animationDirection="left">
        <PageTopSectionContainer>About!</PageTopSectionContainer>
        {/* @ts-expect-error Server Component */}
        <LogoIcon size={400} />
      </PageWrapper>
    </div>
  );
}
