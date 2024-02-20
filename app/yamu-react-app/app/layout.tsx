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
            <!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8Q2KN4R');
<!-- End Google Tag Manager -->
          `}
        </Script>
      </head>
      <body className={inter.className}>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8Q2KN4R"
height="0" width="0" style={{ display: "none" }}></iframe></noscript>
        <div>
          <TheTopNavigation />
          <Fragment>{children}</Fragment>
        </div>
      </body>
    </html>
  );
}
