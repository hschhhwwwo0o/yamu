import React, { Fragment, ReactNode } from "react";

interface WideWrapperLayoutPropsInterface {
  children: ReactNode;
}

export function WideWrapperLayout({
  children,
}: WideWrapperLayoutPropsInterface) {
  return (
    <Fragment>
      <div className="w-screen flex flex-row justify-center">
        <div className="max-w-[1440px] w-full">{children}</div>
      </div>
    </Fragment>
  );
}
