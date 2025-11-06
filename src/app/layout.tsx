import type { Metadata } from 'next';
import './globals.css';
import { APP_NAME } from '@/lib/constants';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Poppins } from 'next/font/google'
import { cn } from '@/lib/utils';
 
const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
});


export const metadata: Metadata = {
  title: `${APP_NAME} | Find Your Dream Home`,
  description: 'Find Your Dream Home or Investment Property with Ease!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1_700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
