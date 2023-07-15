import { HTMLImageDownloader } from "./HTMLImageDownloader.js";
import { HTMLRenderer } from "./HTMLRenderer.js";

import { RenderData, SupportedImageFormat } from "./types.js";

class MockUpHTMLRenderer {
  private htmlRenderer: undefined | HTMLRenderer = undefined;
  private htmlImageDownloader: undefined | HTMLImageDownloader = undefined;

  constructor(containerId: string) {
    this.htmlRenderer = new HTMLRenderer(containerId);
    this.htmlImageDownloader = new HTMLImageDownloader(containerId);
  }

  /**
   * Render mock-up
   *
   * @claim UF/MOCK-UP/VIEW
   */
  public render(renderData: RenderData) {
    this.htmlRenderer?.render(renderData);
  }

  /**
   * Download mock-up
   *
   * @claim UF/MOCK-UP/DOWNLOAD
   */
  public async download(
    format: SupportedImageFormat,
  ): Promise<string | undefined> {
    const result = await this.htmlImageDownloader?.download(format);
    return result;
  }
}

export { MockUpHTMLRenderer };
