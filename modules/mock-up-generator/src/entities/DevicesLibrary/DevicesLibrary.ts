import { devicesLibrary } from "../../assets/data/devices-library.js";
import { DeviceLibraryItem } from "../../types/DeviceType.js";

export class DevicesLibraryManager {
  constructor() {}

  /**
   * Getting affordable devices
   *
   * @claim UF/DEVICES-LIBRARY/GET
   *
   * @returns Affordable devices library
   */
  public get(): DeviceLibraryItem[] {
    return devicesLibrary;
  }
}
