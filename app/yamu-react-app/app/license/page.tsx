import React, { Fragment } from "react";

/** Components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";

/** Initialize metadata */
import type { Metadata } from "next";
export const metadata: Metadata = {
  /** @requirement QA/SEO/META */
  title: "YAMU. License",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",

  /** @requirement QA/SEO/OPEN-GRAPH */
  openGraph: {
    title: "YAMU. License",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "article",
  },
};

export default function LicenseScreen(): React.JSX.Element {
  return (
    <main>
      <TheTopNavigation />
      <DefaultLayout>
        <Fragment />
      </DefaultLayout>
    </main>
  );
}
