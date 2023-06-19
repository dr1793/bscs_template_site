import React from "react";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";

export default function OurTeam() {
  const pageList = useStore.getState().pageInfo;

  return (
    <PageWrapper pageNo={pageList.findIndex((page) => page.href == "our-team")}>
      <div className=" w-full">
        <PageTopSectionContainer>Our Team!</PageTopSectionContainer>
      </div>
    </PageWrapper>
  );
}
