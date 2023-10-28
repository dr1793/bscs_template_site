import React from "react";
import IconLinks from "./utilities/IconLinks/IconLinks";
import { IconLink } from "@/app/layout";

export default function Footer({
  classNames,
  text,
  buttonText,
  icons,
}: {
  classNames: string;
  text: string;
  buttonText: string;
  icons: IconLink[];
}) {
  return (
    <div className={`footer p-4 bg-base-200 text-base-content items-center text-white ${classNames} flex flex-row justify-center`}>
      <div className={`flex flex-1 font-grotesk text-2xl`}>{text}</div>
      <div className="flex flex-1 items-center justify-center">
        <IconLinks IconLinks={icons} />
      </div>
      <div className={`flex flex-1 justify-end mr-2`}>
      <button>{buttonText}</button>
      </div>
    </div>
  );
}
