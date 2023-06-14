import { PageLink } from "@/app/layout";
import { create } from "zustand";

export type AppData = {
  pageInfo: PageLink[];
  currentPageNo: number | null;
};

export const useStore = create<AppData>(
  (set) => ({
    pageInfo: [],
    currentPageNo: null,
  })
);
