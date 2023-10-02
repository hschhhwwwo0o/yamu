import React, { Fragment, ReactNode } from "react";

interface MockUpSettingsWizardLayoutPropsInterface {
  children: ReactNode;
}

export function MockUpSettingsWizardLayout({
  children,
}: MockUpSettingsWizardLayoutPropsInterface): React.JSX.Element {
  return (
    <Fragment>
      <div className="p-mobile-padding mt-2 lg:mt-0 lg:h-full lg:p-laptop-padding">
        <div className="lg:w-[375px]">{children}</div>
      </div>
    </Fragment>
  );
}
