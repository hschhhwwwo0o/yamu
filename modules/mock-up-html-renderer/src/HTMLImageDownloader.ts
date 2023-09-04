import { SupportedImageFormat } from "./types.js";

export class HTMLImageDownloader {
  private _containerId = "";

  constructor(containerId = "") {
    this._containerId = containerId;
  }

  /**
   * Download mock-up
   *
   * @claim UF/MOCK-UP/DOWNLOAD
   *
   * @param format String. The format of the final image. Accepts: "png", "webp", "jpeg"
   * @param quality A number from 0 to 1; Displays the compression ratio of the final image
   *
   * @returns String. Image link
   */
  public async download(
    format: SupportedImageFormat = "png",
    quality: number = 1,
  ): Promise<string | undefined> {
    const dataUrl: string | undefined =
      await (async function _createDataUrlLink(containerId: string = "") {
        const canvas: HTMLCanvasElement | null =
          document.querySelector<HTMLCanvasElement>(`#${containerId} > canvas`);

        switch (format) {
          case "png":
            return canvas?.toDataURL("image/png", quality);
          case "jpeg":
            return canvas?.toDataURL("image/jpeg", quality);
          case "webp":
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
