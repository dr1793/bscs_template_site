"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";


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
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <XMarkIcon className="h-6 w-6 absolute top-4 right-4 cursor-pointer z-10" onClick={() => setIsModalOpen(false)} />
          <ChevronLeftIcon className="h-15 w-15 z-10" onClick={() => { setPictureIndex(Math.abs(pictureIndex - 1) % 12) }} />
          {/* Modal content goes here */}
          <div
            className={``}
            style={{ maxWidth: '20vw', maxHeight: '60vh' }}
          >
            <Image
              alt={`Gallery Image ${pictureIndex}`}
              src={pictureURLs[pictureIndex].src.url}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <ChevronRightIcon className="h-15 w-15 z-10" onClick={() => { setPictureIndex((pictureIndex + 1) % 12) }} />
        </div>
      )}
    </div>

  )
}
