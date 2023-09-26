"use client";

import React, { useLayoutEffect, useMemo } from "react";

/** Connect to store */
import { CreateMockUpScreenStore as CMSS } from "./_store";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";
import { CreateMockUpScreenLayout } from "./layouts/CreateMockUpScreenLayout";
import { MockUpSettingsWizardLayout } from "./layouts/MockUpSettingsWizardLayout";
import { MockUpPreviewSceneLayout } from "./layouts/MockUpPreviewSceneLayout";

/** Components */
import { MockUpSettingsWizard } from "./components/MockUpSettingsWizard";

export default function Page(): React.JSX.Element {
  useMemo(function _initializeModules() {
    CMSS.initializeMockUpGenerator();
    CMSS.initializeMockUpHTMLRenderer("mock-up-container");
  }, []);

  useLayoutEffect(function _onPageCloseEffect() {
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
              <MockUpSettingsWizard />
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
}
