import React, { Fragment, ReactNode } from "react";

interface H2Interface {
  children: string;
  className?: string;
}

export function H2({ children, className = "" }: H2Interface): ReactNode {
  return (
    <Fragment>
      <span className={`block ${className}`}>
        <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mt-2">
          {children}
        </h2>
      </span>
    </Fragment>
  );
}
