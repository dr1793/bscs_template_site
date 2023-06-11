import React from "react";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import Link from "next/link";

export default function EventMusts() {
  return (
    <div className="h-screen w-full">
      <PageTopSectionContainer>Upcoming Events</PageTopSectionContainer>
      <Link href="/event-musts/events"> Events </Link>
    </div>
  );
}
