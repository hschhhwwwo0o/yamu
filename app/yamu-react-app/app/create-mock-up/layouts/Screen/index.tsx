import React, { Fragment, ReactNode } from "react";

interface CreateMockUpScreenLayoutPropsInterface {
  children: ReactNode;
}

export function CreateMockUpScreenLayout({
  children,
}: CreateMockUpScreenLayoutPropsInterface): React.JSX.Element {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row lg:justify-between w-full h-screen-without-top-navbar-height 2xl:border-l 2xl:border-r border-light-default-border dark:border-dark-default-border 2xl:border-solid">
        {children}
      </div>
    </Fragment>
  );
}
