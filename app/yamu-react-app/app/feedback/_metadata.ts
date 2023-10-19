/**
 * Initialize metadata
 *
 * @requirement QA/SEO/META
 * @requirement QA/SEO/OPEN-GRAPH
 */
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YAMU. Feedback",
  publisher: "@hschhhwwwo0o",
  creator: "@hschhhwwwo0o",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  openGraph: {
    title: "YAMU. Feedback",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "website",
    images: ["/meta/open-graph/OpenGraphCover.png"],
    countryName: "USA",
    siteName: "YAMU",
    locale: "ENG",
  },
  applicationName: "YAMU",
  robots: "noindex, nofollow",
  abstract: "Mock-up online generator",
  keywords: "yamu, feedback",
  twitter: {
    images: ["/meta/open-graph/OpenGraphCover.png"],
    title: "YAMU. Feedback",
    card: "summary_large_image",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  },
};
