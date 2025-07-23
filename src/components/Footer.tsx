import { memo } from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/config/links";

export const Footer = memo(() => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-px bg-gray-800" />
        <div className="flex items-center justify-between border-t border-gray-800 py-8">
          <p className="text-sm text-gray-500">
            &copy; {year} Chetan Kamineni
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                aria-label={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";