import React, { FC, ReactNode } from "react";

interface PageTopSectionContainerProps {
  children?: ReactNode;
}

const PageTopSectionContainer: FC<PageTopSectionContainerProps> = ({ children }) => {
  return (
    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg pt-16">
        {children}
      </div>
    </div>
  );
};

export default PageTopSectionContainer;
