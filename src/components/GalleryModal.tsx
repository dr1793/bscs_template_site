'use client'
import React, { useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from 'next/image';

type PictureURL = { src: { url: string } };


type GalleryModalProps = {
    pictureURLs: PictureURL[];
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    pictureIndex: number;
    setPictureIndex: (index: number) => void;
    centerX: boolean;
};

const GalleryModal: React.FC<GalleryModalProps> = ({ pictureURLs, isModalOpen, setIsModalOpen, pictureIndex, setPictureIndex, centerX }) => {
    function mod(n: number, m: number): number {
        return ((n % m) + m) % m;
    }

    const myDivRef = useRef<HTMLDivElement>(null);
    const imageUrl = pictureURLs[pictureIndex].src.url;

    return (
        <>
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                >
                    <XMarkIcon className={`h-6 w-6 absolute ${centerX ? 'top-10' : 'top-1/4'} right-4 cursor-pointer z-10 text-white`} onClick={() => setIsModalOpen(false)} />
                    {/* Modal content goes here */}
                    <div
                        className=""
                        style={{ maxWidth: '20vw', maxHeight: '60vh' }}
                    >
                    <ChevronLeftIcon className="h-14 w-14 z-10 absolute bottom-1/2 left-4 animate-pulse" onClick={() => { setPictureIndex(mod(pictureIndex - 1, pictureURLs.length)) }} />
                        <Image
                            alt={`Gallery Image ${pictureIndex}`}
                            src={imageUrl}
                            layout="fill"
                            objectFit="contain"
                        />
                    <ChevronRightIcon className="h-14 w-14 z-10 absolute bottom-1/2 right-4 animate-pulse" onClick={() => { setPictureIndex(mod(pictureIndex + 1, pictureURLs.length)) }} />
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryModal;
