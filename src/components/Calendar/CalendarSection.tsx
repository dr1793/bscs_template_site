"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Month, contentfulEventObject } from "./types";
import {
  classNames,
  parseLocalDate,
  standardDateFormatFromISO,
} from "@/lib/utilityFunctions";
import { addMonths, format, getDay, isSameMonth, parseISO } from "date-fns";
import { parse } from "path";

export default function CalendarSection({
  months,
  events,
}: {
  months: Month[];
  events: (contentfulEventObject & { slug: string; })[];
}) {
  const [monthOffSet, setMonthOffSet] = useState<number>(0);

  const currentMonth: Month | undefined = months.find(
    (month) =>
      month.name === format(addMonths(new Date(), monthOffSet), "MMMM yyyy")
  );

  const dayInCurrentMonth = parseLocalDate(
    currentMonth?.days[Math.floor(currentMonth.days.length / 2)].date || ""
  );

  const eventDates = events.map((event) =>
    standardDateFormatFromISO(event.datetime)
  );

  function getEventPictureURL(date: string): string | undefined {
    if (!eventDates.includes(date)) return undefined
    return events.find(
      (event) => standardDateFormatFromISO(event.datetime) === date
    )?.picture.url;
  }

  function getEventPageURL(date: string): string | undefined {
    if (!eventDates.includes(date)) return undefined
    return events.find(
      (event) => standardDateFormatFromISO(event.datetime) === date
    )?.slug;
  }


  return (
    <React.Fragment>
      <button
        type="button"
        className="absolute -left-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        disabled={currentMonth?.name == months[0].name}
        onClick={() => setMonthOffSet(monthOffSet - 1)}
      >
        <span className="sr-only">Previous month</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="absolute -right-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        disabled={currentMonth?.name == months[months.length - 1].name}
        onClick={() => setMonthOffSet(monthOffSet + 1)}
      >
        <span className="sr-only">Next month</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <section
        className={classNames(
          "text-center"
        )}
      >
        <h2 className="text-sm font-semibold text-gray-900">
          {currentMonth?.name}
        </h2>
        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
          {currentMonth?.days.map((day, dayIdx) => {
            let date = parseLocalDate(day.date);
            return (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  !isSameMonth(date, dayInCurrentMonth) && "text-gray-400",
                  dayIdx === 0 && dateColStart[getDay(date)],
                  "bg-gray-50",
                  dayIdx === 0 && "rounded-tl-lg",
                  dayIdx === 6 && "rounded-tr-lg",
                  dayIdx === currentMonth?.days.length - 7 && "rounded-bl-lg",
                  dayIdx === currentMonth?.days.length - 1 && "rounded-br-lg",
                  "relative py-1.5 hover:bg-gray-100 focus:z-10"
                )}
                style={{
                  backgroundImage: `url(${getEventPictureURL(day.date)})` || "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: eventDates.includes(day.date) ? "white" : "",
                  backgroundColor: getEventPictureURL(day.date) ? "#ffe974" : "white"
                }}
              >
                <Link href={getEventPageURL(day.date) || "javascript:void(0)"}>
                  <time
                    dateTime={day.date}
                    className={classNames(
                      day.isToday && "bg-indigo-600 font-semibold text-white",
                      "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                    )}
                  >
                    {day.date.split("-").pop()?.replace(/^0/, "")}
                  </time>
                </Link>
              </button>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

const dateColStart = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
