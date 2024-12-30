import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/reset.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Layout from '@/components/layouts/main/Layout';

export const metadata: Metadata = {
  title: 'Catalina Riser Yoga',
  description: 'Katie Innes, Tucson AZ based yoga instructor',
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
