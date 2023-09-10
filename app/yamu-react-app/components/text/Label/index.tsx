import React, { Fragment, ReactNode } from "react";

interface LabelInterface {
  children: ReactNode;
}

export function Label({ children }: LabelInterface): ReactNode {
  return (
    <Fragment>
      <span className="block text-sm cursor-default text-[#181818] opacity-60 dark:text-white dark:opacity-60">
        {children}
      </span>
    </Fragment>
  );
}
