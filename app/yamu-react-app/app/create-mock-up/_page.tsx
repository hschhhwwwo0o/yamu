"use client";

import React, { useLayoutEffect, useMemo } from "react";

/** Modules */
import { MockUpHTMLRenderer } from "@module/mock-up-html-renderer";
import { MockUpGenerator } from "@module/mock-up-generator";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";
import { CreateMockUpScreenLayout } from "./layouts/CreateMockUpScreenLayout";
import { MockUpSettingsWizardLayout } from "./layouts/MockUpSettingsWizardLayout";
import { MockUpPreviewSceneLayout } from "./layouts/MockUpPreviewSceneLayout";

/** Components */
import { H2 } from "@/components/text/H2";

export default function Page(): React.JSX.Element {
  /** Initialize mock-up generator module */
  const mockUpGenerator = useMemo(() => new MockUpGenerator(), []);

  /** Initialize mock-up renderer module */
  const mockUpHTMLRenderer = useMemo(
    () =>
      new MockUpHTMLRenderer("mock-up-container", {
        heightInaccuracy: 70,
      }),
    [],
  );

  useLayoutEffect(function onInitializeRenderMockUp(): void {
    (async function () {
      /** Select default device */
      await mockUpGenerator.selectDevice("Apple Watch Ultra");

      /** Generate render data */
      const renderData = mockUpGenerator.generateRenderData();

      /** Rendering */
      mockUpHTMLRenderer.render(renderData);
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
              <H2>Mock-up settings wizard</H2>
            </MockUpSettingsWizardLayout>
          }
        </CreateMockUpScreenLayout>
      </WideWrapperLayout>
    </main>
  );
}
