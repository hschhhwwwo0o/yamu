import React, { Fragment } from "react";

interface H1Interface {
  children: string;
}

export function H1({ children }: H1Interface) {
  return (
    <Fragment>
      <h1 className="text-3xl lg:text-6xl font-extrabold text-black dark:text-white">
        {children}
      </h1>
    </Fragment>
  );
}