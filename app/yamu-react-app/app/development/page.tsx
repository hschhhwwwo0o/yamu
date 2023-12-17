import React, { useMemo } from "react";

/** Layouts */
import { DefaultWrapperLayout } from "@/components/layouts/DefaultWrapperLayout";

/** Components */
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";
import { H2 } from "@/components/text/H2";
import { LinkCustom } from "@/components/text/Link";
import { MotionBlock } from "@/components/shared/MotionBlock";

/** Page metadata */
import { metadata } from "./_metadata";
export { metadata };

export default function DevelopmentScreen(): React.JSX.Element {
  const currentYear: number = useMemo(function _getCurrentYear(): number {
    return new Date().getFullYear();
  }, undefined);

  return (
    <main>
      <DefaultWrapperLayout>
        <div className="px-mobile-padding md:px-laptop-padding pb-10">
          <MotionBlock>
            <H1 className="mt-10 md:mt-20">Development.</H1>
          </MotionBlock>
          <MotionBlock delay={0.1}>
            <Text className="mt-10">
              Copyright (c) {currentYear} Saveliy Andronov.
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.2}>
            <Text className="mt-6">
              Tracking of tasks was done using GitHub Projects (👎). <br />
              <br /> The development of the project was divided into several
              stages: <br />
              1) Development of software requirements; <br />
              2) Design development; <br />
              3) Module development; <br />
              4) Application development
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.3}>
            <H2 className="mt-10">1. Development of software requirements.</H2>
          </MotionBlock>
          <MotionBlock delay={0.4}>
            <Text className="mt-6">
              Before starting to develop the code base, the requirements to the
              software product were thought over. Functional and user
              requirements, quality attributes were formulated; a data
              dictionary and a dictionary of terms were compiled.
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.5}>
            <Text className="mt-6">
              A unique ID is created for each requirement. At the stage the code
              writing phase, the ID of the requirement to be implemented is
              marked in the comment; this makes it easy to find the
              implementation of a particular requirement in the code base. In
              the book «Development of software requirements» by Carl Vigers &
              Jay Beatty, this approach is called requirements tracking.
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.6}>
            <H2 className="mt-10">2. Design development.</H2>
          </MotionBlock>
          <MotionBlock delay={0.7}>
            <Text className="mt-6">
              The design of the application was developed in Figma/Photoshop.
              The design was developed in accordance with the previously
              developed software requirements.
            </Text>
          </MotionBlock>
          <MotionBlock delay={0.8}>
            <H2 className="mt-10">3. Module development.</H2>
          </MotionBlock>
          <MotionBlock delay={0.9}>
            <Text className="mt-6">
              The project is separated into modules and application; modules are
              responsible for implementing the business logic; application is
              responsible for rendering the UI and executing the business logic
              through the modules. Thus, the application (in this case, the
              NextJS framework) is responsible only for displaying the UI, while
              the modules contain all the business logic. Each module performs
              only one task and should not interact with other modules in any
              way.
            </Text>
          </MotionBlock>
          <MotionBlock delay={1}>
            <Text className="mt-6">
              The purpose of this separation is to separate business logic from
              fickle and windy frameworks and libraries that have nothing to do
              with business logic. The modules are designed in such a way that
              they can be used independently of the framework; this makes it
              very easy to migrate from ReactJS to VueJS, for example.
            </Text>
          </MotionBlock>
          <MotionBlock delay={1.1}>
            <H2 className="mt-10">4. Application development.</H2>
          </MotionBlock>
          <MotionBlock delay={1.2}>
            <Text className="mt-6">
              Creating an application UI and using already developed modules in
              it.
            </Text>
          </MotionBlock>
          <MotionBlock delay={1.3}>
            <LinkCustom
              className="mt-10"
              withLabel
              href="https://github.com/hschhhwwwo0o/yamu"
            >
              Read full documentation on GitHub
            </LinkCustom>
          </MotionBlock>
        </div>
      </DefaultWrapperLayout>
    </main>
  );
}
