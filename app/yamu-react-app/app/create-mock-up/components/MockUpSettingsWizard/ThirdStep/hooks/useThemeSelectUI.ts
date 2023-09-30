import { useState } from "react";

export function useThemeSelectUI() {
  const [isSystemBarSettingActive, setIsSystemBarSettingActive] =
    useState<boolean>(false);
  const themeSelectUI = {
    isActive: isSystemBarSettingActive,
    setActive(newValue: boolean) {
      setIsSystemBarSettingActive(newValue);
    },
    isDisabledThemeSelect(settingKey: string) {
      if (settingKey === "theme") {
        return !this.isActive;
      } else {
        return undefined;
      }
    },
  };

  return {
    themeSelectUI,
  };
}
