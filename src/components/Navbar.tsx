import Link from "next/link";

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
        <Link href="/" className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full font-bold text-xl">
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};