import React from "react";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";

export default function AboutPage() {
  const pageList = useStore.getState().pageInfo

  return (
    <PageWrapper pageNo={pageList.findIndex((page) => page.href == "about")}>
      <div className=" w-full">
        <PageTopSectionContainer>Not about!</PageTopSectionContainer>
      </div>
    </PageWrapper>
  );
}
