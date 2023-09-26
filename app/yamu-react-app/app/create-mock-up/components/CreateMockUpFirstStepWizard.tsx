import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore } from "../_store";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Select, useSelect } from "@/components/form/Select";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton } from "@/components/form/ExitButton";

export function _CreateMockUpFirstStepWizard() {
  const mockUpGenerator = CreateMockUpScreenStore?.mockUpGenerator;
  const mockUpHTMLRenderer = CreateMockUpScreenStore?.mockUpHTMLRenderer;

  const deviceTypeSelectUI = useSelect({
    options: [
      { label: "Phone", value: "phone" },
      { label: "Watch", value: "watch" },
      { label: "Tablet", value: "tablet" },
    ],
    onSelect() {
      /** Clearing the device model when changing the device type */
      devicesModelsSelectUI.utils.clear();
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
       * @requirement UF/MOCK-UP/DEVICE-SELECT
       * @requirement UF/MOCK-UP/VIEW
       */
      (async function _selectDeviceAndRender() {
        const mockUpData = await mockUpGenerator?.selectDevice(_option?.label);
        mockUpHTMLRenderer?.render(mockUpData?.renderData);
      })();
    },
  });

  const firstStepNextButtonUI = useButton({
    disabledText: "Select the device to continue",
    isDisabled: devicesModelsSelectUI.props.value === undefined,
    onClick() {
      CreateMockUpScreenStore.nextStep();
    },
  });

  const exitButtonUI = useButton({
    navigatePath: "/",
  });

  return (
    <Fragment>
      <Fragment>
        <Label>First step</Label>
        <H2>Choose device</H2>
        <Select
          {...deviceTypeSelectUI.props}
          className="mt-10"
          placeholder="Type of device..."
          label="Select the type of device you want"
        />
        <Select
          {...devicesModelsSelectUI.props}
          className="mt-8"
          placeholder="Device model..."
          label="Select the model of device you want"
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
    </Fragment>
  );
}

const CreateMockUpFirstStepWizard = observer(_CreateMockUpFirstStepWizard);

export { CreateMockUpFirstStepWizard };
