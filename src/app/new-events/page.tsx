import React from "react";
import Link from "next/link";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";

export default function EventMusts() {
  const pageList = useStore.getState().pageInfo;

  return (
    <PageWrapper pageNo={pageList.findIndex((page) => page.href == "new-events")}>
      <div className="h-screen w-full">
        <PageTopSectionContainer>Upcoming Events</PageTopSectionContainer>
        <Link href="new-events/events"> Events </Link>
      </div>
    </PageWrapper>
  );
}
