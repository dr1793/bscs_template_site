import React from 'react'
import { gql } from "@apollo/client";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";
import { getRevalidateQuery } from "@/lib/apolloClient";
import PageBannerSection from "@/components/utilities/PageBannerSection/PageBannerSection";
import GalleryPageGallery from './GalleryPageGallery';

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
          <div className=" w-full bg-bscs-yellow pt-10 px-5">
            <GalleryPageGallery
              galleryPictures={galleryPictures}
            />
          </div>
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