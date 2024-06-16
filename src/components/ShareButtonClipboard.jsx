"use client";

import { FaCopy } from "react-icons/fa6";
import { useState } from "react";

export default function CopyURLButton({ size, url }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex gap-4">
      {copied && <p>Copied!</p>}
      <FaCopy
        className="cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
        size={size}
      />
    </div>
  );
}
