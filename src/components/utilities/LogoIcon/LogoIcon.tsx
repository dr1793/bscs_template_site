import React from "react";
import { getRevalidateQuery } from "@/lib/apolloClient";
import { LOGO_SVG, OUTER_LIST_FOR_LOGO_ANIMATION } from "@/lib/constants";
import { gql } from "@apollo/client";
import { JSDOM } from "jsdom";
import styles from "./LogoIcon.module.css";

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export default async function LogoIcon({
  color = "black",
  size = 200,
  rotation = false,
}: {
  color?: string;
  size?: number;
  rotation?: boolean;
}) {
  const { data } = await getRevalidateQuery(query);

  var ComponentSVG: JSX.Element = LOGO_SVG;
  const logo: string = data.utilities.siteLogo.url;

  var pathsd: string[] = [];
  // Try to get the logo from contentful
  // Fall back to the saved logo if this doesn't work
  try {
    const response: string = await (await fetch(logo)).text();
    let dom: JSDOM = new JSDOM(`<!DOCTYPE html>${response}`);
    let paths: string[] = Array.from(
      dom.window.document.querySelectorAll("path")
    )
      .map((path) => path.getAttribute("d"))
      .filter(notEmpty);
    pathsd = pathsd.concat(paths);
  } catch (error) {
    console.log(error);
  }

  //Parse the logo pieces into a react component if we got contentful
  if (pathsd.length) {
    ComponentSVG = (
      <g>
        {pathsd.map((dAttr, i) => (
          <path
            d={dAttr}
            className={
              OUTER_LIST_FOR_LOGO_ANIMATION.includes(dAttr) && rotation ? styles.outer : ""
            }
            key={i}
          />
        ))}
      </g>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`-15 -25 600 600`}
      fill={color}
      fillRule="evenodd"
      preserveAspectRatio="xMidYMid"
      aria-label={data.utilities.siteLogo.title}
    >
      <g>{ComponentSVG}</g>
    </svg>
  );
}

const query = gql`
  query utilitiesEntryQuery {
    utilities(id: "42OfNrcdqkAoCfOi34077X") {
      siteLogo {
        title
        url
      }
    }
  }
`;
