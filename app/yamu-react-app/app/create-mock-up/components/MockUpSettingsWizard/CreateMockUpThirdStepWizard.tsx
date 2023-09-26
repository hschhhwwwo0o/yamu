import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "../../_store";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";

export function _CreateMockUpThirdStepWizard() {
  const thirdStepNextButtonUI = useButton({
    onClick() {
      CMSS.nextWizardStep();
    },
  });

  const exitButtonUI = useExitButton({
    navigatePath: "/",
  });

  return (
    <Fragment>
      <Label>Third step</Label>
      <H2>Settings</H2>
      <Button
        {...thirdStepNextButtonUI.props}
        className="mt-8"
        label="Don't be afraid to move on to the next step - you can always come back to this step"
      >
        Next
      </Button>
      <ExitButton {...exitButtonUI.props} className="mt-4">
        Exit
      </ExitButton>
    </Fragment>
  );
}

export const CreateMockUpThirdStepWizard = observer(
  _CreateMockUpThirdStepWizard,
);
