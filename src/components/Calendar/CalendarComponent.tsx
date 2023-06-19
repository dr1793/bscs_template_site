import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
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

export default async function CalendarComponent() {
  const { data } = await getRevalidateQuery(query);

  // Order events
  const orderedEvents: contentfulEventObject[] = [
    ...data?.eventCollection.items,
  ].sort((a: contentfulEventObject, b: contentfulEventObject) =>
    compareAsc(parseISO(a.datetime), parseISO(b.datetime))
  );

  // //Get month days based on the first and last event
  const months = monthsFromContentfulEvents(orderedEvents);

  return (
    <div className="mx-12 ">
      <div className="relative grid grid-cols-1 gap-x-14">
        <CalendarSection months={months} events={orderedEvents}/>
      </div>
      <section className="mt-12">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Upcoming events
        </h2>
        <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
          {orderedEvents.map((event, i) => (
            <li key={i}>
              <Link
                href={`new-events/${createSlug(event.sys.id)}`}
                key={i}
                className="py-4 sm:flex hover:bg-gray-100"
              >
                <time
                  dateTime={format(parseISO(event.datetime), "yyyy-MM-dd")}
                  className="w-50 flex-none mr-20"
                >
                  {format(parseISO(event.datetime), "eeee, MMMM dd")}
                </time>
                <p className="mt-2 flex-auto sm:mt-0">{event.description}</p>
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
