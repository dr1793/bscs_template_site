import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getRevalidateQuery } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import BSCSButton from "@/components/utilities/button";
import SectionContainer from "@/components/HomePageSections/Section";
import { Document } from '../../node_modules/@contentful/rich-text-types/dist/types/types';
import MailingListCTABanner from "@/components/MailingListCTABanner";
import ScrollableDiv from "@/components/utilities/ScrollableDiv";


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
  const { data } = await getRevalidateQuery(query);
  const hero = data?.homeCollection?.items[0];

  const headerFontSize = `calc(${(7 - 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `calc(${(4 - 1) * 1.2}vw + 1rem)`;

  const firstSectionData = data?.pageCardCollection?.items;
  const middleSectionTop = data?.pageCardTypeBCollection?.items[0];
  const middleSectionData = data?.pageCardTypeBCollection?.items.slice(1)
  const signUpCardData = data?.pageCardSignUp;
  const galleryImages = data?.galleryImageCollection.items;






  return (
    <React.Fragment>
      <main>
        <div
          className="h-screen bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${hero.picture.url})`,
          }}
        >
          <ScrollableDiv className="h-[100vh] text-white flex justify-center text-center">
            <div className="absolute inset-0 bg-black opacity-25" />
            <div className="relative p-4  flex flex-col items-center justify-center h-full">
              <p
                className="font-grotesk"
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
          </ScrollableDiv>
        </div>
        {/* {'First Section'} */}
        <div
          className={`bg-bscs-yellow-bright text-black flex flex-row px-6 py-10 w-full h-[60vh] lg:h-[60vh]`}
          style={{
            minHeight: "350px"

          }}
        >
          {firstSectionData.map((pageCard: PageCard, i: number) => {
            return (
              <div
                key={i}
                className={`flex flex-1 flex-col justify-around items-center h-full`}
              >
                <div className="h-3/5 w-4/5 lg:w-2/3 "
                >
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
                </div>
                <div className="flex flex-col items-center mt-2 justify-between">
                  <div className="flex-1 flex justify-center items-center font-oswald text-center font-bold sm:text-3xl mb-4">
                    {pageCard.largeText}
                  </div>
                  <div className="flex-1 flex justify-center items-start font-oswald text-center text-xs sm:text-sm mb-2">
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
            );
          })}
        </div>
        {/* Second Section */}
        <Banner id="home" imageURL={data?.homeBannerImage?.image.url} tailwindHeight="h-[45vh]"></Banner>
        {/* Middle section */}
        <div className={`bg-bscs-orange text-white font-oswald flex flex-col p-6 w-full lg:px-60`} >
          <div className="h-[30vh] text-2xl md:text-5xl font-bold mb-9">
            <div className="flex flex-row h-2/3 justify-center items-center ">
              {middleSectionTop?.largeText.replace('...', "")}
              <div
                className="flex-2 bg-white flex justify-center items-center hover:animate-bounce"
                style={{
                  width: "50%",
                  height: "55%",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <Link href={'/new-events'}>
                  <Image
                    className="bg-bscs-orange"
                    fill
                    src={middleSectionTop?.centerImage?.url}
                    alt={`swap image`}
                    style={{
                      // backgroundColor: '#E55937',
                      objectFit: 'fill',
                    }}
                    sizes="30vh"
                  />
                </Link>
              </div>
              Is:
            </div>
            <div className="text-center text-gray-500 hover:text-white transition-colors duration-300">
              <Link href={'/new-events'}>
                <BSCSButton
                  type="secondary"
                  size="lg"
                  text={middleSectionTop?.subText.trim()}
                />
              </Link>
            </div>
          </div>
          {
            middleSectionData.map((sectionCard: PageCardTypeB, i: number) => {

              return (
                <div
                  key={i}
                  className={`flex flex-1 my-3 sm:my-0 flex-col items-center h-full pb-8 mb-8`}
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
          className={`bg-bscs-hot-purple text-white font-oswald flex flex-col p-6 w-full h-auto]`}
          style={{}}
        >
          <Carousel id="selected-works" pictureURLs={galleryImages} ></Carousel>
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
    pageCardCollection (limit: 5, order:largeText_DESC){
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
    galleryImageCollection (limit:12, order: title_ASC) {
      items {
        title
        src {
          url
        }
      }
    }
  }
`;
