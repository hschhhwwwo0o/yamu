import React, { Fragment } from "react";

/** Components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";
import { Button } from "@/components/form/Button";

export default function IndexScreen(): React.JSX.Element {
  return (
    <Fragment>
      <main>
        <TheTopNavigation />
        <Button>Create</Button>
      </main>
    </Fragment>
  );
}
