import React, { useMemo } from "react";

/** Layouts */
import { DefaultLayout } from "@/components/layouts/DefaultLayout";

/** Components */
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";

/**
 * Initialize metadata
 *
 * @requirement QA/SEO/META
 * @requirement QA/SEO/OPEN-GRAPH
 */
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YAMU. About",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  openGraph: {
    title: "YAMU. About",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "article",
  },
};

export default function AboutScreen(): React.JSX.Element {
  const currentYear: number = useMemo(function _getCurrentYear(): number {
    return new Date().getFullYear();
  }, undefined);

  return (
    <main>
      <DefaultLayout>
        <div className="px-mobile-padding md:px-laptop-padding pb-10">
          <span className="block mt-10 md:mt-20">
            <H1>About.</H1>
          </span>
          <span className="block mt-10">
            <Text>Copyright (c) {currentYear} Saveliy Andronov.</Text>
          </span>
          <span className="block mt-6">
            <Text>
              The application is designed for creating mock-ups. Create product
              mock-ups with the online mock-up generator. Simply select a
              mock-up, upload your design and download a watermark-free image.
            </Text>
          </span>
        </div>
      </DefaultLayout>
    </main>
  );
}
