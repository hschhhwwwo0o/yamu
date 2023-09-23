import { SupportedImageFormat } from "./types.js";

export class HTMLImageDownloader {
  private _containerId: string = "";

  constructor(containerId: string = "") {
    this._containerId = containerId;
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
    quality: number = 1,
  ): Promise<string | undefined> {
    const _dataUrl: string | undefined =
      await (async function _createDataUrlLink(_containerId: string = "") {
        const _canvas: HTMLCanvasElement | null =
          document.querySelector<HTMLCanvasElement>(
            `#${_containerId} > canvas`,
          );

        switch (format) {
          case "png":
            return _canvas?.toDataURL("image/png", quality);
          case "jpeg":
            return _canvas?.toDataURL("image/jpeg", quality);
          case "webp":
            return _canvas?.toDataURL("image/webp", quality);
        }
      })(this._containerId);

    (function _createDownloadLink(_dataUrl: string = ""): void {
      const _link = document.createElement("a");
      const _filename = `${new Date().getTime()}.${format}`;

      {
        _link.setAttribute("href", _dataUrl || "");
        _link.setAttribute("download", _filename);
        _link.style.display = "none";
      }

      {
        document.body.appendChild(_link);
        _link.click();
        document.body.removeChild(_link);
      }
    })(_dataUrl || "");

    return _dataUrl;
  }
}
