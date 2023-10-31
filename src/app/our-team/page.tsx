import React from "react";
import Image from "next/image";
import PageWrapper from "@/components/utilities/PageWrapper";
import { gql } from "@apollo/client";
import { useStore } from "@/state/store";
import { getRevalidateQuery } from "@/lib/apolloClient";
import PageBannerSection from "@/components/utilities/PageBannerSection/PageBannerSection";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '../../../node_modules/@contentful/rich-text-types/dist/types/types';

type RichText = {
  __typename: 'PageCardTypeBRichText';
  json: Document;
};

type TeamCard = {
  __typename: string;
  bioImage: {
    __typename: string;
    url: string;
  },
  memberName: string;
  bio: RichText | null;
  pronouns: string;
  title: string;
};

export default async function OurTeam() {
  const pageList = useStore.getState().pageInfo;

  const { data } = await getRevalidateQuery(query);
  const headerFontSize = `calc(${(7 - 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `text-2xl`;
  const hero = data?.banner;
  const teamCards = data?.teamCardCollection?.items;

  return (
    <PageWrapper pageNo={pageList.findIndex((page) => page.href == "our-team")}>
      <PageBannerSection
        hero={hero}
        headerFontSize={headerFontSize}
        subheaderFontSize={subheaderFontSize}
      />
      <ul className={`w-full bg-bscs-yellow text-white font-oswald flex flex-row p-10 flex-wrap justify-center`}>
        {teamCards.map((teamCard: TeamCard, i: number) => {
          return (
            <div key={i} className="text-black w-1/3 px-5">
              <Image
                quality={100}
                width={50}
                height={50}
                src={teamCard.bioImage.url}
                alt={`${teamCard.memberName} pic`}
              />
              <p className="text-bscs-orange font-bold">{teamCard.memberName.toUpperCase()}</p>
              <p>{teamCard.title}</p>
              <p className="py-3">{teamCard.pronouns}</p>
              <p>{teamCard.bio?.json && documentToReactComponents(teamCard.bio?.json)}</p>
            </div>
          )
        })}
      </ul>
    </PageWrapper >
  );
}

const query = gql`
  query teamPageQuery{
      banner(id: "2kNDG3PPj57OxpwR0sFJIV"){
          centerImage{
            url
          }
          largeText
          richText {
            json
          }
          textAlign
        }
      teamCardCollection(limit: 10, order:order_ASC){
        items {
          bioImage {
            url
          }
          memberName
          bio {
            json
          }
          pronouns
          title
        }
      }
    }
`