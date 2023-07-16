import { Device } from "./Device.js";
import { PhoneSettings, SettingListItem } from "./types.js";

class PhoneDevice extends Device {
  public readonly type = "phone";
  public settings: PhoneSettings = {
    isSystemBar: true,
    theme: "light",
  };

  constructor(name: string) {
    super(name);
  }

  /**
   * Set new settings and change the image of the device frame accordingly
   *
   * @claim UF/MOCK-UP/SETTINGS-UP
   *
   * @param settings  Configuration settings
   * @returns Setted phone settings or undefined
   */
  public changeSettings(settings: PhoneSettings): PhoneSettings | undefined {
    this.setSettingsState(settings);

    if (settings.isSystemBar === false) {
      this.frameImage = this.deviceLibraryItem?.frameImages.default || "";
      return this.settings;
    }
    if (settings.isSystemBar === true) {
      if (settings.theme === "dark") {
        this.frameImage =
          this.deviceLibraryItem?.frameImages.withSystemBarDarkTheme || "";
        return this.settings;
      }
      if (settings.theme === "light") {
        this.frameImage =
          this.deviceLibraryItem?.frameImages.withSystemBarLightTheme || "";
        return this.settings;
      }
    }

    return;
  }

  /**
   * Set new settings
   *
   * @param newSettings Configuration settings
   * @returns New settings state
   */
  private setSettingsState(newSettings: PhoneSettings): PhoneSettings {
    this.settings = {
      ...this.settings,
      ...newSettings,
    };
    return this.settings;
  }

  /**
   * Get settings device list item
   *
   * @returns Settings list item
   */
  public getSettingsList(): SettingListItem[] {
    return [
      { key: "isSystemBar" },
      {
        key: "theme",
      },
    ];
  }
}

export { PhoneDevice };
