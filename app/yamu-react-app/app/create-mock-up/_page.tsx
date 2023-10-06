"use client";

import React, { useLayoutEffect, useMemo } from "react";

/** Controllers */
import { MockUpController } from "./_mock-up-controller";
import { MockUpWizardController } from "./_wizard-state-controller";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";
import { CreateMockUpScreenLayout } from "./layouts/Screen";
import { MockUpSettingsWizardLayout } from "./layouts/Wizard";
import { MockUpPreviewSceneLayout } from "./layouts/PreviewScene";

/** Components */
import { MockUpSettingsWizard } from "./components/MockUpSettingsWizard";

export default function Page(): React.JSX.Element {
  useMemo(function _initializeModules(): void {
    MockUpController.initializeMockUpGenerator();
    MockUpController.initializeMockUpHTMLRenderer("mock-up-container");
  }, []);

  useLayoutEffect(function _onPageCloseEffect() {
    return function _onPageClose(): void {
      MockUpWizardController.toDefaultStep();
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
              <MockUpSettingsWizard />
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
}
