import React, { ReactNode } from "react";

export default function Banner({
    id,
    tailwindHeight,
    imageURL,
    children,
}: {
    id: string;
    tailwindHeight: string;
    imageURL: string;
    children?: ReactNode;
}) {
    return (
        <div
            className={`${tailwindHeight} bg-center bg-cover bg-no-repeat`}
            style={{
                backgroundImage: `url(${imageURL})`,
            }}
        >
            {children}
        </div>
    );
}
