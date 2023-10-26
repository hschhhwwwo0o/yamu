import { MockUpImageViewController } from "../controllers/_mock-up-image-state-view-controller";
import { MockUpWizardViewController } from "../controllers/_wizard-state-view-controller";
import { MockUpController } from "../controllers/mock-up-controller";

export function _clear() {
  MockUpWizardViewController.toDefaultStep();
  MockUpController.clear();
  MockUpImageViewController.setImage(undefined);
}
