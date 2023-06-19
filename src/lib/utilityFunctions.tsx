import { format, parseISO } from "date-fns";

export function classNames(
  ...classes: (string | false | null | undefined)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export function createSlug(text: string): string {
  return text.replace(/ /g, "_").toLowerCase();
}

export function addHTTPs(text: string): string {
  if (text.startsWith("https://")) {
    return text;
  }
  return "https://" + text;
}

export function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function standardDateFormatFromISO( dateISO: string): string{
  return format(parseISO(dateISO), "yyyy-MM-dd")
}
