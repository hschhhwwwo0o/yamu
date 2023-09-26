import React, { Fragment } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "../../_store";

/** Components */
import { CreateMockUpFirstStepWizard } from "./CreateMockUpFirstStepWizard";
import { CreateMockUpSecondStepWizard } from "./CreateMockUpSecondStepWizard";
import { CreateMockUpThirdStepWizard } from "./CreateMockUpThirdStepWizard";
import { CreateMockUpFourStepWizard } from "./CreateMockUpFourStepWizard";

function _MockUpSettingsWizard() {
  const wizardActiveStep = CMSS?.wizardActiveStep;

  return (
    <Fragment>
      {wizardActiveStep === 1 && <CreateMockUpFirstStepWizard />}
      {wizardActiveStep === 2 && <CreateMockUpSecondStepWizard />}
      {wizardActiveStep === 3 && <CreateMockUpThirdStepWizard />}
      {wizardActiveStep === 4 && <CreateMockUpFourStepWizard />}
    </Fragment>
  );
}

export const MockUpSettingsWizard = observer(_MockUpSettingsWizard);
