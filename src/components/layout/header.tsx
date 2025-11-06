"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, User, Phone, BookOpen, Bot, Menu } from "lucide-react";

import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/properties", label: "Properties", icon: Building2 },
  { href: "/suggestions", label: "Smart Suggestions", icon: Bot },
  { href: "/about", label: "About Us", icon: User },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "transition-colors hover:text-primary",
          pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground",
          isMobile && "flex items-center gap-3 text-lg py-2"
        )}
      >
        {isMobile && <link.icon className="h-5 w-5" />}
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Home className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{APP_NAME}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {renderNavLinks()}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/booking">
              <BookOpen className="mr-2 h-4 w-4" />
              Book Viewing
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Home className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">{APP_NAME}</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {renderNavLinks(true)}
                 <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg mt-4">
                    <Link href="/booking">
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
