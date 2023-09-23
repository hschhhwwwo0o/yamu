import React from "react";

/** Layouts */
import { DefaultWrapperLayout } from "@/components/layouts/DefaultWrapperLayout";

/** Components */
import { H1 } from "@/components/text/H1";
import { LinkCustom } from "@/components/text/Link";
import { FeedbackForm } from "./components/FeedbackForm";

import { metadata } from "./metadata";
export { metadata };

export default function FeedbackScreen(): React.JSX.Element {
  return (
    <main>
      <DefaultWrapperLayout>
        <div className="px-mobile-padding md:px-laptop-padding pb-10">
          <span className="block mt-10 md:mt-20">
            <H1>Leave feedback to improve the service.</H1>
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
      </DefaultWrapperLayout>
    </main>
  );
}
