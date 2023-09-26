import { makeAutoObservable } from "mobx";

/** Modules */
import { MockUpHTMLRenderer } from "@module/mock-up-html-renderer";
import { MockUpGenerator } from "@module/mock-up-generator";

class _CreateMockUpScreenStore {
  public mockUpGenerator: MockUpGenerator | undefined;
  public mockUpHTMLRenderer: MockUpHTMLRenderer | undefined;

  public wizardActiveStep = 1;

  constructor() {
    makeAutoObservable(this);
  }

  public initializeMockUpGenerator(): MockUpGenerator {
    const _mockUpGenerator = new MockUpGenerator();
    this.mockUpGenerator = _mockUpGenerator;
    return _mockUpGenerator;
  }

  public initializeMockUpHTMLRenderer(containerId: string): MockUpHTMLRenderer {
    const _mockUpHTMLRenderer = new MockUpHTMLRenderer(containerId, {
      heightInaccuracy: 70,
    });
    this.mockUpHTMLRenderer = _mockUpHTMLRenderer;
    return _mockUpHTMLRenderer;
  }

  public nextWizardStep(): void {
    this.wizardActiveStep = this.wizardActiveStep + 1;
  }

  public toDefaultWizardStep() {
    this.wizardActiveStep = 1;
  }
}

const CreateMockUpScreenStore = new _CreateMockUpScreenStore();

export { CreateMockUpScreenStore };
