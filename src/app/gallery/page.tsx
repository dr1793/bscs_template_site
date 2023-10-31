import React from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";
import CalendarComponent from "@/components/Calendar/CalendarComponent";
import { getRevalidateQuery } from "@/lib/apolloClient";
import PageBannerSection from "@/components/utilities/PageBannerSection/PageBannerSection";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '../../../node_modules/@contentful/rich-text-types/dist/types/types';

export default async function Gallery() {
  const pageList = useStore.getState().pageInfo;

  const { data } = await getRevalidateQuery(query);
  const headerFontSize = `calc(${(7 - 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `text-2xl`;
  const hero = data?.banner;

  return (
    <PageWrapper
      pageNo={pageList.findIndex((page) => page.href == "gallery")}
    >
      <PageBannerSection
        hero={hero}
        headerFontSize={headerFontSize}
        subheaderFontSize={subheaderFontSize}
      />
      <div className=" w-full">
        <PageTopSectionContainer>Gallery</PageTopSectionContainer>
      </div>
    </PageWrapper>
  );
}


const query = gql`
  query teamPageQuery{
    banner(id: "7CH3jDANQAjAJTYtydcQOz"){
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