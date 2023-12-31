import { DeviceLibraryItem } from "../../types/DeviceType.js";
import { DevicesLibraryManager } from "../DevicesLibrary/DevicesLibrary.js";

class Device {
  public name: string = "";
  public frame = {
    filters: {
      bw: false,
    },
    width: 0,
    height: 0,
    image: "",
    screen: {
      width: 0,
      height: 0,
    },
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
  private _getDeviceLibraryItem(deviceName: DeviceLibraryItem["name"] = "") {
    const _devicesLibrary = new DevicesLibraryManager().get();
    const _selectedDeviceLibraryItem: DeviceLibraryItem | undefined =
      _devicesLibrary.find(function findSelectedDevice(
        _device: DeviceLibraryItem,
      ) {
        return _device.name === deviceName;
      });
    return _selectedDeviceLibraryItem;
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
      this.frame.screen = deviceLibraryItem.screen;
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
  private async _selectDevice(deviceName: string = "") {
    /** @exception Device is not selected */
    if (!deviceName) {
      throw "Device is not selected";
    }

    const _selectedDeviceLibraryItem: DeviceLibraryItem | undefined =
      await this._getDeviceLibraryItem(deviceName);

    /** @exception The device is not found in the available device library */
    if (!_selectedDeviceLibraryItem) {
      throw "Device is not supported";
    }

    this._setDeviceState(_selectedDeviceLibraryItem);

    return {
      name: this.name,
      frame: this.frame,
    };
  }
}

export { Device };
