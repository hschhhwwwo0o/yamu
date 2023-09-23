import React from "react";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";

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
        <div className="flex flex-col lg:flex-row lg:justify-between w-full h-[calc(100vh-57px)] 2xl:border-l 2xl:border-r 2xl:border-dark-default-border 2xl:border-solid">
          {
            /** Mock-up preview scene */
            <div className="w-full border border-r-[1px] border-solid dark:border-r-dark-default-border flex items-center justify-center">
              <Text>Mock-up preview scene</Text>
            </div>
          }
          {
            /** Mock-up settings wizard */
            <div className="p-mobile-padding lg:p-laptop-padding">
              <div className="lg:w-[375px]">
                <H1>Mock-up settings wizard</H1>
              </div>
            </div>
          }
        </div>
      </WideWrapperLayout>
    </main>
  );
}
