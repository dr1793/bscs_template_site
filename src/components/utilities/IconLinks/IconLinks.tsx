import { IconLink } from "@/app/layout";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function IconLinks({ IconLinks }: { IconLinks: IconLink[] }) {
  return (
    <>
      {IconLinks.map((link: IconLink, i: number) => (
        <Link href={link.link} key={i} className={`flex items-end m-2`}>
          <Image src={link.icon} width={25} height={25} alt="" />
        </Link>
      ))}
    </>
  );
}

export default IconLinks;
