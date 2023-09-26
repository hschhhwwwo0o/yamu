import { devicesLibrary } from "../../assets/data/devices-library.js";
import { DeviceLibraryItem } from "../../types/DeviceType.js";

export interface GetDevicesLibraryOptions {
  type?: "watch" | undefined | "phone" | "tablet";
}

export class DevicesLibraryManager {
  constructor() {}

  /**
   * Getting affordable devices
   *
   * @requirement UF/DEVICES-LIBRARY/GET
   *
   * @returns Affordable devices library
   */
  public get(options?: GetDevicesLibraryOptions): DeviceLibraryItem[] {
    if (options?.type === undefined) {
      return devicesLibrary;
    } else {
      return devicesLibrary.filter(function _filterByType(_device) {
        return _device.type === options.type;
      });
    }
  }
}
