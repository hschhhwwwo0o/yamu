import { makeAutoObservable } from "mobx";

/**
 * Separation of the mock-up creation process
 *
 * @requirement QA/MOCK-UP/CREATE-STEPS
 */
class _MockUpWizardController {
  constructor() {
    makeAutoObservable(this);
  }

  public activeStep = 1;

  public nextStep(): number {
    this.activeStep = this.activeStep + 1;
    return this.activeStep;
  }

  public toDefaultStep(): number {
    this.activeStep = 1;
    return this.activeStep;
  }
}

const MockUpWizardController = new _MockUpWizardController();

export { MockUpWizardController };
