import React from "react";

/** Modules compositions */
import { FeedbackModuleComposition } from "@/modules-compositions/feedback";

/** Layouts */
import { DefaultWrapperLayout } from "@/components/layouts/DefaultWrapperLayout";

/** Components */
import { H1 } from "@/components/text/H1";
import { LinkCustom } from "@/components/text/Link";
import { MotionBlock } from "@/components/shared/MotionBlock";

/** Page metadata */
import { metadata } from "./_metadata";
export { metadata };

/**
 * @usecase UC/FEEDBACK
 */
export default function FeedbackScreen(): React.JSX.Element {
  return (
    <main>
      <DefaultWrapperLayout>
        <div className="px-mobile-padding md:px-laptop-padding pb-10">
          <MotionBlock delay={0.1}>
            <H1 className="mt-10 md:mt-20">
              Leave feedback to improve the service.
            </H1>
          </MotionBlock>
          <MotionBlock delay={0.2}>
            <span className="block mt-6">
              <FeedbackModuleComposition.view.FeedbackForm />
            </span>
          </MotionBlock>
          <div className="mt-6">
            <MotionBlock delay={0.3}>
              <LinkCustom
                target="_blank"
                withLabel
                className="mt-4"
                href="https://github.com/hschhhwwwo0o/yamu"
              >
                Go to code
              </LinkCustom>
            </MotionBlock>
            <MotionBlock delay={0.4}>
              <LinkCustom
                target="_blank"
                withLabel
                className="mt-2"
                href="https://github.com/hschhhwwwo0o"
              >
                Author
              </LinkCustom>
            </MotionBlock>
            <MotionBlock delay={0.5}>
              <LinkCustom
                target="_blank"
                withLabel
                className="mt-2"
                href="https://github.com/hschhhwwwo0o/yamu#development"
              >
                Documentation
              </LinkCustom>
            </MotionBlock>
          </div>
        </div>
      </DefaultWrapperLayout>
    </main>
  );
}
