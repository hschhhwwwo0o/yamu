import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "../../../_store";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";

export function _CreateMockUpFourthStepWizard() {
  const downloadButtonUI = useButton({
    loadingText: "Downloading...",
    disabledText: "Successfully downloaded",
    /**
     * Download final image
     * @requirement UF/MOCK-UP/DOWNLOAD
     */
    onClick() {
      try {
        CMSS.modules.mockUpHTMLRenderer?.download("png");
        downloadButtonUI.utils.disable();
      } catch (error) {
        console.error(error);
      }
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
        {...downloadButtonUI.props}
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

export const CreateMockUpFourthStepWizard = observer(
  _CreateMockUpFourthStepWizard,
);
