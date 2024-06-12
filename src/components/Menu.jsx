import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";

export default function Menu({ className }) {
  return (
    <div className={className}>
      <nav>
        <ul className="flex gap-4">
          {[
            ["🏠", "/"],
            ["Kitchen Tips", "#"],
            ["Cuisines", "#"],
          ].map((menu) => (
            <li>
              <Link
                href={menu[1]}
                className="rounded-full border-2 border-black px-6 py-2 dark:border-white"
              >
                {menu[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
}
