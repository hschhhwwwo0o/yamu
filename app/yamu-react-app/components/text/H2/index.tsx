import React, { Fragment } from "react";

interface H2Interface {
  children: string;
}

export function H2({ children }: H2Interface) {
  return (
    <Fragment>
      <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white">
        {children}
      </h2>
    </Fragment>
  );
}
