"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function TopNav({
  logo,
  contentfulLinks,
}: {
  logo: string;
  contentfulLinks: string[];
}) {
  const pathname = usePathname();
  const params = useParams();
  const [comparePathLocation, setComparePathLocation] = useState<string>(
    pathname.split("/")[1]
  );
  const [darkMode, setDarkMode] = useState<boolean>(false);

  interface PageLink {
    href: string;
    path: string;
  }
  type PageLinks = PageLink[];

  const links: PageLinks = [
    { href: "about", path: "about" },
    { href: "our-team", path: "our-team" },
    { href: "event-musts", path: "event-musts" },
    { href: "gallery", path: "gallery" },
    { href: "contact-form", path: "contact-form" },
  ];

  const logoSize: number = 90;

  useEffect(() => {
    setComparePathLocation(window.location.hash || pathname.split("/")[1]);
  }, [params, pathname]);

  return (
    <div className="w-full h-16 absolute">
      <div className="z-40 w-full sticky top-0">
        <div className="absolute flex flex-col w-full backdrop-filter backdrop-blur-sm">
          <div className="flex flex-row h-20 justify-between p-2">
            <div>
              <Link href="/">
                <Image src={logo} width={logoSize} height={logoSize} alt="site logo" />
              </Link>
            </div>
            <div className="hidden sm:flex flex-row">
              {links.map((link: PageLink, i: number) => {
                return (
                  <Link
                    key={i + contentfulLinks[i]}
                    className={`topnav-link text-2xl flex items-end px-1 mx-1 pb-1
            relative before:content-[''] before:absolute before:block before:w-full before:h-[4px] 
            before:bottom-0 before:left-0 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
            before:transition before:ease-in-out before:duration-300
            ${comparePathLocation === link.href && "before:scale-x-100"} `}
                    href={link.href}
                  >
                    {contentfulLinks[i]}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="h-5"></div>
        </div>
      </div>
    </div>
  );
}
