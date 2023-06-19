import React from "react";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";

export default function Gallery() {
  const pageList = useStore.getState().pageInfo;

  return (
    <PageWrapper
      pageNo={pageList.findIndex((page) => page.href == "gallery")}
    >
      <div className=" w-full">
        <PageTopSectionContainer>Gallery</PageTopSectionContainer>
      </div>
    </PageWrapper>
  );
}
