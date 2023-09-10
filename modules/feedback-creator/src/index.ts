class FeedbackCreator {
  constructor() {}

  /**
   * Sending feedback
   * @requirement UF/FEEDBACK/CREATE
   */
  public async createFeedback(feedback: string = ""): Promise<void> {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (feedback) {
          resolve();
        } else {
          reject();
        }
      }, 1758);
    });
  }
}

export { FeedbackCreator };
