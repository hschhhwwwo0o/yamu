import { RenderData } from "./types.js";

export class CanvasImageGenerator {
  /**
   * Generate image of mock-up
   * @requirement UF/MOCK-UP/IMAGE-GENERATE
   */
  public async imageGenerate(renderData: RenderData) {
    /**
     * Display a warning when potentially incorrect renderData is entered
     */
    if (renderData.frameWidth === 0 && renderData.frameHeight === 0) {
      console.warn(
        "No image generate has been done. `renderData` is specified incorrectly",
        renderData,
      );
    }

    /**
     * Object renderData logging
     */
    console.log("Generate image...", renderData);

    /**
     * Canvas creation; note that canvas creation may depend on the
     * platform on which the script is running: browser/node.
     */
    const _canvas = this._createCanvasDOMElement(renderData);

    /**
     * Getting the canvas context
     */
    const _context = _canvas.getContext("2d");
    if (!_context) throw "Context error";

    /**
     * Creating and loading a Frame Image
     */
    const _frameImage = await this._createFrameImage(renderData);
    if (renderData.frameImage) {
      /** Loads the image */
      await _frameImage.decode();
    }

    /**
     * Creating and loading a screen (inserted image) Image
     */
    const _screenImage = await this._createScreenImage(renderData);
    if (renderData.insertedImage) {
      /** Loads the image */
      await _screenImage.decode();
    }

    /** If both images are ready to be used */
    if (_frameImage.complete === true && _screenImage.complete === true) {
      /** Rendering an empty mock-up (Only frame) */
      if (!renderData.insertedImage) {
        this._addEmptyScreenOnCanvas(_context, renderData);
        this._addDeviceFrameOnCanvas(_context, _frameImage, renderData);
      }
      /** Rendering of the finished mock-up (Frame + screen) */
      if (renderData.insertedImage) {
        this._addScreenImageOnCanvas(_context, _screenImage, renderData);
        this._addDeviceFrameOnCanvas(_context, _frameImage, renderData);
      }

      /**
       * Applying BW filter; the filter is applied
       * at the very end to cover all layers of the canvas
       */
      if (renderData.isBW === true) {
        this._makeCanvasImageBW(_context);
      }

      /**
       * Getting base64 image string
       */
      const imageBase64String = await _canvas?.toDataURL("image/png", 1);
      return imageBase64String;
    }
  }

  /**
   * Warning!
   *
   * Canvas creation; note that canvas creation may depend on the
   * platform on which the script is running: browser/node.
   */
  private _createCanvasDOMElement(renderData: RenderData) {
    const _canvas = document.createElement("canvas");
    {
      _canvas.id = "mock-up-canvas";
      _canvas.width = this._calculateLayoutWidth(renderData);
      _canvas.height = this._calculateLayoutHeight(renderData);
    }
    return _canvas;
  }

  private _addEmptyScreenOnCanvas(
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

  private _makeCanvasImageBW(_context: CanvasRenderingContext2D) {
    const _imgData = _context.getImageData(
      0,
      0,
      _context.canvas.width,
      _context.canvas.height,
    );
    const _pixels = _imgData.data;
    for (let i = 0; i < _pixels.length; i += 4) {
      const _lightness = (_pixels[i] + _pixels[i + 1] + _pixels[i + 2]) / 3;
      _pixels[i] = _lightness;
      _pixels[i + 1] = _lightness;
      _pixels[i + 2] = _lightness;
    }
    _context.putImageData(_imgData, 0, 0);
  }

  private _addScreenImageOnCanvas(
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

  private async _createScreenImage(renderData: RenderData) {
    const _screenImage: HTMLImageElement = new Image();
    _screenImage.setAttribute("crossorigin", "anonymous");
    {
      _screenImage.width = this._calculateLayoutWidth(renderData);
      _screenImage.height = this._calculateLayoutHeight(renderData);
      _screenImage.src = renderData.insertedImage;
    }
    return _screenImage;
  }

  private async _createFrameImage(renderData: RenderData) {
    const _frameImage = new Image();
    {
      _frameImage.width = this._calculateLayoutWidth(renderData);
      _frameImage.height = this._calculateLayoutHeight(renderData);
      _frameImage.src = renderData.frameImage;
    }
    return _frameImage;
  }

  private _addDeviceFrameOnCanvas(
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

  private _calculateLayoutWidth(renderData: RenderData) {
    return renderData.frameWidth;
  }
  private _calculateLayoutHeight(renderData: RenderData) {
    return renderData.frameHeight;
  }
}
