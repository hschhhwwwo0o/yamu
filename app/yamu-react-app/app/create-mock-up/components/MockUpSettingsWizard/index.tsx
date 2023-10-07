import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpWizardController } from "../../_wizard-state-controller";

/** Components */
import { CreateMockUpFirstStepWizard } from "./1Step";
import { CreateMockUpSecondStepWizard } from "./2Step";
import { CreateMockUpThirdStepWizard } from "./3Step";
import { CreateMockUpFourthStepWizard } from "./4Step";

/**
 * Separation of the mock-up creation process
 *
 * @requirement QA/MOCK-UP/CREATE-STEPS
 */
function _MockUpSettingsWizard(): React.JSX.Element {
  const wizardActiveStep = MockUpWizardController.activeStep;

  return (
    <Fragment>
      {wizardActiveStep === 1 && <CreateMockUpFirstStepWizard />}
      {wizardActiveStep === 2 && <CreateMockUpSecondStepWizard />}
      {wizardActiveStep === 3 && <CreateMockUpThirdStepWizard />}
      {wizardActiveStep === 4 && <CreateMockUpFourthStepWizard />}
    </Fragment>
  );
}

export const MockUpSettingsWizard = observer(_MockUpSettingsWizard);
