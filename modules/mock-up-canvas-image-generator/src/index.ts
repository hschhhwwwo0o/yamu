import { CanvasImageGenerator } from "./CanvasImageGenerator.js";

import { RenderData } from "./types.js";

class MockUpCanvasImageGenerator {
  private _canvasImageGenerator: undefined | CanvasImageGenerator = undefined;

  constructor() {
    this._canvasImageGenerator = new CanvasImageGenerator();
  }

  /**
   * Image generate
   *
   * @requirement UF/MOCK-UP/IMAGE-GENERATE
   */
  public async imageGenerate(
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
      borderRadius: 0,
      frameImage: "",
      isBW: false,
    },
  ) {
    const dataURL = await this._canvasImageGenerator?.imageGenerate(renderData);
    return dataURL;
  }
}

export { MockUpCanvasImageGenerator };
