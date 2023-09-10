import React, { Fragment } from "react";

/** Components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";
import { Button } from "@/components/form/Button";
import { Switch } from "@/components/form/Switch";
import { ExitButton } from "@/components/form/ExitButton";

export default function IndexScreen(): React.JSX.Element {
  return (
    <Fragment>
      <main>
        <TheTopNavigation />
        <Button>Create</Button>
        <Switch
          title="Title"
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <ExitButton>Text</ExitButton>
      </main>
    </Fragment>
  );
}
