"use client";

import React, { Fragment } from "react";

/** Components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";
import { Button } from "@/components/form/Button";
import { H2 } from "@/components/text/H2";
import { LinkCustom } from "@/components/text/Link";

export default function IndexScreen(): React.JSX.Element {
  return (
    <Fragment>
      <main>
        <TheTopNavigation />
        <DefaultLayout>
          <div className="w-full h-full flex flex-row justify-center px-mobile-padding md:px-laptop-padding">
            <div className="mt-10 md:mt-20 pb-10">
              <div className="max-w-[490px]">
                <span>
                  <H1>Make mock-up easy</H1>
                </span>
                <span className="block mt-6">
                  <Text>
                    The application is designed for creating mock-ups. Create
                    product mock-ups with the online mock-up generator.
                  </Text>
                </span>
                <span className="block mt-8">
                  <Button label="Simply select a mock-up, upload your design and download a watermark-free image.">
                    Create mock-up
                  </Button>
                </span>
              </div>
              <div className="mt-10">
                <H2>Links</H2>
                <div>
                  <span className="block mt-4">
                    <LinkCustom withLabel href="/">
                      Go to code
                    </LinkCustom>
                  </span>
                  <span className="block mt-2">
                    <LinkCustom withLabel href="/">
                      Author
                    </LinkCustom>
                  </span>
                  <span className="block mt-2">
                    <LinkCustom withLabel href="/">
                      Documentation
                    </LinkCustom>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[0%] bg-green-300 h-full"></div>
          </div>
        </DefaultLayout>
      </main>
    </Fragment>
  );
}
