import React from "react";
import Link from "next/link";
import { getRevalidateQuery } from "@/lib/apolloClient";
import { addHTTPs, createSlug } from "@/lib/utilityFunctions";
import { contentfulEventObject } from "@/components/Calendar/types";
import { gql } from "@apollo/client";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";

export const dynamicParams = false;

type EventsPageProps = {
  params: {
    __typename: string;
    displayField: string;
    datetime: string;
    googleCalendarLink: string;
    linkToIcsFile: string;
    location: {
      __typename: string;
      lat: number;
      lon: number;
    };
    description: string;
    picture: {
      __typename: string;
      url: string;
    };
    eventbriteLink: string;
  };
};

export default async function EventsPage({
  params,
}: {
  params: { events: string };
}) {
  const { events } = params;

  const { data } = await getRevalidateQuery(pageQuery);

  const event = data.eventCollection.items.find(
    (event: contentfulEventObject) => createSlug(event.sys.id) === events
  );

  return (
    <React.Fragment>
      <PageTopSectionContainer>EventsPage</PageTopSectionContainer>
      <div className="px-12">
        <p>{JSON.stringify(event.displayField)}</p>
        <a className="link link-primary" href={addHTTPs(event.eventbriteLink)}>
          {" "}
          Here is the link to our eventbrite!
        </a>
        <br />
      </div>
      <div className="px-8 py-10">
        <Link className="link link-hover" href="/new-events">
          {" "}
          {"<"}{" "}
        </Link>
      </div>
    </React.Fragment>
  );
}

export async function generateStaticParams() {
  const { data } = await getRevalidateQuery(routeQuery);
  const events: contentfulEventObject[] = data.eventCollection.items;

  return events.map((event) => ({
    events: createSlug(event.sys.id),
  }));
}

const routeQuery = gql`
  query eventCollectionQuery {
    eventCollection {
      items {
        sys {
          id
        }
      }
    }
  }
`;

const pageQuery = gql`
  query eventCollectionQuery {
    eventCollection {
      items {
        sys {
          id
        }
        displayField
        datetime
        googleCalendarLink
        linkToIcsFile
        location {
          lat
          lon
        }
        description
        picture {
          url
        }
        eventbriteLink
      }
    }
  }
`;
