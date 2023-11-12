import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getRevalidateQuery } from "@/lib/apolloClient";
import { addHTTPs, createSlug } from "@/lib/utilityFunctions";
import { contentfulEventObject } from "@/components/Calendar/types";
import { gql } from "@apollo/client";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BSCSButton from "@/components/utilities/button";
import {
  parseISO,
  format,
} from "date-fns";

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

  const backButton =
    <div className="flex flex-row text-center align-center justify-center">
      <ChevronLeftIcon className="h-8 w-8 z-10 -ml-2" />
      <div className="flex flex-col justify-center mb-1 mr-1">
        BACK
      </div>
    </div>

  return (
    <React.Fragment>
      <div className="h-[93vh] lg:h-[120vh] bg-bscs-yellow">
        <div className="relative px-6 pb-10 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg pt-16">
            <BSCSButton href="/new-events" text={backButton} type="primary" size="reg" />
          </div>
        </div>
        <div className="px-12 flex flex-col sm:flex-row h-[50vh]">
          <div className="flex flex-1">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Link href={addHTTPs(event.eventbriteLink)}>
                <Image
                  src={event.flierPic.url}
                  alt={`${event.displayField}`}
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between lg:mr-20">
            <p className="font-bold">{JSON.stringify(event.displayField)}</p>
            <p className="italic">{(format(parseISO(event.datetime), "MMMM d, yyyy 'at' h a"))}</p>
            <text>
              {documentToReactComponents(event.description.json)}
            </text>
            <a className="link link-primary text-center" href={addHTTPs(event.eventbriteLink)}>
              {" "}
              RSVP here!
            </a>
            <br />
          </div>
        </div>
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
    eventCollection (limit: 20) {
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
        description {
          json
        }
        picture {
          url
        }
        eventbriteLink
        flierPic {
          url
        }
      }
    }
  }
`;
