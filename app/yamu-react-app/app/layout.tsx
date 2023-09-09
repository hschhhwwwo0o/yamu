import React, { Fragment } from "react";

/** Global styles */
import "../styles/globals/reset.css";
import "../styles/globals/index.css";

/** Initialize google font */
import { Inter } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";

const inter: NextFont = Inter({
  subsets: ["latin"],
});

/** Initialize metadata */
import type { Metadata } from "next";
export const metadata: Metadata = {
  /** @requirement QA/SEO/META */
  title: "YAMU",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  publisher: "@hschhhwwwo0o",
  creator: "@hschhhwwwo0o",

  /** @requirement QA/SEO/OPEN-GRAPH */
  openGraph: {
    title: "YAMU",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "website",
    images: ["/og/OpenGraphCover.png"],
  },
};

/** Initialize app layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white dark:bg-black">
      <body className={inter.className}>
        <div>
          <Fragment>{children}</Fragment>
        </div>
      </body>
    </html>
  );
}
