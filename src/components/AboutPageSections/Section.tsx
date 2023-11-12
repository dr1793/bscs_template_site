import React from "react";
import Image from "next/image";
import BSCSButton from "../utilities/button";
import './styles.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '../../../node_modules/@contentful/rich-text-types/dist/types/types';

type PageSectionProps = {
    children?: React.ReactNode;
    largeText: string;
    textAlign: 'left' | 'right' | 'center';
    subText?: string | null;
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
                    <div className={" font-bold py-2 my-3 text-2xl"}>
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
                <div className={`h-[50vh] md:h-[45vh] max-w-7xl flex flex-grow justify-center align-center lg:justify-around ${itemOrderMap[textAlign]}`}>
                    <div className="flex w-full flex-col justify-center items-center max-w-xs hidden sm:flex">
                        {imageURL &&
                            <div
                                className="flex-2  flex justify-center items-center"
                                style={{
                                    width: "90%",
                                    height: "80%",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                    <Image
                                        className="bg-inherit"
                                        fill
                                        quality={100}
                                        src={imageURL}
                                        alt={`swap image ${index}`}
                                        style={{
                                            // backgroundColor: '#E55937',
                                            objectFit: 'contain',
                                        }}
                                        sizes="100vh"
                                    />
                            </div>
                        }
                    </div>
                    <div className=" flex flex-col justify-center px-5 max-w-sm">
                        <div className=" flex-2 flex-grow text-3xl font-bold flex flex-col justify-end">
                            {largeText}
                        </div>
                        <div className="flex-1 text-md mt-3 custom-list">
                            {subText || (richText && documentToReactComponents(richText))}
                        </div>
                        <div className="flex-1 text-xl flex-grow flex justify-center py-5">
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
