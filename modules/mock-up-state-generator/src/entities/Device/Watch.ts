import { Device } from "./Device.js";
import { SettingListItem, WatchSettings } from "./types.js";

class WatchDevice extends Device {
  public readonly type = "watch";
  public settings: WatchSettings = {
    isBW: false,
    isStrap: true,
  };

  private _onSettingsChange: () => void;

  constructor(name: string = "", onSettingsChange?: () => void) {
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
   * @requirement UF/DEVICE/OPTION-STRAP-TOGGLE
   *
   * @param settings Configuration settings
   * @returns Setted watch settings or undefined
   */
  public changeSettings(settings: WatchSettings): WatchSettings | undefined {
    this._setSettingsState(settings);

    this.frame.filters.bw = settings.isBW || this.settings.isBW || false;

    if (settings.isStrap === false) {
      this.frame.image = this._deviceLibraryItem?.frameImages.default || "";
      this._onSettingsChange();
      return this.settings;
    }
    if (settings.isStrap === true) {
      this.frame.image = this._deviceLibraryItem?.frameImages.withStrap || "";
      this._onSettingsChange();
      return this.settings;
    }

    this._onSettingsChange();

    return this.settings;
  }

  /**
   * Get settings device list item
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
