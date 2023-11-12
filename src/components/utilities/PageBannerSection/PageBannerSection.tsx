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
    textColor?: 'white' | 'yellow';
}

const PageBannerSection: FC<PageBannerSectionProps> = ({
    hero,
    headerFontSize,
    subheaderFontSize,
    textColor="yellow"
}) => {
    const textColorMap = {
        'yellow': 'text-bscs-yellow-bright',
        "white": 'text-white'
    }

    return (
        <div className="w-full">
            <div className="h-[90vh] sm:h-[70vh] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${hero.centerImage.url})` }}>
                <div className="relative p-4text-white flex flex-col items-center justify-center h-full">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`absolute inset-0 flex flex-col items-center justify-center text-center`}>
                        <p className={ `${textColorMap[textColor]} mt-20 sm:mt-0 font-grotesk`  }style={{ fontSize: headerFontSize }}>
                            {hero.largeText}
                        </p>
                        <p className={`text-white font-oswald px-8 ${subheaderFontSize}`}>
                            {hero.richText?.json && documentToReactComponents(hero.richText.json)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBannerSection;
