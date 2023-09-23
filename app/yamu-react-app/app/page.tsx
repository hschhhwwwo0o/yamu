"use client";

import React, { Fragment } from "react";

/** Layouts */
import { DefaultWrapperLayout } from "@/components/layouts/DefaultWrapperLayout";

/** Components */
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";
import { Button } from "@/components/form/Button";
import { H2 } from "@/components/text/H2";
import { LinkCustom } from "@/components/text/Link";

export default function IndexScreen(): React.JSX.Element {
  return (
    <Fragment>
      <main>
        <DefaultWrapperLayout>
          <div className="w-full h-full flex flex-row justify-center px-mobile-padding md:px-laptop-padding">
            <div className="mt-10 md:mt-20 pb-10">
              <div className="max-w-[490px]">
                <H1>Make mock-up easy.</H1>
                <Text className="mt-6">
                  The application is designed for creating mock-ups. Create
                  product mock-ups with the online mock-up generator.
                </Text>
                <Button
                  navigatePath="/create-mock-up"
                  label="Simply select a mock-up, upload your design and download a watermark-free image."
                  className="mt-8"
                >
                  Create mock-up
                </Button>
              </div>
              <div className="mt-10">
                <H2>Links.</H2>
                <LinkCustom
                  target="_blank"
                  withLabel
                  className="mt-4"
                  href="https://github.com/hschhhwwwo0o/yamu"
                >
                  Go to code
                </LinkCustom>
                <LinkCustom
                  target="_blank"
                  withLabel
                  className="mt-2"
                  href="https://github.com/hschhhwwwo0o"
                >
                  Author
                </LinkCustom>
                <LinkCustom
                  target="_blank"
                  withLabel
                  className="mt-2"
                  href="https://github.com/hschhhwwwo0o/yamu#development"
                >
                  Documentation
                </LinkCustom>
              </div>
            </div>
            <div className="w-[0%] bg-green-300 h-full"></div>
          </div>
        </DefaultWrapperLayout>
      </main>
    </Fragment>
  );
}
