import { devicesLibrary } from "../../assets/data/devices-library.js";
import { DeviceLibraryItem } from "../../types/DeviceType.js";

class Device {
  public name: string = "";
  public width: number = 0;
  public height: number = 0;
  public frameImage: string = "";

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
    deviceName: DeviceLibraryItem["name"]
  ): DeviceLibraryItem | undefined {
    const selectedDeviceLibraryItem: DeviceLibraryItem | undefined =
      devicesLibrary.find(function findSelectedDevice(
        _device: DeviceLibraryItem
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
    this.height = deviceLibraryItem.height;
    this.width = deviceLibraryItem.width;
    this.name = deviceLibraryItem.name;
    this.frameImage = deviceLibraryItem.frameImages.default;
    this.deviceLibraryItem = deviceLibraryItem;

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

    const selectedDevice = {
      name: selectedDeviceLibraryItem.name,
      width: selectedDeviceLibraryItem.width,
      height: selectedDeviceLibraryItem.height,
      frameImage: selectedDeviceLibraryItem.frameImages.default,
    };

    this.setDeviceState(selectedDeviceLibraryItem);

    return selectedDevice;
  }
}

export { Device };
