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

  public nextStep() {
    this.activeStep = this.activeStep + 1;
  }

  public toDefaultStep() {
    this.activeStep = 1;
  }
}

const MockUpWizardController = new _MockUpWizardController();

export { MockUpWizardController };
