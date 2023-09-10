import React from "react";

/** Components */
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { H1 } from "@/components/text/H1";
import { LinkCustom } from "@/components/text/Link";
import { FeedbackForm } from "./components/FeedbackForm";

/**
 * Initialize metadata
 *
 * @requirement QA/SEO/META
 * @requirement QA/SEO/OPEN-GRAPH
 */
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YAMU. Feedback",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  openGraph: {
    title: "YAMU. Feedback",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "website",
  },
};

export default function FeedbackScreen(): React.JSX.Element {
  return (
    <main>
      <DefaultLayout>
        <div className="px-mobile-padding md:px-laptop-padding pb-10">
          <span className="block mt-10 md:mt-20">
            <H1>Leave feedback to improve the service</H1>
          </span>
          <span className="block mt-6">
            <FeedbackForm />
          </span>
          <div className="mt-6">
            <span className="block mt-4">
              <LinkCustom withLabel href="/">
                Go to code
              </LinkCustom>
            </span>
            <span className="block mt-2">
              <LinkCustom withLabel href="/">
                Author
              </LinkCustom>
            </span>
            <span className="block mt-2">
              <LinkCustom withLabel href="/">
                Documentation
              </LinkCustom>
            </span>
          </div>
        </div>
      </DefaultLayout>
    </main>
  );
}
