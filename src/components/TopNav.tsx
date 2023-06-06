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
    { href: "contact-us", path: "contact-us" },
  ];

  useEffect(() => {
    setComparePathLocation(window.location.hash || pathname.split("/")[1]);
  }, [params, window.location.hash, pathname]);

  return (
    <React.Fragment>
      <Link href="/">
        <Image src={logo} width={200} height={200} alt="site logo" />
      </Link>
        {links.map((link: PageLink, i: number) => {
          return (
            <React.Fragment key={i + contentfulLinks[i]}>
              <Link href={link.href}>
                {comparePathLocation === link.href && " | "}{" "}
                {contentfulLinks[i]}
              </Link>
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
}
