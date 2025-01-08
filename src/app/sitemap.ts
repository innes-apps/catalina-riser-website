// scans each directory in the ./src/app directory and adds it to the sitemap
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MetadataRoute } from 'next';
import { client } from '@/utils/sanity/client';

/**
 * Recursively scans a the ./src/app directory and generates sitemap objects for each it and each subdirectory.
 *
 * @param {string} dir - the directory path to scan
 * @return {MetadataRoute.Sitemap} an array of objects representing each subdirectory in the sitemap
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const homePageStats = fs.statSync('./src/app/page.tsx');
  // Get all classes last updated date
  const scheduleQuery = `*[_type == "classes"]{_updatedAt}`;
  const rawSchedule = await client.fetch(
    scheduleQuery,
    {},
    {
      next: { revalidate: 60 * 6 },
    }
  );

  // Get all event's laste updated date
  const eventQuery = `*[_type == "events"]{_updatedAt}`;
  const events = await client.fetch(
    eventQuery,
    {},
    {
      next: { revalidate: 60 * 6 },
    }
  );

  // Merge the two arrays and extract the _updatedAt field
  const allUpdateDates = [...rawSchedule, ...events].map((item) => item._updatedAt);
  // Add the home page last updated date
  allUpdateDates.push(homePageStats.mtimeMs);

  // Find the most recent update date
  const mostRecentUpdate = new Date(
    Math.max(...allUpdateDates.map((date) => new Date(date).getTime()))
  );

  const sitemapArray: MetadataRoute.Sitemap = [
    {
      url: `https://www.catalinariser.yoga/`,
      lastModified: mostRecentUpdate,
    },
  ];

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const pagesDir = path.join(__dirname, '../app');

  /**
   * Recursively scans a directory and generates objects for each subdirectory.
   *
   * @param {string} dir - the directory path to scan
   */
  const scanDirectory = (dir: string) => {
    const dirItems = fs.readdirSync(dir);

    // ToDo: For CMS content pages, add the last updated dates from the CMS
    dirItems.forEach((item) => {
      const itemPath = path.join(dir, item);
      const itemStats = fs.statSync(itemPath);

      const urlPathName = itemPath.replace(pagesDir, '').replace(/\\/g, '/').replace(/\/$/, '');

      if (itemStats.isDirectory() && urlPathName !== '/api') {
        sitemapArray.push({
          url: `https://www.catalinariser.yoga${urlPathName}`,
          lastModified: new Date(itemStats.mtimeMs),
        });

        scanDirectory(itemPath);
      }
    });
  };

  scanDirectory(pagesDir);

  return sitemapArray;
}
