import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpController } from "@/controllers/mock-up-controller";
import { MockUpWizardController } from "@/app/create-mock-up/_wizard-state-controller";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";
import { Switch } from "@/components/form/Switch";
import { Select, SelectOption } from "@/components/form/Select";
import { MotionBlock } from "@/components/shared/MotionBlock";

export function _CreateMockUpThirdStepWizard(): React.JSX.Element {
  const settingsList = MockUpController.getSettingsList();

  const thirdStepNextButtonUI = useButton({
    onClick() {
      MockUpWizardController.nextStep();
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
                  <Switch
                    title={setting.label}
                    onNewValueSet={function (newValue: boolean) {
                      MockUpController.changeSwitchSettingHandler(
                        setting.key,
                        newValue,
                      );
                    }}
                  />
                )}
                {setting.type === "variants" && (
                  <Fragment>
                    {setting.key === "theme" && (
                      <Select
                        className="pt-4"
                        isDisabled={MockUpController.data.isDisabledThemeSelect(
                          setting.key,
                        )}
                        placeholder={setting.label}
                        options={
                          setting.variants?.map(
                            function _formatToOptions(_variant) {
                              return {
                                label: _variant,
                                value: _variant,
                              };
                            },
                          ) || []
                        }
                        onSelect={function (newValue: SelectOption) {
                          MockUpController.changeSelectSettingHandler(
                            setting.key,
                            newValue,
                          );
                        }}
                      />
                    )}
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
