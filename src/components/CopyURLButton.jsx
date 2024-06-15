"use client";

import { FaCopy } from "react-icons/fa6";

export default function CopyURLButton({ size, url }) {
  return (
    <FaCopy
      className="cursor-pointer"
      onClick={() => navigator.clipboard.writeText(url)}
      size={size}
    />
  );
}
