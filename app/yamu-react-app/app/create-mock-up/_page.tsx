"use client";

import React, { useLayoutEffect, useMemo } from "react";

/** Modules compositions */
import { MockUpGeneratorModuleComposition } from "@/modules-compositions/mock-up-generator-ui-module";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";
import { CreateMockUpScreenLayout } from "./layouts/Screen";
import { MockUpSettingsWizardLayout } from "./layouts/Wizard";
import { MockUpPreviewSceneLayout } from "./layouts/PreviewScene";

export default function Page(): React.JSX.Element {
  useMemo(function _initializeModules(): void {
    MockUpGeneratorModuleComposition.utils.init();
  }, []);

  useLayoutEffect(function _onPageCloseEffect() {
    return function _onPageClose() {
      MockUpGeneratorModuleComposition.utils.clear();
    };
  }, []);

  return (
    <main>
      <WideWrapperLayout>
        <CreateMockUpScreenLayout>
          {
            /** Mock-up preview scene (Left side) */
            <MockUpPreviewSceneLayout>
              <MockUpGeneratorModuleComposition.view.MockUpPreview />
            </MockUpPreviewSceneLayout>
          }
          {
            /** Mock-up settings wizard (Right side) */
            <MockUpSettingsWizardLayout>
              <MockUpGeneratorModuleComposition.view.MockUpSettingsWizard />
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
}
