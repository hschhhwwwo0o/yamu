import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "../../_store";

/** Components */
import { H2 } from "@/components/text/H2";
import { Label } from "@/components/text/Label";
import { Button, useButton } from "@/components/form/Button";
import { ExitButton, useExitButton } from "@/components/form/ExitButton";
import { Switch } from "@/components/form/Switch";
import { Select, SelectOption } from "@/components/form/Select";

export function _CreateMockUpThirdStepWizard() {
  const settingsList =
    CMSS.modules.mockUpGenerator?.mockUp.device.getSettingsList();

  /**
   * Change settings with type `switch`
   * @requirement UF/MOCK-UP/SETTINGS-UP
   */
  function _changeSwitchSettingHandler(
    settingKey: string,
    newValue: boolean,
  ): void {
    CMSS.modules.mockUpGenerator?.mockUp.device.changeSettings({
      [settingKey]: newValue,
    });
    CMSS.modules.mockUpHTMLRenderer?.render(
      CMSS.modules.mockUpGenerator?.mockUp.renderData,
    );
  }

  /**
   * Change settings with type `variants`
   *
   * @requirement UF/MOCK-UP/RENDER
   * @requirement UF/MOCK-UP/SETTINGS-UP
   */
  function _changeSelectSettingHandler(
    settingKey: string,
    newValue: SelectOption,
  ): void {
    CMSS.modules.mockUpGenerator?.mockUp.device.changeSettings({
      isSystemBar:
        CMSS.modules.mockUpGenerator.mockUp.device.settings.isSystemBar,
      [settingKey]: newValue?.value,
    });
    CMSS.modules.mockUpHTMLRenderer?.render(
      CMSS.modules.mockUpGenerator?.mockUp.renderData,
    );
  }

  const thirdStepNextButtonUI = useButton({
    onClick() {
      CMSS.nextWizardStep();
    },
  });

  const exitButtonUI = useExitButton({
    navigatePath: "/",
  });

  return (
    <Fragment>
      <Label>Third step</Label>
      <H2>Settings</H2>
      <span className="block mt-6">
        {settingsList?.map(function _renderSettings(setting, index) {
          return (
            <Fragment key={index}>
              {setting.type === "switch" && (
                <Switch
                  title={setting.label}
                  onNewValueSet={function (newValue: boolean) {
                    _changeSwitchSettingHandler(setting.key, newValue);
                  }}
                />
              )}
              {setting.type === "variants" && (
                <Select
                  className="pt-4"
                  placeholder={setting.label}
                  options={
                    setting.variants?.map(function _formatToOptions(_variant) {
                      return {
                        label: _variant,
                        value: _variant,
                      };
                    }) || []
                  }
                  onSelect={function (newValue: SelectOption) {
                    _changeSelectSettingHandler(setting.key, newValue);
                  }}
                />
              )}
            </Fragment>
          );
        })}
      </span>
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
    </Fragment>
  );
}

export const CreateMockUpThirdStepWizard = observer(
  _CreateMockUpThirdStepWizard,
);
