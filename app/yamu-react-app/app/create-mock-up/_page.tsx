"use client";

import React, { useLayoutEffect, useMemo } from "react";

/** UI Modules */
import { MockUpGeneratorUIModule } from "@/modules-compositions/mock-up-generator-ui-module";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";
import { CreateMockUpScreenLayout } from "./layouts/Screen";
import { MockUpSettingsWizardLayout } from "./layouts/Wizard";
import { MockUpPreviewSceneLayout } from "./layouts/PreviewScene";

export default function Page(): React.JSX.Element {
  useMemo(function _initializeModules(): void {
    MockUpGeneratorUIModule.utils.init();
  }, []);

  useLayoutEffect(function _onPageCloseEffect() {
    return function _onPageClose() {
      MockUpGeneratorUIModule.utils.clear();
    };
  }, []);

  return (
    <main>
      <WideWrapperLayout>
        <CreateMockUpScreenLayout>
          {
            /** Mock-up preview scene (Left side) */
            <MockUpPreviewSceneLayout>
              <MockUpGeneratorUIModule.view.MockUpPreview />
            </MockUpPreviewSceneLayout>
          }
          {
            /** Mock-up settings wizard (Right side) */
            <MockUpSettingsWizardLayout>
              <MockUpGeneratorUIModule.view.MockUpSettingsWizard />
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
}
