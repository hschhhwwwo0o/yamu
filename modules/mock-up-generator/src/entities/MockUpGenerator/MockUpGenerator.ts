import { PhoneDevice } from "../Device/Phone.js";
import { WatchDevice } from "../Device/Watch.js";

import { DeviceLibraryItem, DeviceType } from "../../types/DeviceType.js";
import { DevicesLibraryManager } from "../DevicesLibrary/DevicesLibrary.js";

export interface MockUpInterface {
  device: PhoneDevice | WatchDevice;
  insertedImage: string | undefined;
}

class MockUpGenerator {
  public mockUp: MockUpInterface = {
    device: new PhoneDevice("iPhone 13"),
    insertedImage: undefined,
  };

  /**
   * Getting affordable devices
   *
   * @claim UF/DEVICES-LIBRARY/GET
   *
   * @returns Affordable devices library
   */
  public getDevicesLibrary(): DeviceLibraryItem[] {
    const DevicesLibrary = new DevicesLibraryManager();
    return DevicesLibrary.get();
  }

  /**
   * Selecting a device from the library
   *
   * @claim UF/MOCK-UP/DEVICE-SELECT
   *
   * @param type Type of Device to be selected
   * @param deviceName Name of device to choose from
   *
   * @returns New state of the mockup
   */
  public selectDevice(deviceName: string = "iPhone 13"): MockUpInterface {
    this.mockUp.insertedImage = undefined;

    const devicesLibrary = new DevicesLibraryManager().get();
    const type: DeviceType | undefined = devicesLibrary.find(
      function _findDeviceByName(_deviceLibraryItem) {
        return _deviceLibraryItem.name === deviceName;
      },
    )?.type;

    switch (type) {
      case "phone":
        this.mockUp.device = new PhoneDevice(deviceName);
        return this.mockUp;

      case "watch":
        this.mockUp.device = new WatchDevice(deviceName);
        return this.mockUp;

      default:
        throw "Device type error";
    }
  }

  /**
   * Adding an image inside a mockup
   *
   * @claim UF/MOCK-UP/INSERT-DESIGN
   *
   * @param image Image to insert into a mockup
   *
   * @returns New state of the mockup
   */
  public insertImage(image: string = ""): MockUpInterface {
    if (!image) {
      throw "Image is not provided";
    }
    this.mockUp.insertedImage = image;

    return this.mockUp;
  }

  /**
   * Resetting a mockup
   *
   * @claim UF/MOCK-UP/CLEAR
   *
   * @returns New state of the mockup
   */
  public clearMockUp(): MockUpInterface {
    this.mockUp.device = new PhoneDevice("iPhone 13");
    this.mockUp.insertedImage = undefined;

    return this.mockUp;
  }
}

export { MockUpGenerator };
