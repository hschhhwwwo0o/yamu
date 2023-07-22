import { HTMLImageDownloader } from "./HTMLImageDownloader.js";
import { HTMLRenderer } from "./HTMLRenderer.js";

import { RenderData, SupportedImageFormat } from "./types.js";

class MockUpHTMLRenderer {
  private htmlRenderer: undefined | HTMLRenderer = undefined;
  private htmlImageDownloader: undefined | HTMLImageDownloader = undefined;

  constructor(containerId: string = "") {
    this.htmlRenderer = new HTMLRenderer(containerId);
    this.htmlImageDownloader = new HTMLImageDownloader(containerId);
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
    this.htmlRenderer?.render(renderData);
  }

  /**
   * Download mock-up
   *
   * @claim UF/MOCK-UP/DOWNLOAD
   */
  public async download(
    format: SupportedImageFormat = "png",
  ): Promise<string | undefined> {
    const result = await this.htmlImageDownloader?.download(format);
    return result;
  }
}

export { MockUpHTMLRenderer };
