import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import Link from "next/link";

export default function EventsPage() {
  return (
    <React.Fragment>
      <PageTopSectionContainer>EventsPage</PageTopSectionContainer>
      <Link href="/event-musts"> {"<"} </Link>
    </React.Fragment>
  );
}
