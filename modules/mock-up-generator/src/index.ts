import { PhoneDevice } from "./entities/Device/Phone.js";
import { WatchDevice } from "./entities/Device/Watch.js";

import { DeviceLibraryItem, DeviceType } from "./types/DeviceType.js";
import { DevicesLibraryManager } from "./entities/DevicesLibrary/DevicesLibrary.js";
import { TabletDevice } from "./entities/Device/Tablet.js";

export interface MockUpInterface {
  device: PhoneDevice | WatchDevice | TabletDevice;
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
   * @requirement UF/DEVICES-LIBRARY/GET
   *
   * @returns Affordable devices library
   */
  public async getDevicesLibrary(): Promise<DeviceLibraryItem[]> {
    const DevicesLibrary = new DevicesLibraryManager();
    const devicesLibrary = await DevicesLibrary.get();
    return devicesLibrary;
  }

  /**
   * Selecting a device from the library
   *
   * @requirement UF/MOCK-UP/DEVICE-SELECT
   *
   * @param deviceName Name of device to choose from
   *
   * @returns New state of the mockup
   */
  public async selectDevice(
    deviceName: string = "iPhone 13",
  ): Promise<MockUpInterface> {
    this.mockUp.insertedImage = undefined;

    const devicesLibrary = await this.getDevicesLibrary();
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

      case "tablet":
        this.mockUp.device = new TabletDevice(deviceName);
        return this.mockUp;

      default:
        throw "Device type error";
    }
  }

  /**
   * Adding an image inside a mockup
   *
   * @requirement UF/MOCK-UP/INSERT-DESIGN
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
   * @requirement UF/MOCK-UP/CLEAR
   *
   * @returns New state of the mockup
   */
  public clearMockUp(): MockUpInterface {
    this.mockUp.device = new PhoneDevice("iPhone 13");
    this.mockUp.insertedImage = undefined;

    return this.mockUp;
  }

  /**
   * Generates an object for rendering
   *
   * @returns Render data object
   */
  public generateRenderData() {
    const _mockUp = this.mockUp;
    const renderData = {
      frameWidth: _mockUp.device.frame.width,
      frameHeight: _mockUp.device.frame.height,
      frameImage: _mockUp.device.frame.image,
      insertedImage: _mockUp.insertedImage || "",
      paddingsInPercents: {
        top: _mockUp.device.frame.paddingsInPercents.top,
        left: _mockUp.device.frame.paddingsInPercents.left,
        bottom: _mockUp.device.frame.paddingsInPercents.bottom,
        right: _mockUp.device.frame.paddingsInPercents.right,
      },
      borderRadius: _mockUp.device.frame.borderRadius,
      isBW: _mockUp.device.frame.filters.bw,
    };
    return renderData;
  }
}

export { MockUpGenerator };
