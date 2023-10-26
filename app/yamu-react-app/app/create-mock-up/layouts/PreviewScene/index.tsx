import React, { Fragment, ReactNode } from "react";

interface MockUpPreviewSceneLayoutInterface {
  children?: ReactNode;
}

export function MockUpPreviewSceneLayout({
  children,
}: MockUpPreviewSceneLayoutInterface): React.JSX.Element {
  return (
    <Fragment>
      <div className="bg-[url(/textures/light-block-texture.png)] dark:bg-[url(/textures/dark-block-texture.png)] w-full min-h-[580px] lg:min-h-full lg:h-full border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-solid border-light-default-border dark:border-dark-default-border flex items-center justify-center">
        <div className="w-full h-full py-10 px-10 flex items-center justify-center">
          {children}
        </div>
      </div>
    </Fragment>
  );
}
