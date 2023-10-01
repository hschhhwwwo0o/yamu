import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "../../../_store";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Select, useSelect } from "@/components/form/Select";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";
import { MotionBlock } from "@/components/shared/MotionBlock";

export function _CreateMockUpFirstStepWizard() {
  const mockUpGenerator = CMSS?.modules.mockUpGenerator;
  const mockUpHTMLRenderer = CMSS?.modules.mockUpHTMLRenderer;

  const deviceTypeSelectUI = useSelect({
    options: [
      { label: "Phone", value: "phone" },
      { label: "Watch", value: "watch" },
      { label: "Tablet", value: "tablet" },
    ],
    onSelect() {
      /**
       * Clearing the `device model` when changing the `device type`
       * @requirement UF/MOCK-UP/RENDER
       */
      (async function _clearingDeviceModel() {
        try {
          devicesModelsSelectUI.utils.clear();
          const _mockUpData = await mockUpGenerator?.selectDevice();
          await mockUpHTMLRenderer?.render(_mockUpData?.renderData);
        } catch (error) {
          console.error(error);
        }
      })();
    },
  });

  const devicesModelsSelectUI = useSelect({
    options:
      mockUpGenerator
        ?.getDevicesLibrary({
          type: deviceTypeSelectUI.props.value?.value,
        })
        .map(function _formatToOption(_device) {
          return {
            label: _device.name,
            value: _device.name,
          };
        }) || [],
    isDisabled: deviceTypeSelectUI.props.value === undefined,
    onSelect(_option) {
      /**
       * Select device and render
       *
       * @requirement UF/MOCK-UP/DEVICE-SELECT
       * @requirement UF/MOCK-UP/RENDER
       */
      (async function _selectDeviceAndRender() {
        try {
          const _mockUpData = await mockUpGenerator?.selectDevice(
            _option?.label,
          );
          await mockUpHTMLRenderer?.render(_mockUpData?.renderData);
        } catch (error) {
          console.error(error);
        }
      })();
    },
  });

  const firstStepNextButtonUI = useButton({
    disabledText: "Select the device to continue",
    isDisabled: devicesModelsSelectUI.props.value === undefined,
    onClick() {
      CMSS.nextWizardStep();
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
            {...devicesModelsSelectUI.props}
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
