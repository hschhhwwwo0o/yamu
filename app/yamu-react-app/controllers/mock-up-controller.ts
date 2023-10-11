/** Modules */
import { MockUpHTMLRenderer } from "@module/mock-up-html-renderer";
import { MockUpGenerator } from "@module/mock-up-generator";

class _MockUpController {
  public modules: {
    mockUpGenerator: MockUpGenerator | undefined;
    mockUpHTMLRenderer: MockUpHTMLRenderer | undefined;
  } = {
    mockUpGenerator: undefined,
    mockUpHTMLRenderer: undefined,
  };

  public initializeMockUpGenerator(): MockUpGenerator {
    const _mockUpGenerator = new MockUpGenerator();
    this.modules.mockUpGenerator = _mockUpGenerator;
    return _mockUpGenerator;
  }

  public initializeMockUpHTMLRenderer(containerId = ""): MockUpHTMLRenderer {
    const _mockUpHTMLRenderer = new MockUpHTMLRenderer(containerId, {
      heightInaccuracy: 70,
    });
    this.modules.mockUpHTMLRenderer = _mockUpHTMLRenderer;
    return _mockUpHTMLRenderer;
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
   * @requirement UF/MOCK-UP/RENDER
   */
  public async selectDevice(deviceName = "") {
    try {
      const _mockUpData = await this.modules.mockUpGenerator?.selectDevice(
        deviceName,
      );
      await this.modules.mockUpHTMLRenderer?.render(_mockUpData?.renderData);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Clear device and render
   *
   * @requirement UF/MOCK-UP/CLEAR
   * @requirement UF/MOCK-UP/RENDER
   */
  public async clear() {
    const _mockUpData = this.modules.mockUpGenerator?.clearMockUp();
    await this.modules.mockUpHTMLRenderer?.render(_mockUpData?.renderData);
  }

  /**
   * Insert image in mock-up and rerender
   *
   * @requirement UF/MOCK-UP/RENDER
   * @requirement UF/MOCK-UP/INSERT-DESIGN
   */
  public async insertImage(image = "") {
    try {
      const _mockUpData = await this.modules.mockUpGenerator?.insertImage(
        image,
      );
      await this.modules.mockUpHTMLRenderer?.render(_mockUpData?.renderData);
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
   * @requirement UF/MOCK-UP/RENDER
   */
  public changeSwitchSettingHandler(settingKey = "", newValue = false) {
    try {
      this.modules.mockUpGenerator?.mockUp.device.changeSettings({
        [settingKey]: newValue,
      });
      this.modules.mockUpHTMLRenderer?.render(
        this.modules.mockUpGenerator?.mockUp.renderData,
      );
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Change settings with type `variants`
   *
   * @requirement UF/MOCK-UP/RENDER
   * @requirement UF/MOCK-UP/SETTINGS-UP
   */
  public changeSelectSettingHandler(
    settingKey = "",
    newValue = { label: "", value: "" },
  ) {
    try {
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
      this.modules.mockUpHTMLRenderer?.render(
        this.modules.mockUpGenerator?.mockUp.renderData,
      );
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Download final image
   *
   * @requirement UF/MOCK-UP/DOWNLOAD
   */
  public downloadFinalImage() {
    this.modules.mockUpHTMLRenderer?.download("png");
  }
}

const MockUpController = new _MockUpController();

export { MockUpController };
