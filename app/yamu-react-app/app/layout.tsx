import React, { Fragment } from "react";
import Script from "next/script";

/** Global styles */
import "../styles/globals/reset.css";
import "../styles/globals/index.css";

/** Initialize google font */
import { Inter } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";

/** Global components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";

const inter: NextFont = Inter({
  subsets: ["latin", "cyrillic"],
});

/** Initial metadata */
import { metadata } from "./_metadata";
export { metadata };

/** Initialize app layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en" className="bg-[#FDFDFD] dark:bg-black">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F6SK27KP9E"
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || []
            function gtag(){
              dataLayer.push(arguments)
            }
            gtag('js', new Date());
            gtag('config', 'G-F6SK27KP9E');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div>
          <TheTopNavigation />
          <Fragment>{children}</Fragment>
        </div>
      </body>
    </html>
  );
}
