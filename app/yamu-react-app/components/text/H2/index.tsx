import React, { Fragment, ReactNode } from "react";

interface H2Interface {
  children: string;
}

export function H2({ children }: H2Interface): ReactNode {
  return (
    <Fragment>
      <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white">
        {children}
      </h2>
    </Fragment>
  );
}
