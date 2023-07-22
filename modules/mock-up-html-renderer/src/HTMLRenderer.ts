import { RenderData } from "./types.js";

export class HTMLRenderer {
  private _containerId: string;

  constructor(containerId: string = "") {
    this._containerId = containerId;
  }

  /**
   * Render mock-up
   *
   * @claim UF/MOCK-UP/VIEW
   */
  public render(renderData: RenderData): void {
    this._clearDOMContainer();

    const canvas = this._createCanvasDOMElement(renderData);
    const context = canvas.getContext("2d");

    const frameImage = this._createFrameImage(renderData);

    frameImage.onload = () => {
      if (!context) throw "Context error";
      const imageIsEmpty = !renderData.insertedImage;
      if (imageIsEmpty) {
        this._renderEmptyScreen(context, renderData);
        this._renderFrame(context, frameImage, renderData);
        this._appendCanvasInDOM(canvas);
      }
      if (!imageIsEmpty) {
        const screenImage = this._createScreenImage(renderData);
        screenImage.onload = () => {
          this._renderScreen(context, screenImage, renderData);
          this._renderFrame(context, frameImage, renderData);
          this._appendCanvasInDOM(canvas);
        };
      }
    };
  }

  private _clearDOMContainer() {
    /** @exception Incorrect containerId */
    if (!this._containerId) {
      throw "Incorrect containerId";
    }

    const container = document.querySelector(`#${this._containerId}`);

    if (container) {
      container.innerHTML = "";
    }
  }

  private _renderEmptyScreen(
    context: CanvasRenderingContext2D,
    renderData: RenderData,
  ) {
    const paddingLeft =
      (renderData.frameWidth / 100) * renderData.paddingsInPercents.left;
    const paddingRight =
      (renderData.frameWidth / 100) * renderData.paddingsInPercents.right;
    const paddingTop =
      (renderData.frameHeight / 100) * renderData.paddingsInPercents.top;
    const paddingBottom =
      (renderData.frameHeight / 100) * renderData.paddingsInPercents.bottom;
    const width = renderData.frameWidth - paddingLeft - paddingRight;
    const height = renderData.frameHeight - paddingTop - paddingBottom;

    context.roundRect(paddingLeft, paddingTop, width, height, 10);
    context.fillStyle = "#3C3C3C";
    context.fill();

    return;
  }

  private _renderScreen(
    context: CanvasRenderingContext2D,
    insertedImage: HTMLImageElement,
    renderData: RenderData,
  ) {
    function createRoundedImage(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number,
    ) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height,
      );
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    const paddingLeft =
      (renderData.frameWidth / 100) * renderData.paddingsInPercents.left;
    const paddingRight =
      (renderData.frameWidth / 100) * renderData.paddingsInPercents.right;
    const paddingTop =
      (renderData.frameHeight / 100) * renderData.paddingsInPercents.top;
    const paddingBottom =
      (renderData.frameHeight / 100) * renderData.paddingsInPercents.bottom;
    const width = renderData.frameWidth - paddingLeft - paddingRight;
    const height = renderData.frameHeight - paddingTop - paddingBottom;

    createRoundedImage(context, paddingLeft, paddingTop, width, height, 10);
    context.save();
    context.clip();
    context.drawImage(insertedImage, paddingLeft, paddingTop, width, height);
    context.restore();
    return;
  }

  private _createScreenImage(renderData: RenderData) {
    const screenImage = new Image();
    screenImage.setAttribute("crossorigin", "anonymous");
    {
      screenImage.width = renderData.frameWidth;
      screenImage.height = renderData.frameHeight;
      screenImage.src = renderData.insertedImage;
    }
    return screenImage;
  }

  private _createFrameImage(renderData: RenderData) {
    const frameImage = new Image();
    {
      frameImage.width = renderData.frameWidth;
      frameImage.height = renderData.frameHeight;
      frameImage.src = renderData.frameImage;
    }
    return frameImage;
  }

  private _renderFrame(
    context: CanvasRenderingContext2D,
    frameImage: HTMLImageElement,
    renderData: RenderData,
  ) {
    {
      context.drawImage(
        frameImage,
        0,
        0,
        renderData.frameWidth,
        renderData.frameHeight,
      );
    }
  }

  private _createCanvasDOMElement(renderData: RenderData) {
    const canvas = document.createElement("canvas");
    {
      canvas.id = "mock-up-canvas";
      canvas.width = renderData.frameWidth;
      canvas.height = renderData.frameHeight;
    }
    return canvas;
  }

  private _appendCanvasInDOM(canvas: HTMLCanvasElement) {
    this._clearDOMContainer();
    const container = document.querySelector(`#${this._containerId}`);
    container?.appendChild(canvas);
  }
}
