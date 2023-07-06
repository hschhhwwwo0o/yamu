import { HTMLRenderer } from "./HTMLRenderer.js";
import { RenderData } from "./types.js";

class MockUpHTMLRenderer {
  private htmlRenderer: undefined | HTMLRenderer = undefined;

  constructor(containerId: string) {
    this.htmlRenderer = new HTMLRenderer(containerId);
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
  public download() {}
}

export { MockUpHTMLRenderer };
