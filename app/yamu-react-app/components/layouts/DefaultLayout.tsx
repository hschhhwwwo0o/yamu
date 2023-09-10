import React, { Fragment, ReactNode } from "react";

interface DefaultLayoutPropsInterface {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutPropsInterface) {
  return (
    <Fragment>
      <div className="w-screen flex flex-row justify-center">
        <div className="max-w-[1240px] w-full">{children}</div>
      </div>
    </Fragment>
  );
}
