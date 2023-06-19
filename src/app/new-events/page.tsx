import React from "react";
import Link from "next/link";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";
import CalendarComponent from "@/components/Calendar/CalendarComponent";

export default async function EventMusts() {
  const pageList = useStore.getState().pageInfo;

  return (
    <PageWrapper
      pageNo={pageList.findIndex((page) => page.href == "new-events")}
    >
      <div className="w-full">
        <PageTopSectionContainer>Upcoming Events</PageTopSectionContainer>
        {/* @ts-expect-error Server Component */}
        <CalendarComponent />
      </div>
    </PageWrapper>
  );
}
