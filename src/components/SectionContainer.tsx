import React, { FC, ReactNode } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

interface SectionContainerProps {
  children?: ReactNode;
  pageColor?: string; //Once there's a theme, this type should be limited to the colors in the theme
}

const SectionContainer: FC<SectionContainerProps> = ({
  children,
  pageColor,
}) => {
  return (
    <div
      className={`px-8 py-8 ${pageColor} w-full`}
    >
      <div className="mx-auto w-full lg:mx-0 ">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
