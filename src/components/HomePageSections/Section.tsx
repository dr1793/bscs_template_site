import React from "react";
import Image from "next/image";
import BSCSButton from "../utilities/button";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '/Users/david/Desktop/t_site/bscs-template/node_modules/@contentful/rich-text-types/dist/types/types';

type PageSectionProps = {
    largeText: string;
    textAlign: 'left' | 'right' | 'center';
    subText: string | null;
    imageURL: string | null | undefined;
    richText: Document | null | undefined;
    buttonText: string | null;
    buttonHref: string | null;
    index: number | null;
};

export default function SectionContainer({
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
                    <div className={" py-2 text-2xl"}>
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
                <div className={`h-[40vh] w-5/6 py-2 flex ${itemOrderMap[textAlign]}`}>
                    <div className="flex-1">
                        {imageURL &&
                            <div
                                className="flex-2 bg-white flex justify-center items-center"
                                style={{
                                    width: "100%",
                                    height: "100%",
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
                    <div className="flex-1">
                        <div className=" text-2xl">
                            {largeText}
                        </div>
                        <div>
                            {subText || (richText && documentToReactComponents(richText))}
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
                </div>
            }
        </>
    )
}
