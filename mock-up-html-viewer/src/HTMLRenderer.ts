import { RenderData } from "./types.js";

export class HTMLRenderer {
  private containerId: string = "";
  private container: Element | null = null;

  constructor(containerId: string) {
    this.containerId = containerId;
    this.container = document.querySelector(`#${this.containerId}`);
  }

  /**
   * Render mock-up
   *
   * @claim UF/MOCK-UP/VIEW
   */
  public render(renderData: RenderData): void {
    console.log("render data: ", renderData);

    /** @exception Incorrect containerId */
    if (!this.container) {
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
    }

    const insertedImageWrapper: HTMLDivElement = document.createElement("div");
    {
      insertedImageWrapper.style.width = `${renderData.frameWidth}px`;
      insertedImageWrapper.style.height = `${renderData.frameHeight}px`;
      insertedImageWrapper.style.boxSizing = `border-box`;

      insertedImageWrapper.style.paddingTop = `${renderData.paddingsInPercents.paddingTop}%`;
      insertedImageWrapper.style.paddingBottom = `${renderData.paddingsInPercents.paddingBottom}%`;
      insertedImageWrapper.style.paddingLeft = `${renderData.paddingsInPercents.paddingLeft}%`;
      insertedImageWrapper.style.paddingRight = `${renderData.paddingsInPercents.paddingRight}%`;
    }

    const insertedImage: HTMLDivElement = document.createElement("div");
    {
      insertedImage.style.width = `100%`;
      insertedImage.style.height = `100%`;
      insertedImage.style.backgroundColor = `gray`;
      insertedImage.style.borderRadius = `5%`;
    }

    const frame: HTMLImageElement = document.createElement("img");
    {
      frame.style.width = `${renderData.frameWidth}px`;
      frame.style.height = `${renderData.frameHeight}px`;
      frame.src = renderData.frameImage;
      frame.style.objectFit = "cover";
      frame.style.position = `absolute`;
    }

    wrapper.appendChild(insertedImageWrapper);
    insertedImageWrapper.appendChild(insertedImage);
    wrapper.appendChild(frame);

    this.container.appendChild(wrapper);
  }

  private clearContainer(): void {
    /** @exception Incorrect containerId */
    if (!this.container) {
      throw "Incorrect containerId";
    }

    this.container.innerHTML = "";
  }
}
