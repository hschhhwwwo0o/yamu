import React, { useMemo } from "react";

/** Layouts */
import { DefaultWrapperLayout } from "@/components/layouts/DefaultWrapperLayout";

/** Components */
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";
import { MotionBlock } from "@/components/shared/MotionBlock";

import { metadata } from "./metadata";
export { metadata };

export default function LicenseScreen(): React.JSX.Element {
  const currentYear: number = useMemo(function _getCurrentYear(): number {
    return new Date().getFullYear();
  }, undefined);

  return (
    <main>
      <DefaultWrapperLayout>
        <div className="px-mobile-padding md:px-laptop-padding pb-10">
          <MotionBlock delay={0.1}>
            <H1 className="mt-10 md:mt-20">MIT License.</H1>
          </MotionBlock>
          <MotionBlock delay={0.2}>
            <Text className="mt-10">
              Copyright (c) {currentYear} Saveliy Andronov.
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.3}>
            <Text className="mt-6">
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &quotSoftware&quot), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.4}>
            <Text className="mt-6">
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.5}>
            <Text className="mt-6">
              THE SOFTWARE IS PROVIDED &quotAS IS&quot, WITHOUT WARRANTY OF ANY
              KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </Text>
          </MotionBlock>
        </div>
      </DefaultWrapperLayout>
    </main>
  );
}
