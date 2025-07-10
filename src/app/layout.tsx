import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/contexts/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sazzad Bin Jafor | Software Engineer | Traveller | Vlogger',
  description: 'Professional software engineer portfolio',
};

 const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-neutral-900 transition-all`}>
        <ThemeProvider>
          <Header />
            <main>
              {children}
            </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;