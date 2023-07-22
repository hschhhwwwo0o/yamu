import { SupportedImageFormat } from "./types.js";

export class HTMLImageDownloader {
  private _containerId = "";

  constructor(containerId: string = "") {
    this._containerId = containerId;
  }

  /**
   * Download mock-up
   *
   * @claim UF/MOCK-UP/DOWNLOAD
   */
  public async download(
    format: SupportedImageFormat = "png",
    quality: number = 1,
  ): Promise<string | undefined> {
    const dataUrl = await (async function _createDataUrlLink(
      containerId: string = "",
    ) {
      const canvas: HTMLCanvasElement | null =
        document.querySelector<HTMLCanvasElement>(`#${containerId} > canvas`);

      if (format === "png") {
        return canvas?.toDataURL("image/png", quality);
      }
      if (format === "jpeg") {
        return canvas?.toDataURL("image/jpeg", quality);
      }
      if (format === "webp") {
        return canvas?.toDataURL("image/webp", quality);
      }
    })(this._containerId);

    (function _createDownloadLink(dataUrl: string = ""): void {
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
