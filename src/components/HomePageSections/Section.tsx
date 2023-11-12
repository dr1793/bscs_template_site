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
                <div className="flex flex-col items-center">
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
                </div>
                :
                <div className={`flex flex-grow justify-center align-center lg:justify-between xl:justify-around ${itemOrderMap[textAlign]} lg:w-[70vw]`}>
                    <div className="hidden sm:flex w-full flex-col justify-center items-center max-w-xs xl:max-w-md">
                        {imageURL &&
                            <div
                                className="flex-2 justify-center items-center"
                                style={{
                                    width: "90%",
                                    height: "75%",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    className="bg-inherit object-center"
                                    // fill
                                    // quality={100}
                                    src={imageURL}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    alt={`swap image ${index}`}
                                    // style={{
                                    //     objectFit: 'contain',
                                    // }}
                                    // sizes="100vh"
                                    // layout="fill"
                                    // objectFit="cover"
                                />
                            </div>
                        }
                    </div>
                    <div className=" flex flex-col flex-grow justify-center px-5 max-w-md">
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
