import React from "react";
import Link from "next/link"
import IconLinks from "./utilities/IconLinks/IconLinks";
import { IconLink } from "@/app/layout";
import BSCSButton from "./utilities/button";

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
    <div
      className={`footer p-4 bg-base-200 text-base-content items-center text-white ${classNames} flex flex-row justify-center lg:px-60`}
    >
      <Link href="/" className={`flex flex-1 font-grotesk text-3xl`}>
        {text}
      </Link>
      <div className="flex flex-1 items-center justify-center">
        <IconLinks IconLinks={icons} />
      </div>
      <div className={`flex flex-1 justify-end mr-2`}>
        <BSCSButton
          type="secondary"
          text={buttonText}
          href="/contact-us"
          size='reg'
        ></BSCSButton>
      </div>
    </div>
  );
}
