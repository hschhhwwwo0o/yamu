/** Modules */
import { MockUpCanvasImageGenerator } from "@module/mock-up-canvas-image-generator";
import { MockUpGenerator } from "@module/mock-up-generator";
import { HTMLImageDownloader } from "@module/html-image-downloader";

class _MockUpController {
  public modules: {
    mockUpGenerator: MockUpGenerator | undefined;
    mockUpCanvasImageGenerator: MockUpCanvasImageGenerator | undefined;
  } = {
    mockUpGenerator: undefined,
    mockUpCanvasImageGenerator: undefined,
  };

  public init(): void {
    this.initializeMockUpGenerator();
    this.initializeMockUpCanvasImageGenerator();
  }

  private initializeMockUpGenerator(): MockUpGenerator {
    const _mockUpGenerator = new MockUpGenerator();
    this.modules.mockUpGenerator = _mockUpGenerator;
    return _mockUpGenerator;
  }

  private initializeMockUpCanvasImageGenerator(): MockUpCanvasImageGenerator {
    const _mockUpCanvasImageGenerator = new MockUpCanvasImageGenerator();
    this.modules.mockUpCanvasImageGenerator = _mockUpCanvasImageGenerator;
    return _mockUpCanvasImageGenerator;
  }

  public getDevicesTypesAsOptions() {
    return [
      { label: "Phone", value: "phone" },
      { label: "Watch", value: "watch" },
      { label: "Tablet", value: "tablet" },
    ];
  }

  /**
   * Getting affordable devices as options array
   *
   * @requirement UF/DEVICES-LIBRARY/GET
   */
  public getDevicesLibraryAsOptions(type = "") {
    return this.modules.mockUpGenerator
      ?.getDevicesLibrary({
        type,
      })
      .map(function _formatToOption(_device) {
        return {
          label: _device.name,
          value: _device.name,
        };
      });
  }

  /**
   * Select device and render
   *
   * @requirement UF/MOCK-UP/DEVICE-SELECT
   * @requirement UF/MOCK-UP/IMAGE-GENERATE
   */
  public async selectDevice(deviceName = "") {
    try {
      /** Selecting a device and getting a new mock-up state */
      const _mockUpData = await this.modules.mockUpGenerator?.selectDevice(
        deviceName,
      );

      /** Generating a mock-up image */
      const dataURL =
        await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
          _mockUpData?.renderData,
        );
      return dataURL;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Clear device and render
   *
   * @requirement UF/MOCK-UP/CLEAR
   * @requirement UF/MOCK-UP/IMAGE-GENERATE
   */
  public async clear() {
    /** Clearing a mock-up and getting a new mock-up state */
    const _mockUpData = this.modules.mockUpGenerator?.clearMockUp();

    /** Generating a mock-up image */
    const dataURL =
      await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
        _mockUpData?.renderData,
      );
    return dataURL;
  }

  /**
   * Insert image in mock-up and rerender
   *
   * @requirement UF/MOCK-UP/INSERT-DESIGN
   * @requirement UF/MOCK-UP/IMAGE-GENERATE
   */
  public async insertImage(image = "") {
    try {
      /** Inserting a image and getting a new mock-up state */
      const _mockUpData = await this.modules.mockUpGenerator?.insertImage(
        image,
      );
      /** Generating a mock-up image */
      const dataURL =
        await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
          _mockUpData?.renderData,
        );
      return dataURL;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Get settings list
   *
   * @requirement UF/MOCK-UP/SETTINGS-UP
   * @requirement UF/DEVICE/GET-SETTINGS
   */
  public getSettingsList() {
    return this.modules.mockUpGenerator?.mockUp.device.getSettingsList();
  }

  /**
   * Change settings with type `switch`
   *
   * @requirement UF/MOCK-UP/SETTINGS-UP
   * @requirement UF/MOCK-UP/IMAGE-GENERATE
   */
  public async changeSwitchSettingHandler(settingKey = "", newValue = false) {
    try {
      /** Setting change. Changes the state of the mocap */
      this.modules.mockUpGenerator?.mockUp.device.changeSettings({
        [settingKey]: newValue,
      });
      /** Generating a mock-up image */
      const dataURL =
        await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
          this.modules.mockUpGenerator?.mockUp.renderData,
        );
      return dataURL;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Change settings with type `variants`
   *
   * @requirement UF/MOCK-UP/SETTINGS-UP
   * @requirement UF/MOCK-UP/IMAGE-GENERATE
   */
  public async changeSelectSettingHandler(
    settingKey = "",
    newValue = { label: "", value: "" },
  ) {
    try {
      /** Setting change. Changes the state of the mocap */
      {
        if (
          this.modules.mockUpGenerator?.mockUp.device.type === "phone" ||
          this.modules.mockUpGenerator?.mockUp.device.type === "tablet"
        ) {
          this.modules.mockUpGenerator?.mockUp.device.changeSettings({
            isSystemBar:
              this.modules.mockUpGenerator.mockUp.device.settings.isSystemBar,
            [settingKey]: newValue?.value,
          });
        }
        if (this.modules.mockUpGenerator?.mockUp.device.type === "watch") {
          this.modules.mockUpGenerator?.mockUp.device.changeSettings({
            [settingKey]: newValue?.value,
          });
        }
      }
      /** Generating a mock-up image */
      const dataURL =
        await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
          this.modules.mockUpGenerator?.mockUp.renderData,
        );
      return dataURL;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Download final image
   *
   * @requirement UF/MOCK-UP/DOWNLOAD
   */
  public downloadFinalImage(imageHref: string) {
    new HTMLImageDownloader().download(imageHref);
  }
}

const MockUpController = new _MockUpController();

export { MockUpController };
