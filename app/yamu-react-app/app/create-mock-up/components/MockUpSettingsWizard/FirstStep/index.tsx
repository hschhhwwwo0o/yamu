import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpController } from "@/app/create-mock-up/_mock-up-controller";
import { MockUpWizardController } from "@/app/create-mock-up/_wizard-state-controller";

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
    onSelect() {
      /**
       * Clearing the `device model` when changing the `device type`
       */
      deviceSelectUI.utils.clear();
      MockUpController.selectDevice();
    },
  });

  const deviceSelectUI = useSelect({
    options: MockUpController.getDevicesLibraryAsOptions(
      deviceTypeSelectUI.props.value?.value,
    ),
    isDisabled: deviceTypeSelectUI.props.value === undefined,
    onSelect(_option) {
      MockUpController.selectDevice(_option?.label);
    },
  });

  const firstStepNextButtonUI = useButton({
    disabledText: "Select the device to continue",
    isDisabled: deviceSelectUI.props.value === undefined,
    onClick() {
      MockUpWizardController.nextStep();
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
