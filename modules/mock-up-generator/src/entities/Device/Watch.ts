import { Device } from "./Device.js";
import { SettingListItem, WatchSettings } from "./types.js";

class WatchDevice extends Device {
  public readonly type = "watch";
  public settings: WatchSettings = {
    isStrap: true,
  };

  constructor(name: string = "") {
    super(name);
  }

  /**
   * Set new settings and change the image of the device frame accordingly
   *
   * @requirement UF/MOCK-UP/SETTINGS-UP
   *
   * @requirement UF/MOCK-UP/OPTION-STRAP-TOGGLE
   *
   * @param settings Configuration settings
   * @returns Setted watch settings or undefined
   */
  public changeSettings(settings: WatchSettings): WatchSettings | undefined {
    this._setSettingsState(settings);

    if (settings.isStrap === false) {
      this.frame.image = this._deviceLibraryItem?.frameImages.default || "";
      return this.settings;
    }
    if (settings.isStrap === true) {
      this.frame.image = this._deviceLibraryItem?.frameImages.withStrap || "";
      return this.settings;
    }
  }

  /**
   * Get settings device list item
   *
   * @returns Settings list item
   */
  public getSettingsList(): SettingListItem[] {
    return [
      { key: "isStrap", type: "switch", label: "The presence of a strap" },
    ];
  }

  /**
   * Set new settings
   *
   * @param newSettings Configuration settings
   * @returns New settings state
   */
  private _setSettingsState(newSettings: WatchSettings): WatchSettings {
    this.settings = {
      ...this.settings,
      ...newSettings,
    };
    return this.settings;
  }
}

export { WatchDevice };
