export class HTMLImageDownloader {
  public download(imageHref: string = "") {
    if (imageHref === "" || imageHref === undefined) {
      console.warn("Download image error; image href is undefined");
      return;
    }
    const imageName = `${new Date().getTime()}`;
    {
      const HTMLAnchorElement = document.createElement("a");
      HTMLAnchorElement.href = imageHref;
      HTMLAnchorElement.download = `${imageName}.png`;
      HTMLAnchorElement.click();
    }
  }
}
