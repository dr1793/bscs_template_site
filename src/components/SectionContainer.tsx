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
      className={`relative px-8 py-8 lg:static ${pageColor}`}
    >
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
