import React, { Fragment } from "react";

/** Controllers */
import { observer } from "mobx-react-lite";
import { MockUpImageViewController } from "../../controllers/_mock-up-image-state-view-controller";

/** Styles */
import styles from "./styles.module.css";

/** @requirement UF/MOCK-UP/RENDER */
export const MockUpPreview = observer(function MockUpPreview() {
  return (
    <Fragment>
      {MockUpImageViewController.image && (
        <img
          className={styles.preview}
          src={MockUpImageViewController.image}
          alt="Mock-up"
        />
      )}
    </Fragment>
  );
});
