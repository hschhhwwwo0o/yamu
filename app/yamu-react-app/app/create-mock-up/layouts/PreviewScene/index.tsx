import React, { Fragment, ReactNode } from "react";

interface MockUpPreviewSceneLayoutPropsInterface {
  children: ReactNode;
}

export function MockUpPreviewSceneLayout({
  children,
}: MockUpPreviewSceneLayoutPropsInterface): React.JSX.Element {
  return (
    <Fragment>
      <div className="bg-[url(/textures/light-block-texture.png)] dark:bg-[url(/textures/dark-block-texture.png)] w-full h-[80vh] lg:h-full border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-solid border-light-default-border dark:border-dark-default-border flex items-center justify-center">
        {children}
      </div>
    </Fragment>
  );
}
