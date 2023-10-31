import React, { FC } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Assuming Contentful rich-text-react-renderer is being used.
import { Document } from '../../../../node_modules/@contentful/rich-text-types/dist/types/types';

interface PageBannerSectionProps {
    hero: {
        centerImage: {
            url: string;
        };
        largeText: string;
        richText: {
            json: Document;
        };
    };
    headerFontSize: string;
    subheaderFontSize: string;
}

const PageBannerSection: FC<PageBannerSectionProps> = ({
    hero,
    headerFontSize,
    subheaderFontSize,
}) => {
    return (
        <div className="w-full">
            <div className="h-[70vh] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${hero.centerImage.url})` }}>
                <div className="relative p-4 text-white flex flex-col items-center justify-center h-full">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`absolute inset-0 flex flex-col items-center justify-center text-center`}>
                        <p className="text-bscs-yellow font-grotesk" style={{ fontSize: headerFontSize }}>
                            {hero.largeText}
                        </p>
                        <p className={`text-white font-oswald ${subheaderFontSize}`}>
                            {hero.richText?.json && documentToReactComponents(hero.richText.json)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBannerSection;
