import React from "react";

/** Layouts */
import { WideWrapperLayout } from "@/components/layouts/WideWrapperLayout";

/** Components */
import { H2 } from "@/components/text/H2";
import { Text } from "@/components/text/Text";

import { metadata } from "./metadata";
export { metadata };

export default function CreateMockUpScreen(): React.JSX.Element {
  return (
    <main>
      <WideWrapperLayout>
        <div className="flex flex-col lg:flex-row lg:justify-between w-full h-screen-without-top-navbar-height 2xl:border-l 2xl:border-r border-light-default-border dark:border-dark-default-border 2xl:border-solid">
          {
            /** Mock-up preview scene */
            <div className="bg-[url(/textures/dark-block-texture.png)] w-full h-[80vh] lg:h-full border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-solid  dark:border-dark-default-border flex items-center justify-center">
              <Text>Mock-up preview scene</Text>
            </div>
          }
          {
            /** Mock-up settings wizard */
            <div className="p-mobile-padding mt-2 lg:mt-0 lg:h-full lg:p-laptop-padding">
              <div className="lg:w-[375px]">
                <span className="block w-[80%]">
                  <H2>Mock-up settings wizard</H2>
                </span>
              </div>
            </div>
          }
        </div>
      </WideWrapperLayout>
    </main>
  );
}
