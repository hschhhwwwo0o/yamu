/** Modules */
import { MockUpCanvasImageGenerator } from "@module/mock-up-canvas-image-generator";
import { MockUpStateGenerator } from "@module/mock-up-state-generator";
import { HTMLImageDownloader } from "@module/html-image-downloader";

class _MockUpController {
  public modules: {
    mockUpStateGenerator: MockUpStateGenerator | undefined;
    mockUpCanvasImageGenerator: MockUpCanvasImageGenerator | undefined;
    htmlImageDownloader: HTMLImageDownloader | undefined;
  } = {
    mockUpStateGenerator: undefined,
    mockUpCanvasImageGenerator: undefined,
    htmlImageDownloader: undefined,
  };

  public init(): void {
    this._initializeMockUpGenerator();
    this._initializeMockUpCanvasImageGenerator();
    this._initializeHTMLImageDownloader();
  }

  private _initializeMockUpGenerator(): MockUpStateGenerator {
    const _mockUpStateGenerator = new MockUpStateGenerator();
    this.modules.mockUpStateGenerator = _mockUpStateGenerator;
    return _mockUpStateGenerator;
  }

  private _initializeMockUpCanvasImageGenerator(): MockUpCanvasImageGenerator {
    const _mockUpCanvasImageGenerator = new MockUpCanvasImageGenerator();
    this.modules.mockUpCanvasImageGenerator = _mockUpCanvasImageGenerator;
    return _mockUpCanvasImageGenerator;
  }

  private _initializeHTMLImageDownloader(): HTMLImageDownloader {
    const _htmlImageDownloader = new HTMLImageDownloader();
    this.modules.htmlImageDownloader = _htmlImageDownloader;
    return _htmlImageDownloader;
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
   * @requirement UF/DEVICES-LIBRARY/GET
   */
  public getDevicesLibraryAsOptions(type = "") {
    return this.modules.mockUpStateGenerator
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
      const _mockUpState =
        await this.modules.mockUpStateGenerator?.selectDevice(deviceName);

      /** Generating a mock-up image */
      const _mockUpBase64Image =
        await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
          _mockUpState?.renderData,
        );
      return _mockUpBase64Image;
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
    const _mockUpState = this.modules.mockUpStateGenerator?.clearMockUp();

    /** Generating a mock-up image */
    const _mockUpBase64Image =
      await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
        _mockUpState?.renderData,
      );
    return _mockUpBase64Image;
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
      const _mockUpState = await this.modules.mockUpStateGenerator?.insertImage(
        image,
      );
      /** Generating a mock-up image */
      const _mockUpBase64Image =
        await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
          _mockUpState?.renderData,
        );
      return _mockUpBase64Image;
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
    return this.modules.mockUpStateGenerator?.mockUp.device.getSettingsList();
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
      this.modules.mockUpStateGenerator?.mockUp.device.changeSettings({
        [settingKey]: newValue,
      });
      /** Generating a mock-up image */
      const _mockUpBase64Image =
        await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
          this.modules.mockUpStateGenerator?.mockUp.renderData,
        );
      return _mockUpBase64Image;
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
          this.modules.mockUpStateGenerator?.mockUp.device.type === "phone" ||
          this.modules.mockUpStateGenerator?.mockUp.device.type === "tablet"
        ) {
          this.modules.mockUpStateGenerator?.mockUp.device.changeSettings({
            isSystemBar:
              this.modules.mockUpStateGenerator.mockUp.device.settings
                .isSystemBar,
            [settingKey]: newValue?.value,
          });
        }
        if (this.modules.mockUpStateGenerator?.mockUp.device.type === "watch") {
          this.modules.mockUpStateGenerator?.mockUp.device.changeSettings({
            [settingKey]: newValue?.value,
          });
        }
      }
      /** Generating a mock-up image */
      const _mockUpBase64Image =
        await this.modules.mockUpCanvasImageGenerator?.imageGenerate(
          this.modules.mockUpStateGenerator?.mockUp.renderData,
        );
      return _mockUpBase64Image;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Download final image
   * @requirement UF/MOCK-UP/DOWNLOAD
   */
  public downloadFinalImage(imageHref = "") {
    this.modules.htmlImageDownloader?.download(imageHref);
  }
}

const MockUpController = new _MockUpController();

export { MockUpController };
