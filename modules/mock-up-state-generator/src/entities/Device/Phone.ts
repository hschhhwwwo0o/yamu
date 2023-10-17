import { Device } from "./Device.js";
import { PhoneSettings, SettingListItem } from "./types.js";

class PhoneDevice extends Device {
  public readonly type = "phone";
  public settings: PhoneSettings = {
    isBW: false,
    isSystemBar: false,
    theme: "light",
  };

  private _onSettingsChange: () => void;

  constructor(name: string = "", onSettingsChange = () => undefined) {
    super(name);
    if (onSettingsChange) {
      this._onSettingsChange = onSettingsChange;
    } else {
      this._onSettingsChange = () => undefined;
    }
  }

  /**
   * Set new settings and change the image of the device frame accordingly
   *
   * @requirement UF/MOCK-UP/SETTINGS-UP
   * @requirement UF/MOCK-UP/OPTION-BW-STYLE
   *
   * @requirement UF/DEVICE/OPTION-SYSTEM-BAR-TOGGLE
   * @requirement UF/DEVICE/OPTION-THEME-TOGGLE
   *
   * @param settings  Configuration settings
   *
   * @returns Setted phone settings or undefined
   */
  public changeSettings(settings: PhoneSettings): PhoneSettings | undefined {
    this._setSettingsState(settings);

    const _theme = settings.theme || this.settings.theme || undefined;

    this.frame.filters.bw = settings.isBW || this.settings.isBW || false;

    if (settings.isSystemBar === false) {
      this.frame.image = this._deviceLibraryItem?.frameImages.default || "";
      this._onSettingsChange();
      return this.settings;
    }

    if (settings.isSystemBar === true) {
      if (_theme === "dark" || _theme === undefined) {
        this.frame.image =
          this._deviceLibraryItem?.frameImages.withSystemBarDarkTheme || "";
        this._onSettingsChange();
        return this.settings;
      }
      if (_theme === "light") {
        this.frame.image =
          this._deviceLibraryItem?.frameImages.withSystemBarLightTheme || "";
        this._onSettingsChange();
        return this.settings;
      }
    }

    this._onSettingsChange();

    return this.settings;
  }

  /**
   * Get settings device list item
   *
   * @requirement UF/DEVICE/GET-SETTINGS
   *
   * @returns Settings list item
   */
  public getSettingsList(): SettingListItem[] {
    return [
      {
        key: "isBW",
        type: "switch",
        label: "BW filter",
      },
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
