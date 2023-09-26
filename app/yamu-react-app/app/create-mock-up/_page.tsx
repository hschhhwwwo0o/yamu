"use client";

import React, { useEffect, useMemo } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore as CMSS } from "./_store";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";
import { CreateMockUpScreenLayout } from "./layouts/CreateMockUpScreenLayout";
import { MockUpSettingsWizardLayout } from "./layouts/MockUpSettingsWizardLayout";
import { MockUpPreviewSceneLayout } from "./layouts/MockUpPreviewSceneLayout";

/** Components */
import { CreateMockUpFirstStepWizard } from "./components/CreateMockUpFirstStepWizard";
import { CreateMockUpSecondStepWizard } from "./components/CreateMockUpSecondStepWizard";
import { CreateMockUpThirdStepWizard } from "./components/CreateMockUpThirdStepWizard";

export default observer(function Page(): React.JSX.Element {
  useMemo(function _initializeMockUpGeneratorModule() {
    return CMSS.initializeMockUpGenerator();
  }, []);

  useMemo(function _initializeMockUpRendererModule() {
    return CMSS.initializeMockUpHTMLRenderer("mock-up-container");
  }, []);

  const mockUpGenerator = CMSS?.mockUpGenerator;
  const mockUpHTMLRenderer = CMSS?.mockUpHTMLRenderer;

  const wizardActiveStep = CMSS?.wizardActiveStep;

  /**
   * @requirement UF/MOCK-UP/DEVICE-SELECT
   * @requirement UF/MOCK-UP/VIEW
   */
  useEffect(function _firstRenderMockUpEffect() {
    (async function () {
      const _mockUpData = await mockUpGenerator?.selectDevice();
      await mockUpHTMLRenderer?.render(_mockUpData?.renderData);
    })();
    return function _onPageClose() {
      CMSS.toDefaultWizardStep();
    };
  }, []);

  return (
    <main>
      <WideWrapperLayout>
        <CreateMockUpScreenLayout>
          {
            /** Mock-up preview scene (Left side) */
            <MockUpPreviewSceneLayout>
              <div id="mock-up-container" />
            </MockUpPreviewSceneLayout>
          }
          {
            /** Mock-up settings wizard (Right side) */
            <MockUpSettingsWizardLayout>
              {wizardActiveStep === 1 && <CreateMockUpFirstStepWizard />}
              {wizardActiveStep === 2 && <CreateMockUpSecondStepWizard />}
              {wizardActiveStep === 3 && <CreateMockUpThirdStepWizard />}
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
});
