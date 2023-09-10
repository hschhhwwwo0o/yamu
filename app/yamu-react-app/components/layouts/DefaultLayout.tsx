import React, { Fragment, ReactNode } from "react";

interface DefaultLayoutPropsInterface {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutPropsInterface) {
  return (
    <Fragment>
      <div className="w-screen flex flex-row justify-center pt-2">
        <div className="max-w-[1140px] w-full">{children}</div>
      </div>
    </Fragment>
  );
}
