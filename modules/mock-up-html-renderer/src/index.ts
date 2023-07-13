import { HTMLRenderer } from "./HTMLRenderer.js";
import { RenderData, SupportedImageFormat } from "./types.js";

import { DomToImage } from "dom-to-image";

class MockUpHTMLRenderer {
  private htmlRenderer: undefined | HTMLRenderer = undefined;
  private containerId = "";

  constructor(containerId: string) {
    this.htmlRenderer = new HTMLRenderer(containerId);
    this.containerId = containerId;
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
    try {
      const dataUrl = await (async function createDataUrlLink(containerId) {
        const node = document.getElementById(containerId);

        if (node) {
          if (format === "png") {
            const dataUrl: string = await DomToImage.toPng(node);
            return dataUrl;
          }
          if (format === "jpg") {
            const dataUrl: string = await DomToImage.toJpeg(node);
            return dataUrl;
          }
          if (format === "svg") {
            const dataUrl: string = await DomToImage.toSvg(node);
            return dataUrl;
          }
        }
      })(this.containerId);

      (function download(dataUrl): void {
        const link = document.createElement("a");
        const filename = `${new Date().getTime()}.${format}`;

        link.setAttribute("href", dataUrl || "");
        link.setAttribute("download", filename);
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })(dataUrl);

      return dataUrl;
    } catch (error) {
      console.error(error);
    }
  }
}

export { MockUpHTMLRenderer };
