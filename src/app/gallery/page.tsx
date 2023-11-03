import React from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";
import CalendarComponent from "@/components/Calendar/CalendarComponent";
import { getRevalidateQuery } from "@/lib/apolloClient";
import PageBannerSection from "@/components/utilities/PageBannerSection/PageBannerSection";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '../../../node_modules/@contentful/rich-text-types/dist/types/types';
import Box from "@mui/material/Box";

export default async function Gallery() {
  const pageList = useStore.getState().pageInfo;

  const { data } = await getRevalidateQuery(query);
  const headerFontSize = `calc(${(7 - 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `text-2xl`;
  const hero = data?.banner;

  const galleryPictures = data?.backGalleryPicsCollection?.items

  return (
    <PageWrapper
      pageNo={pageList.findIndex((page) => page.href == "gallery")}
    >
      <PageBannerSection
        hero={hero}
        headerFontSize={headerFontSize}
        subheaderFontSize={subheaderFontSize}
      />
      <div className=" w-full bg-bscs-yellow">
        <PageTopSectionContainer>
            <ImageList variant="masonry" cols={4} gap={6}>
              {galleryPictures.map((item: { bigImage: { url: string; }; title: string; }) => (
                // <Image
                //   fill
                //   src={`${item.bigImage.url}`}
                //   alt={item.title}
                //   sizes="20vw"
                //   loading="lazy"
                // />
                <ImageListItem key={item.bigImage.url}>
                  <img
                    src={`${item.bigImage.url}`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
        </PageTopSectionContainer>
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
    backGalleryPicsCollection (limit: 25, order:orderNumber_ASC){
      items {
        title
        bigImage {
          url
        }
        orderNumber
      }
    }
  }
`