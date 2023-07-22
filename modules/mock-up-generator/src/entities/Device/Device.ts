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
  };

  protected deviceLibraryItem: DeviceLibraryItem | undefined;

  constructor(name: string) {
    this.name = name;
    this.selectDevice(name);
  }

  /**
   * Retrieving a device from the device library
   *
   * @param deviceName The name of the device to select
   * @returns Selected device
   */
  private getDeviceLibraryItem(
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
  private setDeviceState(deviceLibraryItem: DeviceLibraryItem): void {
    {
      this.frame.height = deviceLibraryItem.height;
      this.frame.width = deviceLibraryItem.width;
      this.frame.image = deviceLibraryItem.frameImages.default;
      this.frame.paddingsInPercents = deviceLibraryItem.paddingsInPercents;
    }
    {
      this.name = deviceLibraryItem.name;
      this.deviceLibraryItem = deviceLibraryItem;
    }

    return;
  }

  /**
   * Finding a device to choose and selecting it
   *
   * @param deviceName The name of the device to be selected
   * @returns Selected device
   */
  private selectDevice(deviceName: DeviceLibraryItem["name"]) {
    /** @exception Device is not selected */
    if (!deviceName) {
      throw "Device is not selected";
    }

    const selectedDeviceLibraryItem: DeviceLibraryItem | undefined =
      this.getDeviceLibraryItem(deviceName);

    /** @exception The device is not found in the available device library */
    if (!selectedDeviceLibraryItem) {
      throw "Device is not supported";
    }

    this.setDeviceState(selectedDeviceLibraryItem);

    return {
      name: this.name,
      frame: this.frame,
    };
  }
}

export { Device };
