import React, { Fragment } from "react";

/** Initialize metadata */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YAMU. About",
  description:
    "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
  openGraph: {
    title: "YAMU. About",
    description:
      "Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.",
    type: "article",
  },
};

export default function AboutScreen(): React.JSX.Element {
  return (
    <main>
      <Fragment />
    </main>
  );
}
