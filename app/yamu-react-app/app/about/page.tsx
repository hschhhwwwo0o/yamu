import React, { useMemo } from "react";

/** Layouts */
import { DefaultWrapperLayout } from "@/components/layouts/DefaultWrapperLayout";

/** Components */
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";
import { MotionBlock } from "@/components/shared/MotionBlock";

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
          <MotionBlock delay={0.1}>
            <H1 className="mt-10 md:mt-20">About.</H1>
          </MotionBlock>
          <MotionBlock delay={0.2}>
            <Text className="mt-10">
              Copyright (c) {currentYear} Saveliy Andronov.
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.3}>
            <Text className="mt-6">
              The application is designed for creating mock-ups. Create product
              mock-ups with the online mock-up generator. Simply select a
              mock-up, upload your design and download a watermark-free image.
            </Text>
          </MotionBlock>
        </div>
      </DefaultWrapperLayout>
    </main>
  );
}
