"use client";
import React, { useRef } from "react";
import { AppData, useStore } from "@/state/store";

export default function StoreInitializer({ pageInfo, currentPageNo }: AppData) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useStore.setState({ pageInfo, currentPageNo });
    initialized.current = true;
  }

  return null;
}
