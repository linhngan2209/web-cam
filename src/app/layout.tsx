import { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import ClientProviders from './client_providers';

const notoSansCJKJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Watergate',
    template: '%s | Watergate',
  },
  description: 'Watergate is a modern and clean UI kit for web applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={notoSansCJKJP.className}>
      <body className="min-h-screen flex flex-col">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}