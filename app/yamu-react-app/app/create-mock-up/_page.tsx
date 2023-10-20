"use client";

import React, { useLayoutEffect, useMemo } from "react";

/** Controllers */
import { MockUpController } from "@/controllers/mock-up-controller";
import { MockUpWizardViewController } from "./_wizard-state-view-controller";
import { MockUpImageViewController } from "./_mock-up-image-state-view-controller";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";
import { CreateMockUpScreenLayout } from "./layouts/Screen";
import { MockUpSettingsWizardLayout } from "./layouts/Wizard";
import { MockUpPreviewSceneLayout } from "./layouts/PreviewScene";

/** Components */
import { MockUpSettingsWizard } from "./components/MockUpSettingsWizard";
import { MockUpPreview } from "./components/MockUpPreview";

export default function Page(): React.JSX.Element {
  useMemo(function _initializeModules(): void {
    MockUpController.init();
  }, []);

  useLayoutEffect(function _onPageCloseEffect() {
    return function _onPageClose() {
      (async function _asyncPageClose() {
        MockUpWizardViewController.toDefaultStep();
        const imageBase64String = await MockUpController.clear();
        MockUpImageViewController.setImage(imageBase64String);
      })();
    };
  }, []);

  return (
    <main>
      <WideWrapperLayout>
        <CreateMockUpScreenLayout>
          {
            /** Mock-up preview scene (Left side) */
            <MockUpPreviewSceneLayout>
              <MockUpPreview />
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
