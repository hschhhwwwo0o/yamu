import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpImageViewController } from "../../controllers/_mock-up-image-state-view-controller";

/** @requirement UF/MOCK-UP/RENDER */
export const MockUpPreview = observer(function MockUpPreview() {
  return (
    <Fragment>
      {MockUpImageViewController.image && (
        <div>
          <img
            className="h-full w-full object-contain"
            src={MockUpImageViewController.image}
            alt="Mock-up"
          />
        </div>
      )}
    </Fragment>
  );
});
