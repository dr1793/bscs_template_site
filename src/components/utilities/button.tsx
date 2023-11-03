import React from "react";
import Link from "next/link";

type ButtonProps = {
  type: "primary" | "secondary";
  styles?: string;
  buttonType?: "button" | "submit";
  size: "lg" | "reg";
  text: string | React.ReactNode;
  href?: string | null;
};

export default function BSCSButton({ type, buttonType="button", styles, size, text, href = ""}: ButtonProps) {
  const colorClassButtonMap = {
    primary: "bg-bscs-orange text-white hover:bg-white hover:text-bscs-orange border border-bscs-orange",
    secondary:
      "bg-white text-bscs-orange hover:bg-bscs-orange hover:text-white border border-white",
  };

  const sizeClassButtonMap = {
    lg:"px-5 py-2 text-lg max-h-12",
    reg:"px-2 py-1 text-sm max-h-14",
  }

  return (
    <button
      type={buttonType}
      className={`
        rounded-full px-6 py-2 font-oswald font-semibold 
        transition duration-500 ease-in-out
        ${colorClassButtonMap[type]} 
        ${sizeClassButtonMap[size]}
        focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600
        ${styles}
        `
    }
    >
      {href ? <Link href={href}>{text}</Link> : text}
    </button>
  );
}
