'use client'
import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryModal from '@/components/GalleryModal';


type GalleryPageGalleryProps = {
    galleryPictures: { bigImage: { url: string }; title: string; }[];
}

const GalleryPageGallery: React.FC<GalleryPageGalleryProps> = ({ galleryPictures }) => {
    const [pictureIndex, setPictureIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalPictures = galleryPictures.map((pic) => {
        return (
            {
                src: {
                    url: pic.bigImage.url
                }
            }
        )
    })


    return (
        <>
            <ImageList variant="masonry" cols={4} gap={6}>
                {galleryPictures.map(
                    (item: { bigImage: { url: string; }; title: string; }, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setPictureIndex(index);
                                setIsModalOpen(true);
                            }}
                        >
                            <ImageListItem key={item.bigImage.url}>
                                <img
                                    src={`${item.bigImage.url}`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </div>
                    ))}
            </ImageList>
            <GalleryModal
                pictureURLs={modalPictures}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                pictureIndex={pictureIndex}
                setPictureIndex={setPictureIndex}
                centerX={false}
            />
        </>
    )
}

export default GalleryPageGallery
