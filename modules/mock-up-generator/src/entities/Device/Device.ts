import { devicesLibrary } from "../../assets/data/devices-library.js";
import { DeviceLibraryItem } from "../../types/DeviceType.js";

class Device {
  public name = "";
  public frame = {
    width: 0,
    height: 0,
    image: "",
    paddingsInPercents: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    borderRadius: 0,
  };

  protected _deviceLibraryItem: DeviceLibraryItem | undefined;

  constructor(name: string = "") {
    this.name = name;
    this._selectDevice(name);
  }

  /**
   * Retrieving a device from the device library
   *
   * @param deviceName The name of the device to select
   * @returns Selected device
   */
  private _getDeviceLibraryItem(
    deviceName: DeviceLibraryItem["name"],
  ): DeviceLibraryItem | undefined {
    const selectedDeviceLibraryItem: DeviceLibraryItem | undefined =
      devicesLibrary.find(function findSelectedDevice(
        _device: DeviceLibraryItem,
      ) {
        return _device.name === deviceName;
      });
    return selectedDeviceLibraryItem;
  }

  /**
   * Change device state
   *
   * @param deviceLibraryItem DeviceLibraryItem
   */
  private _setDeviceState(deviceLibraryItem: DeviceLibraryItem): void {
    {
      this.frame.height = deviceLibraryItem.height;
      this.frame.width = deviceLibraryItem.width;
      this.frame.image = deviceLibraryItem.frameImages.default;
      this.frame.paddingsInPercents = deviceLibraryItem.paddingsInPercents;
      this.frame.borderRadius =
        deviceLibraryItem.borderRadius === undefined
          ? 10
          : deviceLibraryItem.borderRadius;
    }
    {
      this.name = deviceLibraryItem.name;
      this._deviceLibraryItem = deviceLibraryItem;
    }

    return;
  }

  /**
   * Finding a device to choose and selecting it
   *
   * @param deviceName The name of the device to be selected
   * @returns Selected device
   */
  private _selectDevice(deviceName: string = "") {
    /** @exception Device is not selected */
    if (!deviceName) {
      throw "Device is not selected";
    }

    const selectedDeviceLibraryItem: DeviceLibraryItem | undefined =
      this._getDeviceLibraryItem(deviceName);

    /** @exception The device is not found in the available device library */
    if (!selectedDeviceLibraryItem) {
      throw "Device is not supported";
    }

    this._setDeviceState(selectedDeviceLibraryItem);

    return {
      name: this.name,
      frame: this.frame,
    };
  }
}

export { Device };
