/**
 * Initialize metadata
 *
 * @requirement QA/SEO/META
 * @requirement QA/SEO/OPEN-GRAPH
 */
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YAMU",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  publisher: "@hschhhwwwo0o",
  creator: "@hschhhwwwo0o",
  openGraph: {
    title: "YAMU",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "website",
    images: ["/meta/open-graph/OpenGraphCover.png"],
    countryName: "USA",
    siteName: "YAMU",
    locale: "ENG",
  },
  applicationName: "YAMU",
  robots: "index, follow",
  abstract: "Mock-up online generator",
  keywords: "yamu, about",
  twitter: {
    images: ["/meta/open-graph/OpenGraphCover.png"],
    title: "YAMU",
    card: "summary_large_image",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  },
};
