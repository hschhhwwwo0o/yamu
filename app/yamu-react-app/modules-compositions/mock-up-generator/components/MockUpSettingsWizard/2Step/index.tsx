import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpController } from "../../../controllers/mock-up-controller";
import { MockUpWizardViewController } from "../../../controllers/_wizard-state-view-controller";
import { MockUpImageViewController } from "../../../controllers/_mock-up-image-state-view-controller";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";
import { UploadImage, useUploadImage } from "@/components/form/UploadImage";
import { MotionBlock } from "@/components/shared/MotionBlock";

export function _CreateMockUpSecondStepWizard(): React.JSX.Element {
  const insertedImageUploadImageUI = useUploadImage({
    /**
     * Insert image in mock-up and rerender
     *
     * @requirement UF/MOCK-UP/IMAGE-GENERATE
     * @requirement UF/MOCK-UP/INSERT-DESIGN
     * @requirement UF/MOCK-UP/RENDER
     */
    async onChange(imageUrl = "") {
      const imageBase64String = await MockUpController.insertImage(imageUrl);
      MockUpImageViewController.setImage(imageBase64String);
    },
  });

  const secondStepNextButton = useButton({
    disabledText: "Select the image to continue",
    isDisabled: !insertedImageUploadImageUI.props.value,
    onClick() {
      MockUpWizardViewController.nextStep();
    },
  });

  const exitButtonUI = useExitButton({
    navigatePath: "/",
  });

  return (
    <Fragment>
      <MotionBlock delay={0.1}>
        <Label>Second step</Label>
      </MotionBlock>
      <MotionBlock delay={0.2}>
        <H2>Add image</H2>
      </MotionBlock>
      <MotionBlock delay={0.3}>
        <UploadImage
          {...insertedImageUploadImageUI.props}
          title="Select image: "
          label="Select the image to be placed inside the device frame"
          className="mt-6"
        />
      </MotionBlock>
      <MotionBlock delay={0.4}>
        <Button
          {...secondStepNextButton.props}
          className="mt-8"
          label="Don't be afraid to move on to the next step - you can always come back to this step"
        >
          Next
        </Button>
        <ExitButton {...exitButtonUI.props} className="mt-4">
          Exit
        </ExitButton>
      </MotionBlock>
    </Fragment>
  );
}

/** Connect to store */
const CreateMockUpSecondStepWizard = observer(_CreateMockUpSecondStepWizard);

export { CreateMockUpSecondStepWizard };
