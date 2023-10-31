import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { getRevalidateQuery } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import BSCSButton from "@/components/utilities/button";
import SectionContainer from "@/components/HomePageSections/Section";
import { Document } from '/Users/david/Desktop/t_site/bscs-template/node_modules/@contentful/rich-text-types/dist/types/types';
import MailingListCTABanner from "@/components/MailingListCTABanner";
import { sign } from "crypto";


type CenterImage = {
  __typename: string;
  url: string;
};

type PageCard = {
  __typename: string;
  centerImage: CenterImage;
  largeText: string;
  subText: string;
  buttonText: string;
  buttonHref: string;
};


type RichText = {
  __typename: 'PageCardTypeBRichText';
  json: Document;
};

type PageCardTypeB = {
  __typename: 'PageCardTypeB';
  centerImage: CenterImage | null;
  largeText: string;
  subText: string | null;
  buttonText: string | null;
  richText: RichText | null;
  buttonHref: string | null;
  textAlign: 'left' | 'right' | 'center';
};


export default async function Home() {
  //Use a promise and a timeout to make the backdrop last a second longer
  const { data } = await getRevalidateQuery(query);
  const hero = data?.homeCollection?.items[0];

  const headerFontSize = `calc(${(7 - 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `calc(${(4 - 1) * 1.2}vw + 1rem)`;

  const firstSectionData = data?.pageCardCollection?.items;

  const middleSectionData = data?.pageCardTypeBCollection?.items;

  const signUpCardData = data?.pageCardSignUp

  console.log(signUpCardData)

  return (
    <React.Fragment>
      <main>
        <div
          className="h-screen bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${hero.picture.url})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"> </div>
          <div className="relative p-4 text-white flex flex-col items-center justify-center h-full">
            <p
              className="text-white font-grotesk"
              style={{ fontSize: headerFontSize }}
            >
              {hero.header}
            </p>
            <p
              className="text-bscs-yellow font-grotesk"
              style={{ fontSize: subheaderFontSize }}
            >
              {hero.headerSubText}
            </p>
          </div>
        </div>
        {/* {'First Section'} */}
        <div
          className={`bg-bscs-yellow-bright text-black flex flex-row px-6 py-10 w-full`}
          style={{ height: "50vh" }}
        >
          {firstSectionData.map((pageCard: PageCard, i: number) => {
            return (
              <div
                key={i}
                className={`flex flex-1 flex-col items-center h-full`}
              >
                <div className="h-1/2 w-4/5">
                  <div
                    className="flex-2 bg-white flex justify-center items-center"
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      fill
                      quality={100}
                      src={pageCard.centerImage.url}
                      alt={`swap image ${i}`}
                      style={{
                        objectFit: 'cover',
                        objectPosition: '50% 25%',
                      }}
                      sizes="100vh"
                    />
                  </div>
                  <div className="flex-2 flex flex-col align-end h-full mt-2">
                    <div className="flex-1 flex justify-center items-center font-oswald text-center font-bold sm:text-3xl">
                      {pageCard.largeText}
                    </div>
                    <div className="flex-1 flex justify-center items-start font-oswald text-center text-xs sm:text-sm">
                      {pageCard.subText}
                    </div>
                    <div className="flex flex-2 justify-center items-center">
                      <BSCSButton
                        type="primary"
                        size="reg"
                        text={pageCard.buttonText}
                        href={pageCard.buttonHref}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Second Section */}
        <Banner id="home" imageURL={data?.homeBannerImage?.image.url} tailwindHeight="h-[45vh]"></Banner>
        {/* Middle section */}
        <div
          className={`bg-bscs-orange text-white font-oswald flex flex-col p-6 w-full lg:px-60`}
          style={{}}
        >
          {
            middleSectionData.map((sectionCard: PageCardTypeB, i: number) => {

              return (
                <div
                  key={i}
                  className={`flex flex-1 my-3 sm:my-0 flex-col items-center h-full`}
                >
                  <SectionContainer
                    largeText={sectionCard.largeText}
                    imageURL={sectionCard?.centerImage?.url}
                    subText={sectionCard?.subText}
                    textAlign={sectionCard?.textAlign}
                    richText={sectionCard?.richText?.json}
                    buttonHref={sectionCard?.buttonHref}
                    buttonText={sectionCard?.buttonText}
                    index={i}
                  />
                </div>
              )
            })
          }
        </div>
        <div
          className={`bg-bscs-hot-purple text-white font-oswald flex flex-col p-6 w-full`}
          style={{}}
        >
          <Carousel id="selected-works"></Carousel>
        </div>
        <div
          className={`bg-bscs-yellow-bright font-oswald text-black flex flex-row items-center px-6 pb-4 pt-0 w-full lg:px-60`}
          style={{ height: "40vh" }}
        >
          <SectionContainer
            largeText={signUpCardData.largeText}
            imageURL={signUpCardData.centerImage?.url}
            subText={signUpCardData.subText}
            textAlign={signUpCardData.textAlign}
          >
            <MailingListCTABanner
              className=""
              buttonText={signUpCardData.buttonText}
              placeholder={signUpCardData.placeholder}
            />
          </SectionContainer>
        </div>
      </main>
    </React.Fragment>
  );
}

const query = gql`
  query pageQuery {
    homeCollection (limit: 10){
      items {
        header
        headerSubText
        picture {
          url
        }
      }
    }
    pageCardCollection (limit: 5){
      items {
        centerImage {
          url
        }
        largeText
        subText
        buttonText
        buttonHref
      }
    }
    homeBannerImage (id: "5vXU18h0iaKOEtWMzrDOmL"){
      image{
        url
      }
    }
    pageCardSignUp (id: "7ukjaOiOijS3UsK64czzOS"){
        centerImage {
          url
        }
        largeText
        subText
        textAlign
        buttonText
        inputPlaceholder
    }
    pageCardTypeBCollection (limit:10, order: order_ASC){
      items {
        centerImage {
          url
        }
        largeText
        subText
        buttonText
        richText {
          json
        }
        buttonHref
        largeText
        textAlign
      }
    }
  }
`;
