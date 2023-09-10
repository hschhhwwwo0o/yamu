class FeedbackCreator {
  constructor() {}

  /**
   * Sending feedback
   * @requirement UF/FEEDBACK/CREATE
   */
  public async createFeedback(feedback: string = ""): Promise<void> {
    if (feedback) {
      console.log("Send feedback");
    }
    return;
  }
}

export { FeedbackCreator };
