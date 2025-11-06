
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, User, Phone, BookOpen, Menu, Search, Rss } from "lucide-react";
import { useState } from "react";

import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/properties", label: "Properties", icon: Building2 },
  { href: "/about", label: "About Us", icon: User },
  { href: "/blog", label: "Blog", icon: Rss },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={isMobile ? handleLinkClick : undefined}
        className={cn(
          "transition-colors hover:text-primary",
          pathname === link.href ? "text-primary font-semibold" : "text-gray-600",
          isMobile && "flex items-center gap-3 text-lg py-2"
        )}
      >
        {isMobile && <link.icon className="h-5 w-5" />}
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Home className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl">{APP_NAME}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {renderNavLinks()}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
           <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
           </Button>
          <Button asChild>
            <Link href="/booking">
              <BookOpen className="mr-2 h-4 w-4" />
              Book Viewing
            </Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center gap-2 mb-6" onClick={handleLinkClick}>
                <Home className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">{APP_NAME}</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {renderNavLinks(true)}
                 <Button asChild size="lg" className="text-lg mt-4">
                    <Link href="/booking" onClick={handleLinkClick}>
                        <BookOpen className="mr-2 h-5 w-5" />
                        Book Viewing
                    </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
