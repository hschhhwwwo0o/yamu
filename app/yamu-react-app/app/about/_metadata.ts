/**
 * Initialize metadata
 *
 * @requirement QA/SEO/META
 * @requirement QA/SEO/OPEN-GRAPH
 */
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YAMU. About",
  publisher: "@hschhhwwwo0o",
  creator: "@hschhhwwwo0o",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  openGraph: {
    title: "YAMU. About",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "article",
    images: ["/meta/open-graph/OpenGraphCover.png"],
    countryName: "USA",
    siteName: "YAMU",
    locale: "ENG",
    tags: ["YAMU", "About"],
    publishedTime: "19.10.2023",
    modifiedTime: "19.10.2023",
    authors: "@hschhhwwwo0o",
  },
  applicationName: "YAMU",
  robots: "index, follow",
};
