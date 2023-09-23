import { HTMLImageDownloader } from "./HTMLImageDownloader.js";
import { HTMLRenderer } from "./HTMLRenderer.js";

import { Options, RenderData, SupportedImageFormat } from "./types.js";

class MockUpHTMLRenderer {
  private _htmlRenderer: undefined | HTMLRenderer = undefined;
  private _htmlImageDownloader: undefined | HTMLImageDownloader = undefined;

  constructor(containerId: string = "", options: Options) {
    this._htmlRenderer = new HTMLRenderer(containerId, options);
    this._htmlImageDownloader = new HTMLImageDownloader(containerId);
  }

  /**
   * Render mock-up
   *
   * @requirement UF/MOCK-UP/VIEW
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
      borderRadius: 0,
      frameImage: "",
      isBW: false,
    },
  ) {
    this._htmlRenderer?.render(renderData);
  }

  /**
   * Download mock-up
   *
   * @requirement UF/MOCK-UP/DOWNLOAD
   *
   * @param format String. The format of the final image. Accepts: "png", "webp", "jpeg"
   * @param quality A number from 0 to 1; Displays the compression ratio of the final image
   *
   * @returns String. Image link
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
