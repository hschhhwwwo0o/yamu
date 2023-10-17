import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpImageViewController } from "@/app/create-mock-up/_mock-up-image-state-view-controller";

export const MockUpPreviewSceneLayout = observer(
  function MockUpPreviewSceneLayout(): React.JSX.Element {
    return (
      <Fragment>
        <div className="bg-[url(/textures/light-block-texture.png)] dark:bg-[url(/textures/dark-block-texture.png)] w-full min-h-[480px] lg:min-h-full lg:h-full border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-solid border-light-default-border dark:border-dark-default-border flex items-center justify-center">
          <div className="w-full h-full py-10 px-10 flex items-center justify-center">
            {
              /** @requirement UF/MOCK-UP/RENDER */
              MockUpImageViewController.image && (
                <img
                  className="h-full w-full object-contain"
                  src={MockUpImageViewController.image}
                  alt="Mock-up"
                />
              )
            }
          </div>
        </div>
      </Fragment>
    );
  },
);
