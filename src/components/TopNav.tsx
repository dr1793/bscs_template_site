"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar } from "@mui/material";

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
    name: string;
    href: string;
    path: string;
  }
  type PageLinks = PageLink[];

  const links: PageLinks = [
    { name: "Home", href: "", path: "" },
    {
      name: "Selected Work",
      href: "#selected-work",
      path: "selected-work",
    },
    { name: "About", href: "#about", path: "about" },
    { name: "Contact", href: "contact-form", path: "contact-form" },
  ];

  useEffect(() => {
    setComparePathLocation(window.location.hash || pathname.split("/")[1]);
  }, [params, window.location.hash, pathname]);

  return (
    <AppBar position="static">
      <Link href="/">
        <Image src={logo} width={200} height={200} alt="site logo" />
      </Link>
      <Toolbar disableGutters>
        {links.map((link: PageLink, i: number) => {
          return (
            <React.Fragment key={i + link.name}>
              <Link href={link.href}>
                {comparePathLocation === link.href && " | "}{" "}
                {contentfulLinks[i]}
              </Link>
            </React.Fragment>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
