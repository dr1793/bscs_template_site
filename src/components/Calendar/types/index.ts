export interface Day {
  date: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
}

export interface Month {
  name: string;
  days: Day[];
}

export type contentfulEventObject = {
  datetime: string;
  displayField: string;
  description: string;
  sys: { id: string };
  picture: { url: string };
  [key: string]: string | number | { id: string } | { url: string };
};
