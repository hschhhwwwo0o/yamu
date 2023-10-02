import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "../../_store";

/** Components */
import { CreateMockUpFirstStepWizard } from "./FirstStep";
import { CreateMockUpSecondStepWizard } from "./SecondStep";
import { CreateMockUpThirdStepWizard } from "./ThirdStep";
import { CreateMockUpFourthStepWizard } from "./FourthStep";

/** @requirement QA/MOCK-UP/CREATE-STEPS */
function _MockUpSettingsWizard(): React.JSX.Element {
  const wizardActiveStep = CMSS?.wizardActiveStep;

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
