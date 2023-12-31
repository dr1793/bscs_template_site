import React from "react";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";
import { getRevalidateQuery } from "@/lib/apolloClient";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { gql } from "@apollo/client";
import './styles.css';
import SectionContainer from "@/components/AboutPageSections/Section";
import PageBannerSection from "@/components/utilities/PageBannerSection/PageBannerSection";

export default async function AboutPage() {
  const pageList = useStore.getState().pageInfo
  const { data } = await getRevalidateQuery(query);

  const headerFontSize = `calc(${(7 - 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `text-2xl`;

  const hero = data?.banner;
  const [card1, card2] = data?.aboutPageCardCollection?.items;
  const rules = data?.aboutPageRules;

  return (
    <PageWrapper pageNo={pageList.findIndex((page) => page.href == "about")}>
      <PageBannerSection
        hero={hero}
        headerFontSize={headerFontSize}
        subheaderFontSize={subheaderFontSize}
      />
      <div className={`w-full bg-bscs-hot-purple text-white font-oswald flex justify-center`}>
        <SectionContainer
          largeText={card1.largeText}
          imageURL={card1.centerImage.url}
          richText={card1.richText?.json}
          textAlign={card1.textAlign}
        />
      </div>
      <div className={`w-full bg-bscs-orange text-white font-oswald flex justify-center`}>
        <SectionContainer
          largeText={card2.largeText}
          imageURL={card2.centerImage.url}
          richText={card2.richText?.json}
          textAlign={card2.textAlign}
          buttonHref={card2.buttonHref}
          buttonText={card2.buttonText}
        />
      </div>
      <div className={`w-full text-white font-oswald`}>
        <div className="h-screen bg-center bg-cover bg-no-repeat custom-list r"
          style={{
            backgroundImage: `url(${rules.centerImage.url})`,
          }}>
          <div className="bg-black bg-opacity-40 h-full w-full  flex flex-col justify-center items-center">
            <div className={`flex flex-col items-center justify-center text-center xl:w-[70vw]`}>
              <p
                className="text-white font-grotesk"
                style={{ fontSize: headerFontSize }}
              >
                {rules.largeText}
              </p>
            </div>
            <div className="md:text-3xl px-10 xl:w-[70vw]">
              {documentToReactComponents(rules.richText?.json)}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

const query = gql`
  query aboutPageQuery{
      banner(id: "4vG5ivEYJAujQ2pZ1VuzlR"){
          centerImage{
            url
          }
          largeText
          richText {
            json
          }
          textAlign
        }
      aboutPageCardCollection(limit: 5, order: order_ASC){
        items {
          centerImage {
            url
          }
          largeText
          richText {
            json
          }
          textAlign
          buttonText
          buttonHref
        }
      }
      aboutPageRules(id: "4KzMmfgLS628AcYErEg9Lp") {
        centerImage {
          url
        }
        largeText
        subText
        richText {
          json
        }
        textAlign
      }
    }
`