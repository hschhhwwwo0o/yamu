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
    this._setSettingsState(settings);

    if (settings.isSystemBar === false) {
      this.frame.image = this._deviceLibraryItem?.frameImages.default || "";
      return this.settings;
    }
    if (settings.isSystemBar === true) {
      if (settings.theme === "dark" || settings.theme === undefined) {
        this.frame.image =
          this._deviceLibraryItem?.frameImages.withSystemBarDarkTheme || "";
        return this.settings;
      }
      if (settings.theme === "light") {
        this.frame.image =
          this._deviceLibraryItem?.frameImages.withSystemBarLightTheme || "";
        return this.settings;
      }
    }

    return;
  }

  /**
   * Get settings device list item
   *
   * @returns Settings list item
   */
  public getSettingsList(): SettingListItem[] {
    return [
      {
        key: "isSystemBar",
        type: "switch",
        label: "Availability of the system bar",
      },
      {
        key: "theme",
        label: "Theme",
        type: "variants",
        variants: ["light", "dark"],
      },
    ];
  }

  /**
   * Set new settings
   *
   * @param newSettings Configuration settings
   * @returns New settings state
   */
  private _setSettingsState(newSettings: PhoneSettings): PhoneSettings {
    this.settings = {
      ...this.settings,
      ...newSettings,
    };
    return this.settings;
  }
}

export { PhoneDevice };
