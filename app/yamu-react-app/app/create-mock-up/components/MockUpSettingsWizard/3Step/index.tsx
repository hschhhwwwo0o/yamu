import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpController } from "@/controllers/mock-up-controller";
import { MockUpWizardViewController } from "@/app/create-mock-up/_wizard-state-view-controller";
import { MockUpImageViewController } from "@/app/create-mock-up/_mock-up-image-state-view-controller";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";
import { Switch } from "@/components/form/Switch";
import { Select, SelectOption } from "@/components/form/Select";
import { MotionBlock } from "@/components/shared/MotionBlock";

export function _CreateMockUpThirdStepWizard(): React.JSX.Element {
  /**
   * Get settings list
   *
   * @requirement UF/DEVICE/GET-SETTINGS
   */
  const settingsList = MockUpController.getSettingsList();

  const thirdStepNextButtonUI = useButton({
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
        <Label>Third step</Label>
      </MotionBlock>
      <MotionBlock delay={0.2}>
        <H2>Settings</H2>
      </MotionBlock>
      <MotionBlock delay={0.3}>
        <span className="block mt-6">
          {settingsList?.map(function _renderSettings(setting, index) {
            return (
              <Fragment key={index}>
                {setting.type === "switch" && (
                  <Fragment>
                    <Switch
                      title={setting.label}
                      onNewValueSet={
                        /**
                         * Change settings
                         *
                         * @requirement UF/MOCK-UP/SETTINGS-UP
                         */
                        async function (newValue: boolean) {
                          const dataURL =
                            await MockUpController.changeSwitchSettingHandler(
                              setting.key,
                              newValue,
                            );
                          MockUpImageViewController.setImage(dataURL);
                        }
                      }
                    />
                  </Fragment>
                )}
                {setting.type === "variants" && (
                  <Fragment>
                    <Select
                      className="pt-4"
                      placeholder={setting.label}
                      options={setting.variants?.map(
                        function _formatToOptions(_variant) {
                          return {
                            label: _variant,
                            value: _variant,
                          };
                        },
                      )}
                      onSelect={
                        /**
                         * Change settings
                         *
                         * @requirement UF/MOCK-UP/SETTINGS-UP
                         */
                        async function (newValue: SelectOption) {
                          const dataURL =
                            await MockUpController.changeSelectSettingHandler(
                              setting.key,
                              newValue,
                            );
                          MockUpImageViewController.setImage(dataURL);
                        }
                      }
                    />
                  </Fragment>
                )}
              </Fragment>
            );
          })}
        </span>
      </MotionBlock>
      <MotionBlock delay={0.4}>
        <Button
          {...thirdStepNextButtonUI.props}
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

export const CreateMockUpThirdStepWizard = observer(
  _CreateMockUpThirdStepWizard,
);
