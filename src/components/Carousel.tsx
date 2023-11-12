"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import GalleryModal from './GalleryModal';


export default function Carousel({ id, pictureURLs }: { id: string, pictureURLs: { title: string; src: { url: string }; }[]; }) {
  const [pictureIndex, setPictureIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rectangles = Array(12).fill({});

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-6 h-auto">
      {rectangles.map((_, index) => (
        <div
          key={index}
          onClick={() => {
            //Set the modal to have the index 
            setPictureIndex(index);
            setIsModalOpen(true);
          }}
          className="relative bg-white w-full h-[17vh] items-center justify-center overflow-hidden"
        >
            <Image
              alt={`Gallery Image Thumb ${index}`}
              src={pictureURLs[index].src.url}
              layout="fill"
              objectFit="cover"
              className="object-center"    
            />
        </div>
      ))}
      <GalleryModal
        pictureURLs={pictureURLs}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        pictureIndex={pictureIndex}
        setPictureIndex={setPictureIndex}
        centerX={false}
      />
    </div>

  )
}
