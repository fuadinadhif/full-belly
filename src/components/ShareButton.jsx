"use client";

import Link from "next/link";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaTelegram,
  FaCopy,
} from "react-icons/fa6";

export default function ShareButton({ text, size }) {
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
            <FaSquareXTwitter size={size} key={1} />,
            `https://x.com/intent/tweet?text=${text}&url=${url}`,
          ],
          [
            <FaSquareFacebook size={size} key={2} />,
            `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          ],
          [
            <FaSquareWhatsapp size={size} key={3} />,
            `https://api.whatsapp.com/send?text=${text}%20${url}`,
          ],
          [
            <FaTelegram size={size} key={4} />,
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
