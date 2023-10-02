import React, { Fragment, ReactNode } from "react";

interface DefaultWrapperLayoutPropsInterface {
  children: ReactNode;
}

export function DefaultWrapperLayout({
  children,
}: DefaultWrapperLayoutPropsInterface): React.JSX.Element {
  return (
    <Fragment>
      <div className="w-screen flex flex-row justify-center pt-2">
        <div className="max-w-[1140px] w-full">{children}</div>
      </div>
    </Fragment>
  );
}
