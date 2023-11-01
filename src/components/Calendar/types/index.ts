import { Document } from '../../../../node_modules/@contentful/rich-text-types/dist/types/types';
export interface Day {
  date: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
}

export interface Month {
  name: string;
  days: Day[];
}

type RichText = {
  __typename: 'PageCardTypeBRichText';
  json: Document;
};

export type contentfulEventObject = {
  datetime: string;
  displayField: string;
  description: RichText;
  sys: { id: string };
  picture: { url: string };
  [key: string]: string | number | RichText | { id: string } | { url: string };
};
