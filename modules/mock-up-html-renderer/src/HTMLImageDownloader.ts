import { SupportedImageFormat } from "./types.js";

export class HTMLImageDownloader {
  private containerId = "";

  constructor(containerId: string) {
    this.containerId = containerId;
  }

  /**
   * Download mock-up
   *
   * @claim UF/MOCK-UP/DOWNLOAD
   */
  public async download(
    format: SupportedImageFormat,
  ): Promise<string | undefined> {
    const dataUrl = await (async function createDataUrlLink(containerId = "") {
      const canvas = document.querySelector<HTMLCanvasElement>(
        `#${containerId} > canvas`,
      );

      if (format === "png") {
        return canvas?.toDataURL("image/png");
      }
    })(this.containerId);

    (function createDownloadLink(dataUrl: string): void {
      const link = document.createElement("a");
      const filename = `${new Date().getTime()}.${format}`;

      {
        link.setAttribute("href", dataUrl || "");
        link.setAttribute("download", filename);
        link.style.display = "none";
      }

      {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    })(dataUrl || "");

    return dataUrl;
  }
}
