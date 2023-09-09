import React, { Fragment, ReactNode } from "react";

interface TextInterface {
  children: ReactNode;
}

export function Text({ children }: TextInterface): ReactNode {
  return (
    <Fragment>
      <span className="text-black opacity-80 block dark:text-white dark:opacity-80">
        {children}
      </span>
    </Fragment>
  );
}
