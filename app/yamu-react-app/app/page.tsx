"use client";

import React, { Fragment } from "react";

/** Components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";

export default function IndexScreen(): React.JSX.Element {
  return (
    <Fragment>
      <main>
        <TheTopNavigation />
      </main>
    </Fragment>
  );
}
