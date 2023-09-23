import React, { Fragment, ReactNode } from "react";

interface H1Interface {
  children: string;
  className?: string;
}

export function H1({ children, className = "" }: H1Interface): ReactNode {
  return (
    <Fragment>
      <span className={`block ${className}`}>
        <h1 className="text-3xl lg:text-6xl 2xl:text-6xl font-extrabold text-black dark:text-white mt-2">
          {children}
        </h1>
      </span>
    </Fragment>
  );
}
