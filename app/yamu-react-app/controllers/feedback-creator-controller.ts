/** Modules */
import { FeedbackCreator } from "@module/feedback-creator";

class _FeedbackCreatorController {
  /**
   * Sending feedback
   *
   * @requirement UF/FEEDBACK/CREATE
   */
  public async sendFeedback(text = "") {
    const _feedbackCreatorModule = new FeedbackCreator();
    await _feedbackCreatorModule.createFeedback(text);
  }
}

const FeedbackCreatorController = new _FeedbackCreatorController();

export { FeedbackCreatorController };
