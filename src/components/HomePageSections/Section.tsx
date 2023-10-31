import React from "react";
import Image from "next/image";
import BSCSButton from "../utilities/button";
import './styles.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '/Users/david/Desktop/t_site/bscs-template/node_modules/@contentful/rich-text-types/dist/types/types';

type PageSectionProps = {
    children?: React.ReactNode;
    largeText: string;
    textAlign: 'left' | 'right' | 'center';
    subText: string | null;
    imageURL: string | null | undefined;
    richText?: Document | null | undefined;
    buttonText?: string | null;
    buttonHref?: string | null;
    index?: number | null;
};

export default function SectionContainer({
    children, 
    textAlign,
    imageURL,
    largeText,
    subText,
    buttonText,
    buttonHref,
    richText,
    index,
}: PageSectionProps) {

    const itemOrderMap: {
        right: string;
        left: string;
        center: string;
    } = {
        right: 'flex-row',
        left: 'flex-row-reverse',
        center: ''
    }

    return (
        <>
            {textAlign === 'center'
                ?
                <>
                    <div className={" font-bold py-2 text-2xl"}>
                        {largeText}
                    </div>
                    <div>
                        {subText}
                    </div>
                    {(buttonText) &&
                        <BSCSButton
                            type='secondary'
                            size='reg'
                            href={buttonHref}
                            text={buttonText}
                        />
                    }
                </>
                :
                <div className={`h-[26vh] w-full flex justify-center align-center lg:justify-between ${itemOrderMap[textAlign]}`}>
                    <div className="flex-1 flex flex-col justify-center max-w-xs">
                        {imageURL &&
                            <div
                                className="flex-2 bg-white flex justify-center items-center"
                                style={{
                                    width: "80%",
                                    height: "75%",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >
                                <Image
                                    fill
                                    quality={100}
                                    src={imageURL}
                                    alt={`swap image ${index}`}
                                    style={{
                                        objectFit: 'fill',
                                    }}
                                    sizes="100vh"
                                />
                            </div>
                        }
                    </div>
                    <div className="flex-1 flex flex-col justify-center pr-3 max-w-sm">
                        <div className=" flex-2 flex-grow text-3xl font-bold flex flex-col justify-end">
                            {largeText}
                        </div>
                        <div className="flex-1 text-md mt-3 custom-list">
                            {subText || (richText && documentToReactComponents(richText))}
                        </div>
                        <div className="flex-1 text-xl flex-grow flex justify-center">
                        {(buttonText) &&
                            <BSCSButton
                                type='secondary'
                                size='reg'
                                href={buttonHref}
                                text={buttonText}
                            />
                        }
                        </div>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}
