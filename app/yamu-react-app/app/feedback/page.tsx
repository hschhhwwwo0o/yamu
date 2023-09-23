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
          <H1 className="mt-10 md:mt-20">
            Leave feedback to improve the service.
          </H1>
          <span className="block mt-6">
            <FeedbackForm />
          </span>
          <div className="mt-6">
            <LinkCustom className="mt-4" withLabel href="/">
              Go to code
            </LinkCustom>
            <LinkCustom className="mt-2" withLabel href="/">
              Author
            </LinkCustom>
            <LinkCustom className="mt-2" withLabel href="/">
              Documentation
            </LinkCustom>
          </div>
        </div>
      </DefaultWrapperLayout>
    </main>
  );
}
