import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "../../_store";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";

export function _CreateMockUpFourStepWizard() {
  const fourStepNextButtonUI = useButton({
    /** @requirement UF/MOCK-UP/DOWNLOAD */
    loadingText: "Downloading...",
    async onClick() {
      fourStepNextButtonUI.utils.startLoading();
      await CMSS.modules.mockUpHTMLRenderer?.download("png");
      fourStepNextButtonUI.utils.toDefaultStatus();
    },
  });

  const exitButtonUI = useExitButton({
    navigatePath: "/",
  });

  return (
    <Fragment>
      <Label>Four step</Label>
      <H2>Download result</H2>
      <Button
        {...fourStepNextButtonUI.props}
        label="The image will be downloaded in PNG format. Thank you for using our service"
        className="mt-8"
      >
        Download
      </Button>
      <ExitButton {...exitButtonUI.props} className="mt-4">
        Exit
      </ExitButton>
    </Fragment>
  );
}

export const CreateMockUpFourStepWizard = observer(_CreateMockUpFourStepWizard);
