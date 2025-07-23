import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="py-6">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* The logo link is removed */}
        <div className="flex-grow"></div> {/* This div will push the navigation to the right */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};