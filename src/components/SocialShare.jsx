"use client";

import Link from "next/link";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaTelegram,
  FaCopy,
} from "react-icons/fa6";

import { EntryContext } from "@/context/EntryContext";

export default function SocialShare({ text, size }) {
  const url = window.location.href;
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <FaCopy
            className="cursor-pointer"
            onClick={() => navigator.clipboard.writeText(url)}
            size={size}
          />
        </li>
        {[
          [
            <FaSquareXTwitter size={size} />,
            `https://x.com/intent/tweet?text=${text}&url=${url}`,
          ],
          [
            <FaSquareFacebook size={size} />,
            `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          ],
          [
            <FaSquareWhatsapp size={size} />,
            `https://api.whatsapp.com/send?text=${text}%20${url}`,
          ],
          [
            <FaTelegram size={size} />,
            `https://t.me/share/url?url=${url}&text=${text}`,
          ],
        ].map((social, index) => (
          <li key={index}>
            <Link href={social[1]} target="_blank">
              {social[0]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
