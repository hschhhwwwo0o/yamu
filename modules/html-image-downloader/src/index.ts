export class HTMLImageDownloader {
  public download(imageHref: string = "") {
    if (imageHref === "" || imageHref === undefined) {
      console.warn("Download image error; image href is undefined");
      return;
    }
    const a = document.createElement("a");
    a.href = imageHref;
    a.download = "Image.png";
    a.click();
  }
}
