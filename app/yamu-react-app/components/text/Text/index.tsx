import React, { Fragment, ReactNode } from "react";

interface TextInterface {
  children: ReactNode;
  className?: string;
}

export function Text({ children, className = "" }: TextInterface): ReactNode {
  return (
    <Fragment>
      <span className={`block ${className}`}>
        <span className="text-black opacity-80 block dark:text-white dark:opacity-80">
          {children}
        </span>
      </span>
    </Fragment>
  );
}
