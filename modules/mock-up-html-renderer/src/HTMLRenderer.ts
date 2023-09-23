import { Options, RenderData } from "./types.js";

export class HTMLRenderer {
  private _containerId: string;
  private _options: Options;

  constructor(
    containerId: string = "",
    options: Options = {
      heightInaccuracy: 0,
    },
  ) {
    this._containerId = containerId;
    this._options = options;
  }

  /**
   * Render mock-up
   *
   * @requirement UF/MOCK-UP/VIEW
   */
  public render(renderData: RenderData): void {
    this._clearDOMContainer();

    console.log("Rendering...", renderData);

    const canvas = this._createCanvasDOMElement(renderData);

    if (renderData.isBW === true) {
      canvas.style.cssText = "filter: grayscale(100%);";
    } else {
      canvas.style.cssText = "filter: grayscale(0%);";
    }

    const context = canvas.getContext("2d");

    const frameImage = this._createFrameImage(renderData);

    if (frameImage.complete) {
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
    }

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
    const borderRadius =
      renderData.borderRadius === undefined ? 10 : renderData.borderRadius;

    const frameWidth = this._calculateLayoutWidth(renderData);
    const frameHeight = this._calculateLayoutHeight(renderData);

    const paddingLeftInPX =
      (frameWidth / 100) * renderData.paddingsInPercents.left;
    const paddingRightInPX =
      (frameWidth / 100) * renderData.paddingsInPercents.right;
    const paddingTopInPX =
      (frameHeight / 100) * renderData.paddingsInPercents.top;
    const paddingBottomInPX =
      (frameHeight / 100) * renderData.paddingsInPercents.bottom;

    const screenWidth = frameWidth - paddingLeftInPX - paddingRightInPX;
    const screenHeight = frameHeight - paddingTopInPX - paddingBottomInPX;

    context.roundRect(
      paddingLeftInPX,
      paddingTopInPX,
      screenWidth,
      screenHeight,
      borderRadius,
    );
    context.fillStyle = "#000";
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

    const borderRadius =
      renderData.borderRadius === undefined ? 10 : renderData.borderRadius;

    const frameWidth = this._calculateLayoutWidth(renderData);
    const frameHeight = this._calculateLayoutHeight(renderData);

    const paddingLeftInPX =
      (frameWidth / 100) * renderData.paddingsInPercents.left;
    const paddingRightInPX =
      (frameWidth / 100) * renderData.paddingsInPercents.right;
    const paddingTopInPX =
      (frameHeight / 100) * renderData.paddingsInPercents.top;
    const paddingBottomInPX =
      (frameHeight / 100) * renderData.paddingsInPercents.bottom;

    const screenWidth = frameWidth - paddingLeftInPX - paddingRightInPX;
    const screenHeight = frameHeight - paddingTopInPX - paddingBottomInPX;

    createRoundedImage(
      context,
      paddingLeftInPX,
      paddingTopInPX,
      screenWidth,
      screenHeight,
      borderRadius,
    );
    context.save();
    context.clip();
    context.drawImage(
      insertedImage,
      paddingLeftInPX,
      paddingTopInPX,
      screenWidth,
      screenHeight,
    );
    context.restore();

    return;
  }

  private _createScreenImage(renderData: RenderData) {
    const screenImage: HTMLImageElement = new Image();
    screenImage.setAttribute("crossorigin", "anonymous");
    {
      screenImage.width = this._calculateLayoutWidth(renderData);
      screenImage.height = this._calculateLayoutHeight(renderData);
      screenImage.src = renderData.insertedImage;
    }
    return screenImage;
  }

  private _createFrameImage(renderData: RenderData) {
    const frameImage = new Image();
    {
      frameImage.width = this._calculateLayoutWidth(renderData);
      frameImage.height = this._calculateLayoutHeight(renderData);
      frameImage.src = renderData.frameImage;
    }
    return frameImage;
  }

  private _renderFrame(
    context: CanvasRenderingContext2D,
    frameImage: HTMLImageElement,
    renderData: RenderData,
  ) {
    const frameWidth = this._calculateLayoutWidth(renderData);
    const frameHeight = this._calculateLayoutHeight(renderData);

    {
      context.drawImage(frameImage, 0, 0, frameWidth, frameHeight);
    }
  }

  private _createCanvasDOMElement(renderData: RenderData) {
    const canvas = document.createElement("canvas");
    {
      canvas.id = "mock-up-canvas";
      canvas.width = this._calculateLayoutWidth(renderData);
      canvas.height = this._calculateLayoutHeight(renderData);
    }
    return canvas;
  }

  private _appendCanvasInDOM(canvas: HTMLCanvasElement) {
    this._clearDOMContainer();
    const container = document.querySelector(`#${this._containerId}`);
    container?.appendChild(canvas);
  }

  private _calculateLayoutWidth(renderData: RenderData) {
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight =
      window.innerHeight - this._options.heightInaccuracy;

    if (window.innerHeight < 580) {
      return windowInnerWidth - 155;
    }

    if (windowInnerWidth < renderData.frameWidth) {
      return windowInnerWidth - 60;
    }
    if (
      windowInnerHeight < renderData.frameHeight &&
      windowInnerWidth > renderData.frameWidth
    ) {
      return renderData.frameWidth - 100;
    }

    return renderData.frameWidth;
  }
  private _calculateLayoutHeight(renderData: RenderData) {
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight =
      window.innerHeight - this._options.heightInaccuracy;

    if (window.innerHeight < 580) {
      const coof = renderData.frameHeight / renderData.frameWidth;
      const newWidth = this._calculateLayoutWidth(renderData);
      const newHeight = newWidth * coof;
      return newHeight;
    }

    if (windowInnerWidth < renderData.frameWidth) {
      const coof = renderData.frameHeight / renderData.frameWidth;
      const newWidth = this._calculateLayoutWidth(renderData);
      const newHeight = newWidth * coof;
      return newHeight;
    }
    if (
      windowInnerHeight < renderData.frameHeight &&
      windowInnerWidth > renderData.frameWidth
    ) {
      const coof = renderData.frameHeight / renderData.frameWidth;
      const newWidth = this._calculateLayoutWidth(renderData);
      const newHeight = newWidth * coof;
      return newHeight;
    }

    return renderData.frameHeight;
  }
}
