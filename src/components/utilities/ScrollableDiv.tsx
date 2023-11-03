'use client'
import React, { useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Scrolls to the bottom of the div when clicked
type ScrollableDivProps = {
    children: React.ReactNode;
    className: string;
};

const ScrollableDiv: React.FC<ScrollableDivProps> = ({
    children,
    className
}) => {
    const [scrolled, setScrolled] = useState(sessionStorage.getItem('scrolled')==='true' || false)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const divElement = event.currentTarget;
        const divHeight = divElement.scrollHeight;
        if (!scrolled) {
            window.scrollTo({
                top: divElement.offsetTop + divHeight * (.9),
                behavior: 'smooth',
            });
            setScrolled(true)
            sessionStorage.setItem('scrolled', 'true')
        }
    };

    return (
        <div onClick={handleClick} className={className} >
            {children}
        </div>
    );
};

export default ScrollableDiv;
