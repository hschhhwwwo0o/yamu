"use client";

import React, { Fragment } from "react";

/** Controllers */
import { FeedbackCreatorController } from "../controllers/feedback-creator-controller";

/** Components */
import { Textarea, useTextarea } from "@/components/form/Textarea";
import { Button, useButton } from "@/components/form/Button";

export function FeedbackForm(): React.JSX.Element {
  const feedbackTextareaUI = useTextarea({});

  const createFeedbackButtonUI = useButton({
    loadingText: "Creating feedback...",
    isDisabled: feedbackTextareaUI.props.value.length < 5,

    /**
     * Sending feedback
     * @requirement UF/FEEDBACK/CREATE
     */
    onClick: async function _createFeedback(): Promise<void> {
      try {
        {
          createFeedbackButtonUI.utils.startLoading();
          feedbackTextareaUI.utils.disableInput();
        }
        {
          await FeedbackCreatorController.sendFeedback(
            feedbackTextareaUI.props.value,
          );
        }
        {
          feedbackTextareaUI.utils.clear();
        }
      } catch (_error) {
        console.error(_error);
      } finally {
        createFeedbackButtonUI.utils.toDefaultStatus();
        feedbackTextareaUI.utils.undisableInput();
      }
    },
  });

  return (
    <Fragment>
      <div>
        <div className="block">
          <Textarea
            {...feedbackTextareaUI.props}
            isAutofocus
            title="Enter your feedback:"
            placeholder="Enter your feedback about the service. The minimum number of characters is 5."
          />
          <Button
            {...createFeedbackButtonUI.props}
            label="By submitting feedback you will help make the product better."
          >
            Create feedback
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
