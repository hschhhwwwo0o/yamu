import { RenderData } from "./types.js";

export class HTMLRenderer {
  private containerId: string;

  constructor(containerId: string = "") {
    this.containerId = containerId;
  }

  /**
   * Render mock-up
   *
   * @claim UF/MOCK-UP/VIEW
   */
  public render(renderData: RenderData): void {
    this.clearDOMContainer();

    const canvas = this.createCanvasDOMElement(renderData);
    const context = canvas.getContext("2d");

    const frameImage = this.createFrameImage(renderData);

    frameImage.onload = () => {
      if (!context) throw "Context error";
      const imageIsEmpty = !renderData.insertedImage;
      if (imageIsEmpty) {
        this.renderEmptyScreen(context, renderData);
        this.renderFrame(context, frameImage, renderData);
        this.appendCanvasInDOM(canvas);
      }
      if (!imageIsEmpty) {
        const screenImage = this.createScreenImage(renderData);
        screenImage.onload = () => {
          this.renderScreen(context, screenImage, renderData);
          this.renderFrame(context, frameImage, renderData);
          this.appendCanvasInDOM(canvas);
        };
      }
    };
  }

  private clearDOMContainer() {
    /** @exception Incorrect containerId */
    if (!this.containerId) {
      throw "Incorrect containerId";
    }

    const container = document.querySelector(`#${this.containerId}`);

    if (container) {
      container.innerHTML = "";
    }
  }

  private renderEmptyScreen(
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
    context.fillStyle = "#000";
    context.fill();

    return;
  }

  private renderScreen(
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

  private createScreenImage(renderData: RenderData) {
    const screenImage = new Image();
    screenImage.setAttribute("crossorigin", "anonymous");
    {
      screenImage.width = renderData.frameWidth;
      screenImage.height = renderData.frameHeight;
      screenImage.src = renderData.insertedImage;
    }
    return screenImage;
  }

  private createFrameImage(renderData: RenderData) {
    const frameImage = new Image();
    {
      frameImage.width = renderData.frameWidth;
      frameImage.height = renderData.frameHeight;
      frameImage.src = renderData.frameImage;
    }
    return frameImage;
  }

  private renderFrame(
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

  private createCanvasDOMElement(renderData: RenderData) {
    const canvas = document.createElement("canvas");
    {
      canvas.id = "mock-up-canvas";
      canvas.width = renderData.frameWidth;
      canvas.height = renderData.frameHeight;
    }
    return canvas;
  }

  private appendCanvasInDOM(canvas: HTMLCanvasElement) {
    const container = document.querySelector(`#${this.containerId}`);
    container?.appendChild(canvas);
  }
}
