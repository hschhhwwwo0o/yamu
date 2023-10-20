import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpController } from "@/controllers/mock-up-controller";
import { MockUpWizardViewController } from "@/app/create-mock-up/_wizard-state-view-controller";
import { MockUpImageViewController } from "@/app/create-mock-up/_mock-up-image-state-view-controller";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Select, useSelect } from "@/components/form/Select";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";
import { MotionBlock } from "@/components/shared/MotionBlock";

export function _CreateMockUpFirstStepWizard(): React.JSX.Element {
  const deviceTypeSelectUI = useSelect({
    options: MockUpController.getDevicesTypesAsOptions(),

    /**
     * Clear device and render
     *
     * @requirement UF/MOCK-UP/CLEAR
     * @requirement UF/MOCK-UP/RENDER
     */
    onSelect() {
      deviceSelectUI.utils.clear();
      MockUpController.clear();
      MockUpImageViewController.setImage(undefined);
    },
  });

  const deviceSelectUI = useSelect({
    options: MockUpController.getDevicesLibraryAsOptions(
      deviceTypeSelectUI.props.value?.value,
    ),
    isDisabled: deviceTypeSelectUI.props.value === undefined,

    /**
     * Select device and render
     *
     * @requirement UF/MOCK-UP/DEVICE-SELECT
     * @requirement UF/MOCK-UP/IMAGE-GENERATE
     * @requirement UF/MOCK-UP/RENDER
     */
    async onSelect(_option) {
      const imageBase64String = await MockUpController.selectDevice(
        _option?.label,
      );
      MockUpImageViewController.setImage(imageBase64String);
    },
  });

  const firstStepNextButtonUI = useButton({
    disabledText: "Select the device to continue",
    isDisabled: deviceSelectUI.props.value === undefined,
    onClick() {
      MockUpWizardViewController.nextStep();
    },
  });

  const exitButtonUI = useExitButton({
    navigatePath: "/",
  });

  return (
    <Fragment>
      <Fragment>
        <MotionBlock delay={0.1}>
          <Label>First step</Label>
        </MotionBlock>
        <MotionBlock delay={0.2}>
          <H2>Choose device</H2>
        </MotionBlock>
        <MotionBlock delay={0.3}>
          <Select
            {...deviceTypeSelectUI.props}
            className="mt-10"
            placeholder="Type of device..."
            label="Select the type of device you want"
          />
        </MotionBlock>
        <MotionBlock delay={0.4}>
          <Select
            {...deviceSelectUI.props}
            className="mt-8"
            placeholder="Device model..."
            label="Select the model of device you want"
          />
        </MotionBlock>
        <MotionBlock delay={0.5}>
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
        </MotionBlock>
      </Fragment>
    </Fragment>
  );
}

const CreateMockUpFirstStepWizard = observer(_CreateMockUpFirstStepWizard);

export { CreateMockUpFirstStepWizard };
