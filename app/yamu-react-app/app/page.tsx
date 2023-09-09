import React, { Fragment } from "react";

/** Components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";
import { LinkCustom } from "@/components/text/Link";

export default function IndexScreen(): React.JSX.Element {
  return (
    <Fragment>
      <main>
        <TheTopNavigation />
        <LinkCustom href="/">Hi</LinkCustom>
      </main>
    </Fragment>
  );
}
