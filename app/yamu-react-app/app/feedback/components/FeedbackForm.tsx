"use client";

import React, { Fragment } from "react";

/** Components */
import { Textarea, useTextarea } from "@/components/form/Textarea";
import { Button, useButton } from "@/components/form/Button";

export function FeedbackForm() {
  const feedbackTextarea = useTextarea({
    title: "Enter feedback",
  });

  const createFeedbackButton = useButton({
    loadingText: "Creating feedback...",
    isDisabled: feedbackTextarea.props.value.length < 1,
    onClick() {
      createFeedbackButton.utils.startLoading();
      setTimeout(() => {
        createFeedbackButton.utils.toDefaultStatus();
      }, 2000);
    },
  });

  return (
    <Fragment>
      <span className="block">
        <span className="block">
          <Textarea {...feedbackTextarea.props} />
        </span>
        <span className="block mt-3">
          <Button
            label="By submitting feedback you will help make the product better"
            {...createFeedbackButton.props}
          >
            Create feedback
          </Button>
        </span>
      </span>
    </Fragment>
  );
}
