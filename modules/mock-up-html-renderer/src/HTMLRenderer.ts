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

    const _canvas = this._createCanvasDOMElement(renderData);

    if (renderData.isBW === true) {
      _canvas.style.cssText = "filter: grayscale(100%);";
    } else {
      _canvas.style.cssText = "filter: grayscale(0%);";
    }

    const _context = _canvas.getContext("2d");

    const _frameImage = this._createFrameImage(renderData);

    const _render = () => {
      if (!_context) throw "Context error";
      const _imageIsEmpty = !renderData.insertedImage;
      if (_imageIsEmpty) {
        this._renderEmptyScreen(_context, renderData);
        this._renderFrame(_context, _frameImage, renderData);
        this._appendCanvasInDOM(_canvas);
      }
      if (!_imageIsEmpty) {
        const screenImage = this._createScreenImage(renderData);
        screenImage.onload = () => {
          this._renderScreen(_context, screenImage, renderData);
          this._renderFrame(_context, _frameImage, renderData);
          this._appendCanvasInDOM(_canvas);
        };
      }
    };

    if (_frameImage.complete) {
      _render();
    }
    _frameImage.onload = () => {
      _render();
    };
  }

  private _clearDOMContainer() {
    /** @exception Incorrect containerId */
    if (!this._containerId) {
      throw "Incorrect containerId";
    }

    const _container = document.querySelector(`#${this._containerId}`);

    if (_container) {
      _container.innerHTML = "";
    }
  }

  private _renderEmptyScreen(
    context: CanvasRenderingContext2D,
    renderData: RenderData,
  ) {
    const _borderRadius =
      renderData.borderRadius === undefined ? 10 : renderData.borderRadius;

    const _frameWidth = this._calculateLayoutWidth(renderData);
    const _frameHeight = this._calculateLayoutHeight(renderData);

    const _paddingLeftInPX =
      (_frameWidth / 100) * renderData.paddingsInPercents.left;
    const _paddingRightInPX =
      (_frameWidth / 100) * renderData.paddingsInPercents.right;
    const _paddingTopInPX =
      (_frameHeight / 100) * renderData.paddingsInPercents.top;
    const _paddingBottomInPX =
      (_frameHeight / 100) * renderData.paddingsInPercents.bottom;

    const _screenWidth = _frameWidth - _paddingLeftInPX - _paddingRightInPX;
    const _screenHeight = _frameHeight - _paddingTopInPX - _paddingBottomInPX;

    context.roundRect(
      _paddingLeftInPX,
      _paddingTopInPX,
      _screenWidth,
      _screenHeight,
      _borderRadius,
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
    function _createRoundedImage(
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

    const _borderRadius =
      renderData.borderRadius === undefined ? 10 : renderData.borderRadius;

    const _frameWidth = this._calculateLayoutWidth(renderData);
    const _frameHeight = this._calculateLayoutHeight(renderData);

    const _paddingLeftInPX =
      (_frameWidth / 100) * renderData.paddingsInPercents.left;
    const _paddingRightInPX =
      (_frameWidth / 100) * renderData.paddingsInPercents.right;
    const _paddingTopInPX =
      (_frameHeight / 100) * renderData.paddingsInPercents.top;
    const _paddingBottomInPX =
      (_frameHeight / 100) * renderData.paddingsInPercents.bottom;

    const _screenWidth = _frameWidth - _paddingLeftInPX - _paddingRightInPX;
    const _screenHeight = _frameHeight - _paddingTopInPX - _paddingBottomInPX;

    _createRoundedImage(
      context,
      _paddingLeftInPX,
      _paddingTopInPX,
      _screenWidth,
      _screenHeight,
      _borderRadius,
    );
    context.save();
    context.clip();
    context.drawImage(
      insertedImage,
      _paddingLeftInPX,
      _paddingTopInPX,
      _screenWidth,
      _screenHeight,
    );
    context.restore();

    return;
  }

  private _createScreenImage(renderData: RenderData) {
    const _screenImage: HTMLImageElement = new Image();
    _screenImage.setAttribute("crossorigin", "anonymous");
    {
      _screenImage.width = this._calculateLayoutWidth(renderData);
      _screenImage.height = this._calculateLayoutHeight(renderData);
      _screenImage.src = renderData.insertedImage;
    }
    return _screenImage;
  }

  private _createFrameImage(renderData: RenderData) {
    const _frameImage = new Image();
    {
      _frameImage.width = this._calculateLayoutWidth(renderData);
      _frameImage.height = this._calculateLayoutHeight(renderData);
      _frameImage.src = renderData.frameImage;
    }
    return _frameImage;
  }

  private _renderFrame(
    context: CanvasRenderingContext2D,
    frameImage: HTMLImageElement,
    renderData: RenderData,
  ) {
    const _frameWidth = this._calculateLayoutWidth(renderData);
    const _frameHeight = this._calculateLayoutHeight(renderData);

    {
      context.drawImage(frameImage, 0, 0, _frameWidth, _frameHeight);
    }
  }

  private _createCanvasDOMElement(renderData: RenderData) {
    const _canvas = document.createElement("canvas");
    {
      _canvas.id = "mock-up-canvas";
      _canvas.width = this._calculateLayoutWidth(renderData);
      _canvas.height = this._calculateLayoutHeight(renderData);
    }
    return _canvas;
  }

  private _appendCanvasInDOM(canvas: HTMLCanvasElement) {
    this._clearDOMContainer();
    const _container = document.querySelector(`#${this._containerId}`);
    _container?.appendChild(canvas);
  }

  private _calculateLayoutWidth(renderData: RenderData) {
    const _windowInnerWidth = window.innerWidth;
    const _windowInnerHeight =
      window.innerHeight - this._options.heightInaccuracy;

    if (window.innerHeight < 580) {
      return _windowInnerWidth - 155;
    }

    if (_windowInnerWidth < renderData.frameWidth) {
      return _windowInnerWidth - 60;
    }
    if (
      _windowInnerHeight < renderData.frameHeight &&
      _windowInnerWidth > renderData.frameWidth
    ) {
      return renderData.frameWidth - 100;
    }

    return renderData.frameWidth;
  }
  private _calculateLayoutHeight(renderData: RenderData) {
    const _windowInnerWidth = window.innerWidth;
    const _windowInnerHeight =
      window.innerHeight - this._options.heightInaccuracy;

    if (window.innerHeight < 580) {
      const _coof = renderData.frameHeight / renderData.frameWidth;
      const _newWidth = this._calculateLayoutWidth(renderData);
      const _newHeight = _newWidth * _coof;
      return _newHeight;
    }

    if (_windowInnerWidth < renderData.frameWidth) {
      const _coof = renderData.frameHeight / renderData.frameWidth;
      const _newWidth = this._calculateLayoutWidth(renderData);
      const _newHeight = _newWidth * _coof;
      return _newHeight;
    }
    if (
      _windowInnerHeight < renderData.frameHeight &&
      _windowInnerWidth > renderData.frameWidth
    ) {
      const _coof = renderData.frameHeight / renderData.frameWidth;
      const _newWidth = this._calculateLayoutWidth(renderData);
      const _newHeight = _newWidth * _coof;
      return _newHeight;
    }

    return renderData.frameHeight;
  }
}
