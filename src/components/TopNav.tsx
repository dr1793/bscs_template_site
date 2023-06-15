"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useParams } from "next/navigation";
import { useStore } from "@/state/store";
import Link from "next/link";
import StoreInitializer from "./StoreInitializer";
import { getJSDocReturnTag } from "typescript";
import { PageLink } from "@/app/layout";

export default function TopNav({
  contentfulPageLinks,
  children,
}: {
  contentfulPageLinks: PageLink[],
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const params = useParams(); //Use this eventually for dynamic subpaths like /about/[page]
  const [comparePathLocation, setComparePathLocation] = useState<string>(
    pathname.split("/")[1]
  );
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const findLinkPageIndex = useCallback(
    (linkProperty: "href" | "name",  value: string): number => {
      return contentfulPageLinks.findIndex((link) => link[linkProperty] === value);
    },
    [contentfulPageLinks]
  );

  useEffect(() => {
    const page = pathname.split("/")[1];
    setComparePathLocation(page);
    useStore.setState((state) => ({
      ...state,
      currentPageNo: findLinkPageIndex("href", page),
    }));
  }, [pathname, findLinkPageIndex]);
  

  return (
    <div className="w-full h-16 absolute">
      <StoreInitializer
        pageInfo={contentfulPageLinks}
        currentPageNo={findLinkPageIndex("href", pathname.split("/")[1])}
      />
      <div className="z-40 w-full sticky top-0">
        <div className="absolute flex flex-col w-full backdrop-filter backdrop-blur-sm">
          <div className="flex flex-row h-24 justify-between p-2">
            <div>
              <Link href="/">{children}</Link>
            </div>
            <div className="hidden sm:flex flex-row">
              {contentfulPageLinks.map((link: PageLink, i: number) => {
                return (
                  <Link
                    key={link.href}
                    className={`topnav-link font-nectarine text-xl flex items-end px-1 mx-1 pb-1
            relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] 
            before:bottom-0 before:left-0 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
            before:transition before:ease-in-out before:duration-300
            ${comparePathLocation === link.href && "before:scale-x-100"} `}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="h-5" />
        </div>
      </div>
    </div>
  );
}
