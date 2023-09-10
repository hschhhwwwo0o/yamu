"use client";

import React, { Fragment } from "react";

/** Modules */
import { FeedbackCreator } from "@feedback-creator";

/** Components */
import { Textarea, useTextarea } from "@/components/form/Textarea";
import { Button, useButton } from "@/components/form/Button";

export function FeedbackForm() {
  const feedbackTextarea = useTextarea({});

  const createFeedbackButton = useButton({
    loadingText: "Creating feedback...",
    isDisabled: feedbackTextarea.props.value.length < 5,

    /**
     * Sending feedback
     * @requirement UF/FEEDBACK/CREATE
     */
    onClick: async function createFeedback() {
      createFeedbackButton.utils.startLoading();
      try {
        await new FeedbackCreator().createFeedback(
          feedbackTextarea.props.value,
        );
      } catch (error) {
        console.error(error);
      } finally {
        createFeedbackButton.utils.toDefaultStatus();
      }
    },
  });

  return (
    <Fragment>
      <span className="block">
        <Textarea {...feedbackTextarea.props} title="Enter feedback" />
        <span className="block mt-3">
          <Button
            {...createFeedbackButton.props}
            label="By submitting feedback you will help make the product better."
          >
            Create feedback
          </Button>
        </span>
      </span>
    </Fragment>
  );
}
