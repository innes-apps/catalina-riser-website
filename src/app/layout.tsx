import type { Metadata } from 'next';
import type { Viewport } from 'next';
import '@/styles/globals.css';
import '@/styles/reset.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Layout from '@/components/layouts/main/Layout';

export const metadata: Metadata = {
  title: 'Catalina Riser Yoga',
  description:
    'Katie Innes, offers inclusive Hatha, Vinyasa, and Nidra yoga classes in Tucson, Arizona, focusing on pose safety, body positivity, and mindfulness.',
  metadataBase: new URL('https://www.catalinariser.yoga/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Catalina Riser Yoga',
    description:
      'Katie Innes, offers inclusive Hatha, Vinyasa, and Nidra yoga classes in Tucson, Arizona, focusing on pose safety, body positivity, and mindfulness.',
    images: [
      {
        url: 'https://www.catalinariser.yoga/img/og_image.png',
        alt: 'Logo for Catalina Riser Yoga',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ccd3d4' },
    { media: '(prefers-color-scheme: dark)', color: '#86999f' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
