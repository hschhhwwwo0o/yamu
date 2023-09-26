"use client";

import React, { useLayoutEffect, useMemo } from "react";

/** Connect to store */
import { observer } from "mobx-react-lite";
import { CreateMockUpScreenStore } from "./_store";

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
    return CreateMockUpScreenStore.initializeMockUpGenerator();
  }, []);

  useMemo(function _initializeMockUpRendererModule() {
    return CreateMockUpScreenStore.initializeMockUpHTMLRenderer(
      "mock-up-container",
    );
  }, []);

  const mockUpGenerator = CreateMockUpScreenStore?.mockUpGenerator;
  const mockUpHTMLRenderer = CreateMockUpScreenStore?.mockUpHTMLRenderer;

  const wizardActiveStep = CreateMockUpScreenStore?.wizardActiveStep;

  /**
   * @requirement UF/MOCK-UP/DEVICE-SELECT
   * @requirement UF/MOCK-UP/VIEW
   */
  useLayoutEffect(function _firstRenderMockUpEffect(): void {
    (async function () {
      await mockUpGenerator?.selectDevice("");
      mockUpHTMLRenderer?.render(mockUpGenerator?.mockUp.renderData);
    })();
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
              {
                /** First step */
                wizardActiveStep === 1 && <CreateMockUpFirstStepWizard />
              }
              {
                /** First step */
                wizardActiveStep === 2 && <CreateMockUpSecondStepWizard />
              }
              {
                /** First step */
                wizardActiveStep === 3 && <CreateMockUpThirdStepWizard />
              }
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
});
