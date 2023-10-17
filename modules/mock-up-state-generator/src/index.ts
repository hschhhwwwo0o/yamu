import { PhoneDevice } from "./entities/Device/Phone.js";
import { WatchDevice } from "./entities/Device/Watch.js";

import { DeviceLibraryItem } from "./types/DeviceType.js";
import {
  DevicesLibraryManager,
  GetDevicesLibraryOptions,
} from "./entities/DevicesLibrary/DevicesLibrary.js";
import { TabletDevice } from "./entities/Device/Tablet.js";

export interface MockUpInterface {
  device: PhoneDevice | WatchDevice | TabletDevice;
  insertedImage: string | undefined;
  renderData: {
    frameWidth: number;
    frameHeight: number;
    frameImage: string;
    insertedImage: string;
    paddingsInPercents: {
      top: number;
      left: number;
      bottom: number;
      right: number;
    };
    borderRadius: number;
    isBW: boolean;
  };
}

class MockUpStateGenerator {
  public mockUp: MockUpInterface = {
    device: new PhoneDevice("iPhone 13"),
    insertedImage: undefined,
    renderData: {
      frameWidth: 0,
      frameHeight: 0,
      frameImage: "",
      borderRadius: 0,
      insertedImage: "",
      isBW: false,
      paddingsInPercents: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
  };

  /**
   * Getting affordable devices
   *
   * @requirement UF/DEVICES-LIBRARY/GET
   *
   * @returns Affordable devices library
   */
  public getDevicesLibrary(
    options?: GetDevicesLibraryOptions,
  ): DeviceLibraryItem[] {
    const DevicesLibrary = new DevicesLibraryManager();
    const devicesLibrary = DevicesLibrary.get(options);
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
    deviceName: string = "",
  ): Promise<MockUpInterface | undefined> {
    /** Clear inserted image */
    this.mockUp.insertedImage = undefined;

    const _devicesLibrary = await this.getDevicesLibrary();
    const _deviceLibraryItem: DeviceLibraryItem | undefined =
      _devicesLibrary.find(function _findDeviceByName(_deviceLibraryItem) {
        return _deviceLibraryItem.name === deviceName;
      });

    if (_deviceLibraryItem === undefined) {
      console.warn("Device is not selected");
      return;
    }

    switch (_deviceLibraryItem?.type) {
      case "phone":
        this.mockUp.device = await new PhoneDevice(deviceName, () => {
          this.mockUp.renderData = this._generateRenderData();
        });
        this.mockUp.renderData = this._generateRenderData();
        return this.mockUp;

      case "watch":
        this.mockUp.device = await new WatchDevice(deviceName, () => {
          this.mockUp.renderData = this._generateRenderData();
        });
        this.mockUp.renderData = this._generateRenderData();
        return this.mockUp;

      case "tablet":
        this.mockUp.device = await new TabletDevice(deviceName, () => {
          this.mockUp.renderData = this._generateRenderData();
        });
        this.mockUp.renderData = this._generateRenderData();
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
    this.mockUp.renderData = this._generateRenderData();

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
    this.mockUp.device = new PhoneDevice("");
    this.mockUp.insertedImage = undefined;
    this.mockUp.renderData = this._generateRenderData();

    return this.mockUp;
  }

  /**
   * Generates an object for rendering
   * @returns Render data object
   */
  private _generateRenderData() {
    const _mockUp = this.mockUp;
    const _renderData = {
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
    return _renderData;
  }
}

export { MockUpStateGenerator };
