import React, { useMemo } from "react";

/** Layouts */
import { DefaultWrapperLayout } from "@/components/layouts/DefaultWrapperLayout";

/** Components */
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";

import { metadata } from "./metadata";
export { metadata };

export default function AboutScreen(): React.JSX.Element {
  const currentYear: number = useMemo(function _getCurrentYear(): number {
    return new Date().getFullYear();
  }, undefined);

  return (
    <main>
      <DefaultWrapperLayout>
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
      </DefaultWrapperLayout>
    </main>
  );
}
