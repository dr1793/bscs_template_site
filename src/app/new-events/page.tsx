import React from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";
import CalendarComponent from "@/components/Calendar/CalendarComponent";
import { getRevalidateQuery } from "@/lib/apolloClient";
import PageBannerSection from "@/components/utilities/PageBannerSection/PageBannerSection";

export default async function EventMusts() {
  const pageList = useStore.getState().pageInfo;

  const { data } = await getRevalidateQuery(query);
  const headerFontSize = `calc(${(7 - 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `text-2xl`;
  const hero = data?.banner;

  return (
    <PageWrapper
      pageNo={pageList.findIndex((page) => page.href == "new-events")}
    >
      <PageBannerSection
        hero={hero}
        headerFontSize={headerFontSize}
        subheaderFontSize={subheaderFontSize}
      />
      <div className="w-full p-10 pt-20 ">
        {/* @ts-expect-error Server Component */}
        <CalendarComponent />
      </div>
    </PageWrapper>
  );
}


const query = gql`
  query teamPageQuery{
    banner(id: "41vh2lq9dx8Q97yokzsBep"){
      centerImage{
        url
      }
      largeText
      richText {
        json
      }
      textAlign
    }
  }
`