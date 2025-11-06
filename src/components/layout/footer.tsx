"use client";

import { APP_NAME, WHATSAPP_LINK } from "@/lib/constants";
import { Home, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    // This effect runs only on the client, ensuring no hydration mismatch
    // while keeping server-side rendering consistent.
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">{APP_NAME}</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your partner in finding the perfect property.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/properties" className="text-sm text-muted-foreground hover:text-primary transition-colors">Properties</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">Book a Viewing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>123 Real Estate Ave, Suite 100</p>
              <p>Realty City, RC 12345</p>
              <a href="mailto:contact@homeview.com" className="mt-2 block hover:text-primary transition-colors">contact@homeview.com</a>
            </address>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Easiest Way to Reach Us</h4>
             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">For quick bookings and property details.</p>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {year} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
