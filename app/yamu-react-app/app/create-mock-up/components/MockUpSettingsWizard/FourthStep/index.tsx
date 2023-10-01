import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "../../../_store";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";
import { LinkCustom } from "@/components/text/Link";
import { MotionBlock } from "@/components/shared/MotionBlock";

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
      <MotionBlock delay={0.2}>
        <Label>Four step</Label>
      </MotionBlock>
      <MotionBlock delay={0.4}>
        <H2>Download result</H2>
      </MotionBlock>
      <MotionBlock delay={0.6}>
        <Button
          {...downloadButtonUI.props}
          label="The image will be downloaded in PNG format. Thank you for using our service"
          className="mt-8"
        >
          Download
        </Button>
      </MotionBlock>
      {downloadButtonUI.props.status === "disabled" && (
        <MotionBlock delay={0.2}>
          <LinkCustom className="mt-4" withLabel href="/feedback">
            Give feedback on the service performance
          </LinkCustom>
        </MotionBlock>
      )}
      <MotionBlock delay={0.8}>
        <ExitButton {...exitButtonUI.props} className="mt-4">
          Exit
        </ExitButton>
      </MotionBlock>
    </Fragment>
  );
}

export const CreateMockUpFourthStepWizard = observer(
  _CreateMockUpFourthStepWizard,
);
