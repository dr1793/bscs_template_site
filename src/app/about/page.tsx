import React from "react";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import LogoIcon from "@/components/utilities/LogoIcon/LogoIcon";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";

export default function AboutPage() {
  const pageList = useStore.getState().pageInfo

  return (
    <PageWrapper pageNo={pageList.findIndex((page) => page.href == "about")}>
      <div className="h-screen w-full">
        <PageTopSectionContainer>About!</PageTopSectionContainer>
        {/* @ts-expect-error Server Component */}
        <LogoIcon size={400} />
      </div>
    </PageWrapper>
  );
}
