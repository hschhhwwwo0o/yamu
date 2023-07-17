import { RenderData } from "./types.js";

export class HTMLRenderer {
  private containerId: string;

  constructor(containerId: string) {
    this.containerId = containerId;
  }

  /**
   * Render mock-up
   *
   * @claim UF/MOCK-UP/VIEW
   */
  public render(renderData: RenderData): void {
    const container = document.querySelector(`#${this.containerId}`);

    /** @exception Incorrect containerId */
    if (!container) {
      throw "Incorrect containerId";
    }

    this.clearContainer();

    const wrapper: HTMLDivElement = document.createElement("div");
    {
      wrapper.style.width = `${renderData.frameWidth}px`;
      wrapper.style.height = `${renderData.frameHeight}px`;
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";
      wrapper.style.justifyContent = "center";
      wrapper.style.overflow = "hidden";
    }

    const insertedImageWrapper: HTMLDivElement = document.createElement("div");
    {
      insertedImageWrapper.style.width = `${renderData.frameWidth}px`;
      insertedImageWrapper.style.height = `${renderData.frameHeight}px`;
      insertedImageWrapper.style.boxSizing = "border-box";

      insertedImageWrapper.style.paddingTop = `${renderData.paddingsInPercents.paddingTop}%`;
      insertedImageWrapper.style.paddingBottom = `${renderData.paddingsInPercents.paddingBottom}%`;
      insertedImageWrapper.style.paddingLeft = `${renderData.paddingsInPercents.paddingLeft}%`;
      insertedImageWrapper.style.paddingRight = `${renderData.paddingsInPercents.paddingRight}%`;

      insertedImageWrapper.style.position = "relative";
      insertedImageWrapper.style.left = "50%";
    }

    const insertedImage: HTMLDivElement = document.createElement("div");
    {
      const paddingLeftInPX =
        (renderData.frameWidth / 100) *
        renderData.paddingsInPercents.paddingLeft;
      const paddingRightInPX =
        (renderData.frameWidth / 100) *
        renderData.paddingsInPercents.paddingRight;

      insertedImage.style.width = `${
        renderData.frameWidth - (paddingLeftInPX + paddingRightInPX)
      }px`;

      const paddingBottomInPX =
        (renderData.frameHeight / 100) *
        renderData.paddingsInPercents.paddingBottom;
      insertedImage.style.height = `${
        renderData.frameHeight - paddingBottomInPX
      }px`;
      insertedImage.style.backgroundColor = "gray";
      insertedImage.style.borderRadius = "5%";
    }

    const frame: HTMLImageElement = document.createElement("img");
    {
      frame.style.width = `${renderData.frameWidth}px`;
      frame.style.height = `${renderData.frameHeight}px`;
      frame.src = renderData.frameImage;
      frame.style.objectFit = "cover";
      frame.style.position = "relative";
      frame.style.left = "-50%";
    }

    wrapper.appendChild(insertedImageWrapper);
    insertedImageWrapper.appendChild(insertedImage);
    wrapper.appendChild(frame);

    container.appendChild(wrapper);
  }

  private clearContainer(): void {
    /** @exception Incorrect containerId */
    if (!this.containerId) {
      throw "Incorrect containerId";
    }

    const container = document.querySelector(`#${this.containerId}`);

    if (container) {
      container.innerHTML = "";
    }
  }
}
