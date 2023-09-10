import React from "react";

/** Components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";

/** Initialize metadata */
import type { Metadata } from "next";
export const metadata: Metadata = {
  /** @requirement QA/SEO/META */
  title: "YAMU. About",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",

  /** @requirement QA/SEO/OPEN-GRAPH */
  openGraph: {
    title: "YAMU. About",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "article",
  },
};

export default function AboutScreen(): React.JSX.Element {
  return (
    <main>
      <TheTopNavigation />
      <DefaultLayout>
        <div className="px-mobile-padding md:px-laptop-padding pb-10">
          <span className="block mt-10 md:mt-20">
            <H1>About</H1>
          </span>
          <span className="block mt-10">
            <Text>Copyright (c) 2023 Saveliy Andronov</Text>
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
