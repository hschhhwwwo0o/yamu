import React from "react";

/** Components */
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { H1 } from "@/components/text/H1";
import { Text } from "@/components/text/Text";
import { H2 } from "@/components/text/H2";
import { LinkCustom } from "@/components/text/Link";

/**
 * Initialize metadata
 *
 * @requirement QA/SEO/META
 * @requirement QA/SEO/OPEN-GRAPH
 */
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YAMU. Development",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  openGraph: {
    title: "YAMU. Development",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "article",
  },
};

export default function DevelopmentScreen(): React.JSX.Element {
  return (
    <main>
      <DefaultLayout>
        <div className="px-mobile-padding md:px-laptop-padding pb-10">
          <span className="block mt-10 md:mt-20">
            <H1>Development.</H1>
          </span>
          <span className="block mt-10">
            <Text>Copyright (c) 2023 Saveliy Andronov.</Text>
          </span>
          <span className="block mt-6">
            <Text>
              Tracking of tasks was done using GitHub Projects (👎). <br />
              <br /> The development of the project was divided into several
              stages: <br />
              1) Development of software requirements; <br />
              2) Design development; <br />
              3) Module development; <br />
              4) Application development
            </Text>
          </span>
          <span className="block mt-10">
            <H2>1. Development of software requirements.</H2>
          </span>
          <span className="block mt-6">
            <Text>
              Before starting to develop the code base, the requirements to the
              software product were thought over. Functional and user
              requirements, quality attributes were formulated; a data
              dictionary and a dictionary of terms were compiled.
            </Text>
          </span>
          <span className="block mt-6">
            <Text>
              A unique ID is created for each requirement. At the stage the code
              writing phase, the ID of the requirement to be implemented is
              marked in the comment; this makes it easy to find the
              implementation of a particular requirement in the code base. In
              the book «Development of software requirements» by Carl Vigers &
              Jay Beatty, this approach is called requirements tracking.
            </Text>
          </span>
          <span className="block mt-10">
            <H2>2. Design development.</H2>
          </span>
          <span className="block mt-6">
            <Text>
              The design of the application was developed in Figma/Photoshop.
              The design was developed in accordance with the previously
              developed software requirements.
            </Text>
          </span>
          <span className="block mt-10">
            <H2>3. Module development.</H2>
          </span>
          <span className="block mt-6">
            <Text>
              The project is separated into modules and application; modules are
              responsible for implementing the business logic; application is
              responsible for rendering the UI and executing the business logic
              through the modules. Thus, the application (in this case, the
              NextJS framework) is responsible only for displaying the UI, while
              the modules contain all the business logic. Each module performs
              only one task and should not interact with other modules in any
              way.
            </Text>
          </span>
          <span className="block mt-6">
            <Text>
              The purpose of this separation is to separate business logic from
              fickle and windy frameworks and libraries that have nothing to do
              with business logic. The modules are designed in such a way that
              they can be used independently of the framework; this makes it
              very easy to migrate from ReactJS to VueJS, for example.
            </Text>
          </span>
          <span className="block mt-10">
            <H2>4. Application development.</H2>
          </span>
          <span className="block mt-6">
            <Text>
              Creating an application UI and using already developed modules in
              it.
            </Text>
          </span>
          <span className="block mt-10">
            <LinkCustom withLabel href="https://github.com/hschhhwwwo0o/yamu">
              Read full documentation on GitHub
            </LinkCustom>
          </span>
        </div>
      </DefaultLayout>
    </main>
  );
}
