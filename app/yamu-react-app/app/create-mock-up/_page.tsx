"use client";

import React, { Fragment, useLayoutEffect, useMemo } from "react";

/** Modules */
import { MockUpHTMLRenderer } from "@module/mock-up-html-renderer";
import { MockUpGenerator } from "@module/mock-up-generator";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";
import { CreateMockUpScreenLayout } from "./layouts/CreateMockUpScreenLayout";
import { MockUpSettingsWizardLayout } from "./layouts/MockUpSettingsWizardLayout";
import { MockUpPreviewSceneLayout } from "./layouts/MockUpPreviewSceneLayout";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Select, useSelect } from "@/components/form/Select";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton } from "@/components/form/ExitButton";

export default function Page(): React.JSX.Element {
  /** Initialize mock-up generator module */
  const mockUpGenerator = useMemo(function () {
    return new MockUpGenerator();
  }, []);

  /** Initialize mock-up renderer module */
  const mockUpHTMLRenderer = useMemo(function () {
    return new MockUpHTMLRenderer("mock-up-container", {
      /** Approximate height of the navbar */
      heightInaccuracy: 70,
    });
  }, []);

  /** Initialize mock-up state and first render */
  useLayoutEffect(function firstRenderMockUp(): void {
    (async function () {
      /** Select default device */
      await mockUpGenerator.selectDevice("Apple Watch Ultra");

      /** Generate render data */
      const renderData = mockUpGenerator.generateRenderData();

      /** Rendering */
      mockUpHTMLRenderer.render(renderData);
    })();
  }, []);

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
    options: mockUpGenerator
      .getDevicesLibrary()
      .filter(function filterByType(_device) {
        return _device.type === deviceTypeSelectUI.props.value?.value;
      })
      .map(function reformatToOption(_device) {
        return {
          label: _device.name,
          value: _device.name,
        };
      }),
    isDisabled: deviceTypeSelectUI.props.value === undefined,
    onSelect(_option) {
      (async function () {
        /** Select device by name */
        await mockUpGenerator.selectDevice(_option?.label);

        /** Generate render data */
        const renderData = mockUpGenerator.generateRenderData();

        /** Rendering */
        mockUpHTMLRenderer.render(renderData);
      })();
    },
  });

  const firstStepNextButtonUI = useButton({
    disabledText: "Select the device to continue",
    isDisabled: devicesModelsSelectUI.props.value === undefined,
  });

  const exitButtonUI = useButton({
    navigatePath: "/",
  });

  return (
    <main>
      <WideWrapperLayout>
        <CreateMockUpScreenLayout>
          {
            /** Mock-up preview scene (Left side) */
            <MockUpPreviewSceneLayout>
              <div id="mock-up-container" />
            </MockUpPreviewSceneLayout>
          }
          {
            /** Mock-up settings wizard (Right side) */
            <MockUpSettingsWizardLayout>
              {
                /** First step */
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
              }
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
}
