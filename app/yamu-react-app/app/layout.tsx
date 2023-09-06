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
  title: "YAMU",
  description: "Make mock-up easy",
};

/** Initialize app layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Fragment>{children}</Fragment>
      </body>
    </html>
  );
}
