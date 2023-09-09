import React, { Fragment, ReactNode } from "react";

interface LabelInterface {
  children: ReactNode;
}

export function Label({ children }: LabelInterface) {
  return (
    <Fragment>
      <div className="text-[#181818] opacity-60 dark:text-white dark:opacity-60">
        {children}
      </div>
    </Fragment>
  );
}
