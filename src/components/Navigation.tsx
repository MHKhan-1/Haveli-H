import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Legacy" },
  { href: "/experiences", label: "Experiences" },
  { href: "/locations", label: "Locations" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 font-sans border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-sm py-2 shadow-md border-border"
          : "bg-transparent py-4 border-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Haveli" className="h-12 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest hover:text-accent transition-colors font-medium",
                location === link.href && "text-accent border-b-2 border-accent",
                !scrolled && location !== link.href && "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/events">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-sm uppercase tracking-wider text-xs font-bold transition-all border border-accent/20">
              Reserve
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-current"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-xl flex flex-col p-6 gap-4 lg:hidden animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-serif py-2 border-b border-border/50",
                location === link.href ? "text-primary" : "text-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/events" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-primary text-primary-foreground py-3 mt-4 rounded-sm font-bold uppercase tracking-widest">
              Reserve Your Table
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
