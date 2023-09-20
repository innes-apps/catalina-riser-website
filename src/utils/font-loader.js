/**
 * We are loading our fonts here so they can used throughout
 * the app without generating a new cached file for every
 * instance of usage.
 * - JI
 */
import localFont from 'next/font/local';

import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const rofane = localFont({
  src: [
    {
      path: '../../public/fonts/Rofane.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rofane-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
});

export { lato, rofane };
