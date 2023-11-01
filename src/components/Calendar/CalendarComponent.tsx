import React from "react";
import { gql } from "@apollo/client";
import { getRevalidateQuery } from "@/lib/apolloClient";
import Link from "next/link";
import {
  compareAsc,
  eachDayOfInterval,
  eachMonthOfInterval,
  parseISO,
  startOfMonth,
  format,
  endOfMonth,
  endOfWeek,
  startOfWeek,
} from "date-fns";
import { contentfulEventObject, Day, Month } from "./types";
import CalendarSection from "./CalendarSection";
import { createSlug } from "@/lib/utilityFunctions";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { before } from "node:test";

type contentfulEventObjectWithSlug = contentfulEventObject & {
  slug: string;
};

const getDaysfromMonthDate = (monthDate: Date): Day[] => {
  return eachDayOfInterval({
    start: startOfWeek(startOfMonth(monthDate)),
    end: endOfWeek(endOfMonth(monthDate)),
  }).map((date) => ({
    date: format(date, "yyyy-MM-dd"),
  }));
};

function monthsFromContentfulEvents(events: contentfulEventObject[]): Month[] {
  let months = eachMonthOfInterval({
    start: startOfMonth(parseISO(events[0].datetime)),
    end: startOfMonth(parseISO(events[events.length - 1].datetime)),
  }).map((monthDate) => ({
    name: format(monthDate, "MMMM yyyy"),
    days: getDaysfromMonthDate(monthDate),
  }));

  return months;
}

function splitEventsByDate(events: contentfulEventObjectWithSlug[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);  // set time to midnight to only compare the date

  const beforeToday: contentfulEventObjectWithSlug[] = [];
  const afterToday: contentfulEventObjectWithSlug[] = [];

  events.forEach(event => {
    const eventDate = new Date(event.datetime);

    if (eventDate < today) {
      beforeToday.push(event);
    } else {
      afterToday.push(event);
    }
  });

  return { beforeToday, afterToday };
}


export default async function CalendarComponent() {
  const { data } = await getRevalidateQuery(query);

  // Order events
  const orderedEvents: contentfulEventObject[] = [
    ...data?.eventCollection.items,
  ].sort((a: contentfulEventObject, b: contentfulEventObject) =>
    compareAsc(parseISO(a.datetime), parseISO(b.datetime))
  );

  // Get month days based on the first and last event
  const months = monthsFromContentfulEvents(orderedEvents);

  // Add the slug to each event
  const orderedEventsandSlugs: contentfulEventObjectWithSlug[] = orderedEvents.map((event: contentfulEventObject): contentfulEventObjectWithSlug => {
    return {...event, slug: `new-events/${createSlug(event.sys.id)}`
  }})

const { beforeToday, afterToday } = splitEventsByDate(orderedEventsandSlugs);

return (
  <div className="mx-12">
    <div className="relative grid grid-cols-1 gap-x-14">
      <CalendarSection months={months} events={orderedEventsandSlugs} />
    </div>
    <section className="mt-12">
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Upcoming Events
      </h2>
      <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
        {afterToday.map((event, i) => (
          <li key={i}>
            <Link
              href={event.slug}
              key={i}
              className="py-4 sm:flex hover:bg-gray-100"
            >
              <time
                dateTime={format(parseISO(event.datetime), "yyyy-MM-dd")}
                className="w-50 flex-none mr-20"
              >
                {format(parseISO(event.datetime), "eeee, MMMM dd")}
              </time>
              <p className="mt-2 flex-auto sm:mt-0">{event.description?.json && documentToReactComponents(event.description?.json)}</p>
            </Link>
          </li>
        ))}
      </ol>
    </section>
    <section className="mt-12">
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Past Events
      </h2>
      <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
        {beforeToday.map((event, i) => (
          <li key={i}>
            <Link
              href={event.slug}
              key={i}
              className="py-4 sm:flex hover:bg-gray-100"
            >
              <time
                dateTime={format(parseISO(event.datetime), "yyyy-MM-dd")}
                className="w-50 flex-none mr-20"
              >
                {format(parseISO(event.datetime), "eeee, MMMM dd")}
              </time>
              <p className="mt-2 flex-auto sm:mt-0">{event.description?.json && documentToReactComponents(event.description?.json)}</p>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  </div>
);
}

const query = gql`
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
      }
    }
  }
`;
