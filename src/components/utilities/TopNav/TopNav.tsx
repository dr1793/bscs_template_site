"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useParams } from "next/navigation";
import { Dialog, Disclosure } from "@headlessui/react";
import { useStore } from "@/state/store";
import Link from "next/link";
import Image from "next/image";
import StoreInitializer from "../../StoreInitializer";
import { getJSDocReturnTag } from "typescript";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PageLink, IconLink } from "@/app/layout";
import "./styles.css";
import { text } from "stream/consumers";
import IconLinks from "../IconLinks/IconLinks";

export default function TopNav({
  contentfulPageLinks,
  contentfulIconLinks,
  children,
}: {
  contentfulPageLinks: PageLink[];
  contentfulIconLinks: IconLink[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const params = useParams(); //Use this eventually for dynamic subpaths like /about/[page]
  const [comparePathLocation, setComparePathLocation] = useState<string>(
    pathname.split("/")[1]
  );
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const findLinkPageIndex = useCallback(
    (linkProperty: "href" | "name", value: string): number => {
      return contentfulPageLinks.findIndex(
        (link) => link[linkProperty] === value
      );
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

  const textLinks = contentfulPageLinks.map((link: PageLink, i: number) => {
    return (
      <Link
        key={link.href}
        className={`topnav-link  md:text-xl flex items-end px-1 mx-1 pb-1
                        relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] 
                        before:bottom-0 before:left-0 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                        before:transition before:ease-in-out before:duration-300
                        ${comparePathLocation === link.href &&
          "before:scale-x-100"
          } `}
        href={"/" + link.href}
        onClick={() => setMobileMenuOpen(false)}
      >
        {link.name}
      </Link>
    );
  });

  return (
    <div className="w-full h-16 absolute">
      <StoreInitializer
        pageInfo={contentfulPageLinks}
        currentPageNo={findLinkPageIndex("href", pathname.split("/")[1])}
      />
      <div className="z-40 w-full sticky top-0">
        <div
          className={`absolute flex flex-col w-full ${!mobileMenuOpen && "backdrop-filter backdrop-blur-sm pb-8"
            }`}
        >
          <div className="flex flex-row h-24 justify-between p-2 font-oswald">
            <div>
              <Link href="/">{children}</Link>
            </div>
            {/* Desktop Nav Menu */}
            <div className="hidden sm:flex flex-row justify-right text-white">
              {/* Page Navigation links  */}
              <div className="flex flex-row underlined-link mr-2">
                {textLinks}
              </div>
              {/* Social Media Links */}
              <div className="flex flex-row"><IconLinks IconLinks={contentfulIconLinks} /></div>
            </div>
            {/* Mobile Nav Menu */}
            <div className="block sm:hidden flex items-center justify-center">
              <button
                type="button"
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 mr-2 mt-2 text-white ${mobileMenuOpen && "hidden"
                  }`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              </button>
              <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel
                  className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                  style={{ backgroundColor: "#e55937" }}
                >
                  <div className="flex items-end justify-end">
                    <button
                      type="button"
                      className="-m-2.5 mt-2  rounded-md p-2.5 text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 text-white">
                      <div
                        className="space-y-2 py-6 mt-10 text-3xl underlined-link"
                      >
                        <Link
                          href={"/"}
                          className={`flex items-end m-2
                          relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] 
                          before:bottom-0 before:left-0 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                          before:transition before:ease-in-out before:duration-300
                          ${comparePathLocation === "" && "before:scale-x-100"} 
                          `}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Home Page
                        </Link>
                        {textLinks}
                      </div>
                      <div className="flex flex-row mt-5"><IconLinks IconLinks={contentfulIconLinks} /></div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
