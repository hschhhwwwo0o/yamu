import { HTMLImageDownloader } from "./HTMLImageDownloader.js";
import { HTMLRenderer } from "./HTMLRenderer.js";

import { RenderData, SupportedImageFormat } from "./types.js";

class MockUpHTMLRenderer {
  private _htmlRenderer: undefined | HTMLRenderer = undefined;
  private _htmlImageDownloader: undefined | HTMLImageDownloader = undefined;

  constructor(containerId: string = "") {
    this._htmlRenderer = new HTMLRenderer(containerId);
    this._htmlImageDownloader = new HTMLImageDownloader(containerId);
  }

  /**
   * Render mock-up
   *
   * @claim UF/MOCK-UP/VIEW
   */
  public render(
    renderData: RenderData = {
      frameHeight: 0,
      frameWidth: 0,
      insertedImage: "",
      paddingsInPercents: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      frameImage: "",
    },
  ) {
    this._htmlRenderer?.render(renderData);
  }

  /**
   * Download mock-up
   *
   * @claim UF/MOCK-UP/DOWNLOAD
   */
  public async download(
    format: SupportedImageFormat = "png",
    quality = 1,
  ): Promise<string | undefined> {
    const result = await this._htmlImageDownloader?.download(format, quality);
    return result;
  }
}

export { MockUpHTMLRenderer };
