import React from "react";
import { gql } from "@apollo/client";

export default function CalendarComponent() {
  return <div>CalendarComponent</div>;
}

const query = gql`
query eventCollectionQuery {
  eventCollection {
    items {
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
