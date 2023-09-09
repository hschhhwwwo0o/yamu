import React, { Fragment, ReactNode } from "react";

interface TextInterface {
  children: ReactNode;
}

export function Text({ children }: TextInterface): ReactNode {
  return (
    <Fragment>
      <div className="text-black opacity-80 dark:text-white dark:opacity-80">
        {children}
      </div>
    </Fragment>
  );
}
