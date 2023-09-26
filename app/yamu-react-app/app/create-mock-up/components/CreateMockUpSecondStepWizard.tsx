import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore } from "../_store";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton } from "@/components/form/ExitButton";
import { UploadImage, useUploadImage } from "@/components/form/UploadImage";

export function _CreateMockUpSecondStepWizard() {
  const mockUpGenerator = CreateMockUpScreenStore?.mockUpGenerator;
  const mockUpHTMLRenderer = CreateMockUpScreenStore?.mockUpHTMLRenderer;

  const insertedImageUploadImageUI = useUploadImage({
    onChange(value = "") {
      (async function _insertImageAndReRender() {
        const mockUpData = await mockUpGenerator?.insertImage(value);
        await mockUpHTMLRenderer?.render(mockUpData?.renderData);
      })();
    },
  });

  const firstStepNextButtonUI = useButton({
    disabledText: "Select the device to continue",
    isDisabled: !insertedImageUploadImageUI.props.value,
    onClick() {
      CreateMockUpScreenStore.nextStep();
    },
  });

  const exitButtonUI = useButton({
    navigatePath: "/",
  });

  return (
    <Fragment>
      <Label>Second step</Label>
      <H2>Add image</H2>
      <UploadImage
        {...insertedImageUploadImageUI.props}
        title="Select image: "
        label="Select the image to be placed inside the device frame"
        className="mt-6"
      />
      <Button
        {...firstStepNextButtonUI.props}
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

const CreateMockUpSecondStepWizard = observer(_CreateMockUpSecondStepWizard);

export { CreateMockUpSecondStepWizard };
