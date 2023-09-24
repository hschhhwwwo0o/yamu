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

  useLayoutEffect(function _firstRenderMockUpEffect(): void {
    (async function () {
      await mockUpGenerator?.selectDevice("Apple Watch Ultra");
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
                <CreateMockUpFirstStepWizard />
              }
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
});
