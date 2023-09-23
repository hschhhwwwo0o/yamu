import React, { Fragment } from "react";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";

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
  openGraph: {
    title: "YAMU",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "website",
  },
};

export default function CreateMockUpScreen(): React.JSX.Element {
  return (
    <main>
      <WideWrapperLayout>
        <Fragment />
      </WideWrapperLayout>
    </main>
  );
}
