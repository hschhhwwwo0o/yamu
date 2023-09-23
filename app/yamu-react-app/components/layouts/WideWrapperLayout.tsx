import React, { Fragment, ReactNode } from "react";

interface WideWrapperLayoutPropsInterface {
  children: ReactNode;
}

export function WideWrapperLayout({
  children,
}: WideWrapperLayoutPropsInterface) {
  return (
    <Fragment>
      <div className="w-screen flex flex-row justify-center items-center h-full">
        <div className="max-w-[1540px] w-full">{children}</div>
      </div>
    </Fragment>
  );
}
