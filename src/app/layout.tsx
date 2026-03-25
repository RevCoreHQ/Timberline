import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '@/styles/globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Timberline Falls | Maintenance',
  description: 'We are currently making updates. The site will be back online shortly.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
